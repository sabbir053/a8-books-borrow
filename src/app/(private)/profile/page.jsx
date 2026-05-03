'use client';
import React from 'react';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { FiUser, FiMail, FiEdit2, FiShield, FiCamera } from 'react-icons/fi';
import Image from 'next/image';

const ProfilePage = () => {
    const { data, isPending } = useSession();

    if (isPending) {
        return <div>Loading...</div>
    }
    console.log("Session Data in Navbar:", data);

    const user = data?.user;


    return (
        <div className="min-h-screen bg-base-200/30 py-12 px-4">
            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-3xl border border-base-300 shadow-xl overflow-hidden">

                    <div className="h-32 bg-linear-to-r from-primary to-secondary relative">
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                            <div className="relative group">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg bg-white"
                                />
                                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                    <FiCamera className="text-white text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-8 px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-base-200 pb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-base-content">{user.name}</h1>
                                <p className="text-base-content/60 flex items-center gap-2 mt-1">
                                    <FiShield className="text-primary" /> Verified Member
                                </p>
                            </div>

                            <Link
                                href="/profile/update"
                                className="btn btn-primary rounded-xl px-6 flex items-center gap-2 group"
                            >
                                <FiEdit2 className="group-hover:rotate-12 transition-transform" />
                                Update Profile
                            </Link>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="p-4 bg-base-100 rounded-2xl border border-base-200 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <FiUser size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Full Name</p>
                                    <p className="font-semibold text-lg">{user.name}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-base-100 rounded-2xl border border-base-200 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Email Address</p>
                                    <p className="font-semibold text-lg">{user.email}</p>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <h3 className="font-bold mb-2">Account Statistics</h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-black text-primary">12</p>
                                    <p className="text-xs text-base-content/60 uppercase">Books Read</p>
                                </div>
                                <div className="border-x border-base-300">
                                    <p className="text-2xl font-black text-primary">05</p>
                                    <p className="text-xs text-base-content/60 uppercase">Currently Borrowed</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-primary">02</p>
                                    <p className="text-xs text-base-content/60 uppercase">Reviews</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;