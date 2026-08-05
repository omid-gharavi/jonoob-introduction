'use client';

import { useEffect, useState } from "react";

export default function usePageLoaded() {
    const [pageLoaded, setPageLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setPageLoaded(true);
        } else {
            const handleLoad = () => setPageLoaded(true);
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [])

    return { pageLoaded };
}