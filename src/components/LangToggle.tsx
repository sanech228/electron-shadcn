import React, { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import langs from "@/localization/langs";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "@/helpers/language_helpers";
import { Moon, Sun } from "lucide-react";


import { toggleTheme, getCurrentTheme } from "@/helpers/theme_helpers";


export default function LangToggle() {
    changeTheme();
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    function onValueChange(value: string) {
        setAppLanguage(value, i18n);
    }

    function changeTheme(toggle: boolean = false) {
        if(toggle) {
            toggleTheme();
        }
        getCurrentTheme().then(({ local, system }) => {
            setTheme(local ?? system);
        });
    }

    return (
        <ToggleGroup type="single" onValueChange={onValueChange} value={currentLang}>
            {langs.map((lang) => (
                <ToggleGroupItem key={lang.key} value={lang.key}>
                    {`${lang.prefix} `}
                </ToggleGroupItem>
            ))}

            <ToggleGroupItem key="theme" value="nimic" onClick={() => changeTheme(true)}>
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </ToggleGroupItem>
        </ToggleGroup>
    );
}




