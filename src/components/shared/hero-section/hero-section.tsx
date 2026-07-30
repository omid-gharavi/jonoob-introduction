'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function HeroSection() {
    return (
        <motion.div
            className="mt-56 max-w-135 w-full max-md:text-center text-primary"
            initial={{
                translateY: 50
            }}
            animate={{
                translateY: 0
            }}
            transition={{
                duration: 1,
                ease: 'easeOut',
            }}>
            <p className="text-5xl font-semibold max-md:text-3xl">شهر های جنوب ایران</p>
            <p className="mt-4 max-md:mt-3 leading-9 max-md:text-sm">
                جایی که ایران باستان با روح گرم ساحلی تلاقی می‌کند. دریا را از شهرهای بندر و باغ‌ های شاعرانه تا جزایر رنگین‌ کمانی و دژهای کویری دنبال کنید.
            </p>
            <div className='flex items-center gap-6'>
                <Button
                    className={'mt-5 px-4 h-10'}
                >
                    جستو جوی شهرها
                </Button>
                <Button
                    className={'mt-5 px-4 h-10 bg-secondary shadow-secondary shadow-[0px_0px_15px_0px] hover:bg-secondary/80 border-none'}
                >
                    جستو جوی جزایر
                </Button>
            </div>
        </motion.div>
    )
}