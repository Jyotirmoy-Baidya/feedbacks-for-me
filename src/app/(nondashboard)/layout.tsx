/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    // const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     if (authUser) {
    //         const userRole = authUser.userRole?.toLowerCase();
    //         if (
    //             (userRole === "manager" && pathname.startsWith("/search")) ||
    //             (userRole === "manager" && pathname === "/")
    //         ) {
    //             router.push("/managers/properties", { scroll: false });
    //         } else {
    //             setIsLoading(false);
    //         }
    //     }
    // }, [authUser, router, pathname]);

    // if (authLoading) return <>Loading...</>;

    return (
        <div className="h-full w-full">
            <main
                className={`h-full flex w-full flex-col`}
            //style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
