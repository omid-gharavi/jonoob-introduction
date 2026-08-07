'use client'
import { motion } from 'motion/react';

export default function Contents() {
    return (
        <div className="w-full bg-card px-48 max-lg:px-6 pt-32">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut'
                }}>
                <p className="text-secondary">شهرها</p>
                <p className="text-4xl max-sm:text-2xl text-white mt-3">پنج دروازه به سمت جنوب</p>
                <p className="text-stone-500 mt-4 text-lg max-sm:text-sm">از بنادر خلیج فارس گرفته تا حاشیه کویر بزرگ، هر شهر تاریخ، رنگ و بوی خاص خود را دارد.</p>
            </motion.div>
        </div>
    )
}