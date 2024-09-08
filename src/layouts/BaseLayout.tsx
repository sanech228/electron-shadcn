import React from "react";
import DragWindowRegion from "@/components/DragWindowRegion";
import FooterWindowRegion from "@/components/FooterWindowRegion";
import LangToggle from "@/components/LangToggle";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    const strings = [
        'Copyright ©' + new Date().getFullYear() + ' ShadCN',
        'All rights reserved.',
    ]; 
    const appversion = "v0.0.1";
    return (
        <>
            <DragWindowRegion title="ShadCN App" />
            <main className="relative">
                <div className="absolute top-0 right-0 bottom-0 ">
                    <LangToggle />
                </div>
                <div>
                    {children}
                </div>
            </main>
            <FooterWindowRegion strings={strings} appversion={appversion} />
        </>
    );
}
