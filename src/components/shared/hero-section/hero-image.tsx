import Image from "next/image";
import bandar_abas_ai from '@/images/bandar_abas_ai.png'

export default function HeroImage() {
    return (
        <div className="relative w-full max-w-full h-dvh">
            <div className="absolute inset-0 bg-black opacity-35 -z-10"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-background to-100% -z-10"></div>
            <Image
                priority={true}
                src={bandar_abas_ai}
                width={1000}
                height={1000}
                alt="hero"
                className="absolute inset-0 object-cover size-full blur-[2.5px] -z-20"
            />
        </div>
    )
}