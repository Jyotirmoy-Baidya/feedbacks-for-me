"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/AuthProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Authenticator.Provider>
            <Auth>
                {children}
            </Auth>
        </Authenticator.Provider>
    )
}
export default Providers;