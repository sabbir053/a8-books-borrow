'use client';
import React from 'react';
import Updates from "@/components/Updates";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FiCheck, FiImage, FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

const UpdatesPage = () => {

    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const UserData = Object.fromEntries(formData.entries());
        console.log('user data', UserData);

        if (!UserData.name || !UserData.photoUrl) {
            toast.error("Please fill in all required fields.");
        } else {
            await authClient.updateUser({
                image: UserData.photoUrl,
                name: UserData.name,
            });
            toast.success("Account updated successfully!");
            router.push("/profile");
        }
    };

    return (
        <Form onSubmit={handleUpdate} className="flex flex-col gap-6">

            <TextField isRequired name="name" className="flex flex-col gap-1">
                <Label className="text-xs font-bold text-gray-600 ml-1">Full Name</Label>
                <Input
                    name="name"
                    placeholder="Your Name"
                    startContent={<FiUser className="text-blue-500 mr-1" />}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2"
                />
                <FieldError className="text-[10px] text-red-500" />
            </TextField>

            <TextField isRequired name="photoUrl" className="flex flex-col gap-1">
                <Label className="text-xs font-bold text-gray-600 ml-1">Photo URL</Label>
                <Input
                    name="photoUrl"
                    placeholder="https://example.com/photo.jpg"
                    startContent={<FiImage className="text-blue-500 mr-1" />}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2"
                />
                <FieldError className="text-[10px] text-red-500" />
            </TextField>
            <div className="flex flex-col gap-3 mt-2">
                <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                    <FiCheck /> Update Profile
                </Button>
            </div>
        </Form>
    );
};

export default UpdatesPage;