'use client';
import { signOut, useSession } from '@/lib/auth-client';
import React from 'react';
import Navlink from './Navlink';
import Link from 'next/link';

const Navbar = () => {
    const { data, isPending } = useSession();

    if (isPending) {
        return <div className="p-4 text-center">Loading...</div>
    }

    const user = data?.user;

    const menuItems = (
        <>
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/all-books">All Books</Navlink></li>
            <li><Navlink href="/profile">My Profile</Navlink></li>
        </>
    );

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="container flex mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl px-0 sm:px-4">
                        <span className='text-blue-500'>Books</span>Borrow
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-1 py-2 pr-2 md:gap-3">
                        {user ? (
                            <>
                                <p className='text-blue-500 font-bold text-sm md:text-base whitespace-nowrap'>
                                    {user.name}!
                                </p>
                                <button
                                    onClick={() => signOut()}
                                    className='btn btn-primary btn-sm md:btn-md'
                                >Log Out</button>
                            </>
                        ) : (
                            <Link href="/login" className='btn btn-primary btn-sm md:btn-md'>Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;