'use client';

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { motion } from 'motion/react'

interface Props {
    error: Error & { digest?: string },
    unstable_reset: () => void
};
export default function Error({
    error,
    unstable_reset
}: Props) {
    useEffect(() => {
        console.error('error', error);
    }, [error])

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 0.9,
                ease: 'easeInOut'
            }}
            className="h-dvh flex flex-col items-center justify-center gap-4"
        >
            <p className="text-2xl">مشکلی پیش آمده</p>
            <Button className={'p-5 rounded-2xl'} onClick={() => unstable_reset()}>دوباره امتحان کنید</Button>
        </motion.div>
    )
}