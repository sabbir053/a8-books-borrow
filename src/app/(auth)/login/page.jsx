'use client';
import { authClient } from "@/lib/auth-client";
import { FiMail, FiLock, FiLogIn, FiRefreshCcw } from 'react-icons/fi';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const UserData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: UserData.email,
            password: UserData.password,
            rememberMe: true,
            callbackURL: "/"
        });

        if (error) {
            toast.error(error.message || "Login failed! Please check credentials.");
        } else {
            toast.success("Welcome back!");
            router.push("/register");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 p-6">
            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Sign In</h1>
                    <p className="text-gray-500 font-medium mt-2">Enter your credentials to access your account</p>
                </div>

                <Form className="flex flex-col gap-6" onSubmit={onSubmit} validationBehavior="native">
                    
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="flex flex-col gap-2"
                        validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Invalid email address" : null}
                    >
                        <Label className="text-sm font-bold text-gray-700 ml-1">Email Address</Label>
                        <Input 
                            name="email" 
                            placeholder="john@example.com" 
                            startContent={<FiMail className="text-blue-600 mr-2" />}
                            className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:border-blue-500 transition-all outline-none font-medium"
                        />
                        <FieldError className="text-xs text-red-500 font-medium ml-1" />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        className="flex flex-col gap-2"
                        validate={(value) => value.length < 8 ? "Password is too short" : null}
                    >
                        <Label className="text-sm font-bold text-gray-700 ml-1">Password</Label>
                        <Input 
                            name="password" 
                            type="password"
                            placeholder="••••••••" 
                            startContent={<FiLock className="text-blue-600 mr-2" />}
                            className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:border-blue-500 transition-all outline-none font-medium"
                        />
                        <div className="flex justify-between items-center px-1">
                             <Description className="text-[10px] text-gray-400">
                                Securely encrypted
                            </Description>
                            <span className="text-[11px] text-blue-600 font-bold hover:underline cursor-pointer">Forgot?</span>
                        </div>
                        <FieldError className="text-xs text-red-500 font-medium ml-1" />
                    </TextField>

                    <div className="flex flex-col gap-4 mt-4">
                        <Button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                        >
                            <FiLogIn /> Sign In
                        </Button>
                        
                        <Button 
                            type="reset" 
                            variant="light"
                            className="w-full text-gray-400 font-bold py-2 rounded-xl hover:text-gray-600 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                            <FiRefreshCcw /> Reset
                        </Button>
                    </div>

                </Form>

                <p className="mt-10 text-center text-sm text-gray-500 font-medium">
                    New here? <span 
                        onClick={() => router.push('/register')}
                        className="text-blue-600 font-black cursor-pointer hover:underline"
                    >
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;