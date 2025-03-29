"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
    Authenticator,
    Heading,
    useAuthenticator,
    View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
            userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
        },
    },
});

const components = {

    SignIn: {
        Header() {
            const { toSignUp } = useAuthenticator()
            return (
                <View className="mb-5 text-center">
                    <Heading level={3} className="text-3xl font-bold text-gray-800">
                        Sign in
                    </Heading>
                    <p className="text-gray-500 mt-2">
                        Don&apos;t have an account?{" "}
                        <button onClick={toSignUp} className="text-blue-500 hover:underline">
                            Create now
                        </button>
                    </p>
                </View>
            );
        },
        Footer() {
            const { toForgotPassword } = useAuthenticator();
            return (
                <View className="text-center mt-4">
                    <p className="text-gray-500">
                        Forgot Password?{" "}
                        <button
                            onClick={toForgotPassword}
                            className="text-blue-500 hover:underline"
                        >
                            Click here
                        </button>
                    </p>
                </View>
            );
        },
    },
};

const formFields = {
    signIn: {
        username: {
            placeholder: "example@gmail.com",
            label: "E-mail",
            isRequired: true,
        },
        password: {
            placeholder: "Enter your password",
            label: "Password",
            isRequired: true,
        },
    },
    signUp: {
        username: {
            order: 1,
            placeholder: "Choose a username",
            label: "Username",
            isRequired: true,
        },
        email: {
            order: 2,
            placeholder: "Enter your email address",
            label: "Email",
            isRequired: true,
        },
        password: {
            order: 3,
            placeholder: "Create a password",
            label: "Password",
            isRequired: true,
        },
        confirm_password: {
            order: 4,
            placeholder: "Confirm your password",
            label: "Confirm Password",
            isRequired: true,
        },
    }
};

const Auth = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthenticator((context) => [context.user]);
    const router = useRouter();
    const pathname = usePathname();

    const isAuthPage = pathname.match(/^\/(signin|signup)$/);

    const isDashboardPage =
        pathname.startsWith("/feedbacks") || pathname.startsWith("/profile");

    useEffect(() => {
        if (user && isAuthPage) {
            router.push("/feedbacks");
        }
    }, [user, isAuthPage, router]);

    // Allow access to public pages without authentication
    if (!isAuthPage && !isDashboardPage) {
        console.log("ssss")
        return <>{children}</>;
    }

    if (user) {
        return <div className="h-full">{children}</div>
    }

    return (
        <div className="flex h-screen">
            {/* Left Section - Sign In Form */}
            <div className="w-full xl:w-1/2 flex flex-col justify-center items-center p-10 bg-white">
                <div className="w-full max-w-md">
                    <Authenticator
                        initialState="signIn"
                        components={components}
                        formFields={formFields}
                    >
                        {() => <>{children}</>}
                    </Authenticator>
                </div>
            </div>

            {
                (pathname === '/signin' || pathname === '/signup') &&

                <div className="hidden xl:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-10">
                    <Image src="https://images.unsplash.com/photo-1726066012714-261f6d8c07bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Illustration" className="w-80 mb-5" width={320}
                        height={100} />
                    <h2 className="text-2xl font-bold">Every problem is a solution in disguise</h2>
                    <p className="mt-2 text-center text-white/80 max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                        Aliquam in hendrerit urna.
                    </p>
                </div>
            }
        </div >
    );
};

export default Auth;
