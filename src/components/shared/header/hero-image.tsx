'use client';

import Image from "next/image";
import bandar_abas_ai from '@/images/bandar_abas_ai.png'
import { motion } from "motion/react";
import { useState } from "react";

export default function HeroImage() {
    const [loaded, setLoaded] = useState(false);

    return (
        <motion.div
            initial={{
                opacity: 0,
                bottom: 20,
            }}
            animate={{
                opacity: loaded ? 1 : 0,
                bottom: 0,
            }}
            transition={{
                duration: 0.9,
                ease: "easeOut",
            }}
            className="absolute w-full h-screen left-0 top-0 bottom-10 -z-10"
        >
            <Image
                priority={true}
                src={bandar_abas_ai}
                width={1000}
                height={1000}
                alt="hero"
                className="object-cover size-full"
                onLoad={() => setLoaded(true)}
            />
        </motion.div>
    )
}