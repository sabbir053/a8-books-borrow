'use client';
import React, { useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { FiUser, FiMail, FiEdit2, FiShield, FiCamera } from 'react-icons/fi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const { data, isPending } = useSession();
    const router = useRouter();

    const user = data?.user;

    useEffect(() => {
        if (!isPending && !user) {
            toast.error("Please login first!");
            router.push('/login');
        }
    }, [user, isPending, router]);

    if (isPending) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-base-200/30 py-12 px-4">
            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-3xl border border-base-300 shadow-xl overflow-hidden">

                    <div className="h-32 bg-linear-to-r from-primary to-secondary relative">
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                            <div className="relative group">
                                <Image
                                    src={user.image || 'https://i.ibb.co.com/678sPNTc/social-media-platforms-represented-as-a-colorful-cube-png.png'}
                                    alt={user.name}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pb-8 px-6 md:px-12">
                        <div className="flex justify-between items-center border-b pb-6">
                            <div>
                                <h1 className="text-3xl font-bold">{user.name}</h1>
                                <p className="flex items-center gap-2 mt-1">
                                    <FiShield className="text-primary" /> Verified Member
                                </p>
                            </div>

                            <Link href="/profile/update" className="btn btn-primary rounded-xl px-6 flex items-center gap-2">
                                <FiEdit2 />
                                Update Profile
                            </Link>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="p-4 bg-base-100 rounded-2xl border flex items-center gap-4">
                                <FiUser />
                                <div>
                                    <p className="text-xs uppercase">Full Name</p>
                                    <p className="font-semibold">{user.name}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-base-100 rounded-2xl border flex items-center gap-4">
                                <FiMail />
                                <div>
                                    <p className="text-xs uppercase">Email</p>
                                    <p className="font-semibold">{user.email}</p>
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