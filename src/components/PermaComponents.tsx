"use client";
import {useCallback, useState} from "react";
import {PermaComponent} from "@/types/PermaComponents";
import {useAltOnEvent} from "@/lib/altv";
import { useRouter } from "next/navigation";

export default function PermaComponents() {
    const router = useRouter();
    const [hud, setHud] = useState<boolean>(false);

    const toggleComponent = useCallback(({ component, state }: { component: PermaComponent, state: boolean }) => {
        switch (component) {
            case "hud":
                setHud(state);
                break;
        }
    }, [])

    const changePage = useCallback((page: string) => {
        router.push(page);
    }, []);

    const reloadPage = useCallback(() => {
        router.refresh();
    }, []);


    useAltOnEvent("webview::component::state", toggleComponent)
    useAltOnEvent("webview::page::change", changePage)
    useAltOnEvent("webview::page::reload", reloadPage)

    return (
        <div>
            <div style={{ display: hud ? 'block' : 'none' }}>
                {/* content here */}
            </div>
        </div>
    );
}
