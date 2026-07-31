import Link from "next/link";
import { FaRegCompass } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex justify-between items-center text-white">
            <Link href='/' className="text-2xl flex items-center gap-2">
                <FaRegCompass />
                <p>جنوب</p>
            </Link>
            <ul className="flex items-center gap-8 text-md">
                <li>
                    <Link href={''}>شهر</Link>
                </li>
                <li>
                    <Link href={''}>جزایر</Link>
                </li>
                <li>
                    <Link href={''}>فرهنگ</Link>
                </li>
            </ul>
        </header>
    )
}