'use client';
import { authClient } from "@/lib/auth-client";
import { FiMail, FiLock, FiCheck, FiRefreshCcw, FiUser, FiImage } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";

const RegisterPage = () => {
    const router = useRouter();
      const [isVisible, setIsVisible] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const UserData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: UserData.name,
            email: UserData.email,
            password: UserData.password,
            image: UserData.photoUrl,
            callbackURL: "/login"
        });

        if (error) {
            toast.error("Registration failed!");
        } else {
            toast.success("Account created successfully! Please login.");
            router.push("/login");
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 p-6">
            <div className="w-full max-w-md bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">

                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h1>
                    <p className="text-gray-500 text-sm mt-1">Join our book borrowing community</p>
                </div>

                <Button
                    onPress={handleGoogleLogin}
                    className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-6 rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 mb-6"
                >
                    <FcGoogle size={24} /> Continue with Google
                </Button>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-medium">Or email register</span></div>
                </div>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit} validationBehavior="native">

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

                    <TextField isRequired name="email" type="email" className="flex flex-col gap-1">
                        <Label className="text-xs font-bold text-gray-600 ml-1">Email</Label>
                        <Input
                            name="email"
                            placeholder="john@example.com"
                            startContent={<FiMail className="text-blue-500 mr-1" />}
                            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2"
                        />
                        <FieldError className="text-[10px] text-red-500" />
                    </TextField>

                    {/* <TextField isRequired name="password" type="password" className="flex flex-col gap-1">
                        <Label className="text-xs font-bold text-gray-600 ml-1">Password</Label>
                        <Input 
                            name="password" 
                            type="password"
                            placeholder="••••••••" 
                            startContent={<FiLock className="text-blue-500 mr-1" />}
                            className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2"
                        />
                        <Description className="text-[9px] text-gray-400 ml-1">Min 8 chars, 1 uppercase, 1 number</Description>
                        <FieldError className="text-[10px] text-red-500" />
                    </TextField> */}
                    <TextField className="w-full" name="password">
                        <Label>Password</Label>

                        <InputGroup>
                            <InputGroup.Input
                                className="w-full"
                                name="password"
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter password"
                            />

                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? (
                                        <Eye className="size-4" />
                                    ) : (
                                        <EyeSlash className="size-4" />
                                    )}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <Description className="text-[9px] text-gray-400 ml-1">Min 8 chars, 1 uppercase, 1 number</Description>
                        <FieldError className="text-[10px] text-red-500" />
                    </TextField>

                    <div className="flex flex-col gap-3 mt-2">
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                        >
                            <FiCheck /> Register Now
                        </Button>
                    </div>
                </Form>

                <p className="mt-6 text-center text-sm text-gray-500 font-medium">
                    Already a member? <span onClick={() => router.push('/login')} className="text-blue-600 font-black cursor-pointer hover:underline">Login here</span>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;