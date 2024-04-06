"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10 w-full">
      <img
        className="rounded-full w-16 h-16 border p-[2px]"
        src={session?.user?.image || "800px-Instagram_logo_2016.webp"}
        alt="Userpic"
      />
      <div className="flex-1 pl-2">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-500">Welcome to mini Insta</h3>
      </div>
      {session ? (
        <button
          className="text-red-500 text-sm font-semibold hover:brightness-150 "
          onClick={signOut}
        >Signout</button>
      ) : (
        <button className="text-blue-600 text-sm font-semibold hover:brightness-150" onClick={signIn}>Signin</button>
      )}
    </div>
  );
}
