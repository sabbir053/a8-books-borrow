"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, InputGroup, Label, TextField, Form, Input } from "@heroui/react";
import { FiMail, FiLogIn, FiRefreshCcw } from "react-icons/fi";

const LoginPage = () => {
    const router = useRouter();

    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const UserData = Object.fromEntries(formData.entries());

        const { error } = await authClient.signIn.email({
            email: UserData.email,
            password: UserData.password,
            rememberMe: true,
            callbackURL: "/"
        });

        if (error) {
            toast.error(error.message || "Login failed!");
        } else {
            toast.success("Welcome back!");
            router.push("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">

            <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border">

                <h1 className="text-3xl font-black mb-6">Sign In</h1>

                <Form className="flex flex-col gap-6" onSubmit={onSubmit}>

                    <TextField name="email" isRequired>
                        <Label>Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            startContent={<FiMail />}
                        />
                    </TextField>

                    <TextField name="password" isRequired>
                        <Label>Password</Label>

                        <InputGroup>
                            <InputGroup.Input
                                name="password"
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter password"
                            />

                            <InputGroup.Suffix>
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="ghost"
                                    aria-label={isVisible ? "Hide password" : "Show password"}
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
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
                    >
                        <FiLogIn /> Sign In
                    </Button>

                    <Button
                        type="reset"
                        variant="light"
                        className="w-full flex items-center justify-center gap-2"
                    >
                        <FiRefreshCcw /> Reset
                    </Button>

                    <p className="mt-8 text-center text-sm text-gray-500">
                        New here?{" "}
                        <span
                            onClick={() => router.push("/register")}
                            className="text-blue-600 font-black cursor-pointer"
                        >
                            Create account
                        </span>
                    </p>

                </Form>
            </div>
        </div>
    );
};

export default LoginPage;