'use client';

import Image from "next/image";
import bandar_abas_ai from '@/images/bandar_abas_ai.png'
import { motion } from "motion/react";

export default function HeroImage() {

    return (
        <motion.div
            className="absolute w-full h-dvh left-0 top-0 bottom-10 -z-30"
        >
            <div className="absolute size-full bg-black opacity-35 -z-10"></div>
            <div className="absolute top-0 size-full bg-linear-to-b from-60% from-transparent to-100% to-card"></div>
            <Image
                priority={true}
                src={bandar_abas_ai}
                width={1000}
                height={1000}
                alt="hero"
                className="relative object-cover size-full blur-[2.5px] -z-20"
            />
        </motion.div>
    )
}