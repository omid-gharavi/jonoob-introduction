'use client';

import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";

interface Props {
    error: Error & { digest?: string },
    unstable_retry: () => void
};
export default function GlobalError({ error, unstable_retry }: Props) {
    return (
        <html lang="fa" dir="rtl">
            <body>
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
                    <Button className={'p-5 rounded-2xl'} onClick={() => unstable_retry()}>دوباره امتحان کنید</Button>
                </motion.div>
            </body>
        </html>
    )
}