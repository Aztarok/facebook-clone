import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";
export const metadata = {
    title: "Auth",
    description: "Facebook Clone Auth"
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <ClerkProvider afterSignOutUrl="/sign-in">
            <html lang="en">
                <body className={`${inter.className} bg-purple-2`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
