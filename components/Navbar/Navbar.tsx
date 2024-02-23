'use client';
import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';

const Navbar = () => {
    const session = auth;
    return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={'/'} passHref>
          <button className="btn btn-ghost text-xl">Circles</button>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image alt="Tailwind CSS Navbar component" src={session?.user?.image} width={40} height={40} layout="fixed" />
            </div>
          </button>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <button className="justify-between">
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li><button>Settings</button></li>
            <li><button className='btn' onClick={() => signOut()}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
