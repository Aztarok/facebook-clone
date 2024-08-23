import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";
import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import TopBar from "@components/layout/TopBar";
import BottomBar from "@components/layout/BottomBar";

export const metadata = {
    title: "Facebook Clone",
    description: "Facebook Clone"
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <ClerkProvider afterSignOutUrl="/sign-in">
            <html lang="en">
                <body className={`${inter.className} bg-purple-2 text-light-1`}>
                    <main className="flex flow-row">
                        <LeftSideBar />
                        <MainContainer>{children}</MainContainer>
                        <RightSideBar />
                    </main>
                    <BottomBar />
                </body>
            </html>
        </ClerkProvider>
    );
}
