"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from "react-modal";
import { useEffect, useRef, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { HiCamera } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-auto">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <Image
            className="hidden lg:inline-flex"
            src={"/Instagram_logo_black.webp"}
            width={96}
            height={96}
          ></Image>
          <Image
            className="lg:hidden"
            src={"/800px-Instagram_logo_2016.webp"}
            width={40}
            height={40}
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
            <HiCamera className="hover:brightness-105 text-4xl text-gray-300 cursor-pointer " />
            <input
              className="m-4 border-none  text-center w-full focus:ring-0 outline-none"
              type="text"
              maxLength="150"
              placeholder="Enter caption here"
            />
            <button className="w-full bg-blue-300 rounded-xl text-white p-2 shadow-md hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed">
              Upload post
            </button>
            <MdClose
              className="cursor-pointer absolute top-2 right-2 hover:text-red-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
