"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from "react-modal";
import { useEffect, useRef, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { MdAddAPhoto } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { app } from "@/firebase";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [postUploading, setPostUploading] = useState(false);
  const [caption, setCaption] = useState("");
  const filePickerRef = useRef();
  const db = getFirestore(app);
  async function uploadImageToStorage() {
    setImageFileUploading(true);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "--" + selectedFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done...");
      },
      (error) => {
        console.log(error);
        setImageFileUploading(false);
        setImageFileUrl(null);
        setSelectedFile(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
          setImageFileUploading(false);
        });
      }
    );
  }
  useEffect(() => {
    if (selectedFile) {
      uploadImageToStorage();
    }
  }, [selectedFile]);

  function addImageToPost(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageFileUrl(URL.createObjectURL(file));
      console.log(imageFileUrl);
    }
  }
  async function handleSubmit() {
    setPostUploading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption,
      profileImg: session.user.image,
      image: imageFileUrl,
      timestamp: serverTimestamp(),
    });
    setPostUploading(false);
    setIsOpen(false);
  }
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-auto">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <Image
            className="hidden lg:inline-flex"
            src={"/Instagram_logo_black.webp"}
            width={96}
            height={96}
            alt="Logo"
          ></Image>
          <Image
            className="lg:hidden"
            src={"/800px-Instagram_logo_2016.webp"}
            width={40}
            height={40}
            alt="Logo"
          ></Image>
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 border border-gray-200 w-full rounded-lg py-2 px-4 max-w-[210px] "
        />
        {session ? (
          <div className="flex gap-2 items-center">
            <GoPlusCircle
              onClick={() => setIsOpen(true)}
              className="text-2xl cursor-pointer transform  hover:scale-125 transition duration-300 hover:text-red-600"
            />
            <img
              onClick={signOut}
              className="w-10 h-10 rounded-full cursor-pointer hover:brightness-105"
              src={session.user.image}
              alt={`${session.user.name} Photo`}
            />
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500"
          >
            Login
          </button>
        )}
      </div>
      {isOpen && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md "
          onRequestClose={() => setIsOpen(false)}
          ariaHideApp={false}
          isOpen={isOpen}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                src={imageFileUrl}
                alt="selected photo"
                className={`w-full m-h-[250px] object-cover cursor-pointer flex justify-center items-center ${
                  imageFileUploading ? "animate-pulse" : ""
                }`}
                onClick={() => setSelectedFile(null)}
              />
            ) : (
              <MdAddAPhoto
                onClick={() => filePickerRef.current.click()}
                className="hover:text-gray-600 text-5xl text-gray-300 cursor-pointer "
              />
            )}
            <input
              ref={filePickerRef}
              hidden
              onChange={addImageToPost}
              accept="image/*"
              className=""
              type="file"
            />

            <input
              className="m-4 border-none  text-center w-full focus:ring-0 outline-none"
              type="text"
              maxLength="150"
              placeholder="Enter caption here"
              onChange={(e) => setCaption(e.target.value)}
            />
            <button
              disabled={
                !selectedFile ||
                !caption.trim() === "" ||
                postUploading ||
                imageFileUploading
              }
              onClick={handleSubmit}
              className="w-full bg-blue-300 rounded-xl text-white p-2 shadow-md hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              Upload post
            </button>
            <MdClose
              className="cursor-pointer absolute top-2 right-2 hover:text-red-300  text-red-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
