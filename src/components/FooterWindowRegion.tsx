import { closeWindow, maximizeWindow, minimizeWindow } from "@/helpers/window_helpers";
import React, { type ReactNode } from "react";

interface FooterWindowRegionProps {
    appversion?: ReactNode;
    strings?: ReactNode[];
}

export default function FooterWindowRegion({ appversion, strings }: FooterWindowRegionProps) {
    return (
        <div className="flex w-screen items-stretch justify-between mt-[-70px]">
            <div className="w-full px-2">
                <div className="flex flex-1 select-none whitespace-nowrap p-2 text-xs text-gray-900 dark:text-gray-400">
                        {strings?.map((string, index) => (
                            <span key={index}>
                                <span>{string}</span>
                                <span className="mx-2">&bull;</span>
                            </span>
                        ))}
                        <span>{appversion}</span>
                </div>
            </div>
            
        </div>
    );
}


