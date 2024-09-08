import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";

export default function HomePage() {
    const { t } = useTranslation();
    const [url, setUrl] = useState("");
    const [bussy, setBussy] = useState(false);

    const handleSubmit = async () => {
        console.log(url);
        setBussy(true);
        setTimeout(() => {
            setBussy(false);
        }, 5000);
    };
    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center gap-2">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <div className="form">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} disabled={bussy}/>
                        <Button type="button" onClick={handleSubmit} disabled={bussy}>
                            { bussy === true ? <Loader2 className="mr-2 h-4 w-4 animate-spin " /> : '' }
                            { bussy ? t("Wait") : t("Submit") }
                        </Button>
                    </div>
                </div>
                
            </div>
        </>
    );
}
