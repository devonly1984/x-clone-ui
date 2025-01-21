import { ReactNode } from "react";
import "./globals.css";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto xxl:max-w-screen-xxl">
          <div className="px-2 xsm:px-4 xxl:px-8 h-screen ">
            <LeftSidebar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray h-screen">
            {children}
          </div>
          <div className="hidden lg:flex h-screen ml-4 md:ml-8 flex-1 ">
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
