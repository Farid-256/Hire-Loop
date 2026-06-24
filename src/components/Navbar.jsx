'use client'

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const { data: sesson, isPending } = useSession()
    const user = sesson?.user

    const handleLogout = async () => {
        await signOut()
        router.push('/auth/login')
    }

    const dashBoardLinks = {
        seeker: '/dashBoard/seeker',
        recruiter: '/dashBoard/recruiter',
        admin: '/dashBoard/admin'
    }

    // ✅ navLinks array বানান
    const navLinks = [
        { label: 'Browse Jobs', href: '/jobs' },
        { label: 'Company', href: '/companies' },
        { label: 'Pricing', href: '/plans' },
    ]

    // ✅ user থাকলে Dashboard link যোগ করুন
    if (user?.email) {
        navLinks.push({
            label: 'DashBoard',
            href: dashBoardLinks[user?.role || 'seeker']
        })
    }

    if (isPending) {
        return <h2 className="text-5xl text-blue-800 font-black text-center">Loading...</h2>
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between">

                {/* Logo */}
                <div>
                    <h3><Link href='/' className="text-2xl font-bold text-amber-500">Hire-Loop</Link></h3>
                </div>

                {/* Desktop Menu — navLinks থেকে map করুন */}
                <div className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="hover:text-amber-500 transition">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    {user ? (
                        <>
                            <h3 className="text-xl font-bold text-blue-600">{user.name}</h3>
                            <button onClick={handleLogout} className="px-5 py-2 bg-blue-600 text-white rounded-sm cursor-pointer">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login" className="px-6 py-2.5 border border-gray-300 rounded-xl bg-blue-600 text-white transition">
                                Login
                            </Link>
                            <Link href="/auth/registation" className="px-6 py-2.5 bg-blue-600 text-white rounded-xl transition">
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Hamburger Button */}
                <button className="md:hidden text-3xl text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RxCross2 /> : <IoReorderThreeOutline />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-lg">
                    <div className="flex flex-col px-6 py-6 space-y-5 text-gray-700 font-medium">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-amber-500">
                                {link.label}
                            </Link>
                        ))}

                        <div className="pt-4 flex flex-col gap-3">
                            {user ? (
                                <>
                                    <h3 className="text-xl font-bold text-blue-600">{user.name}</h3>
                                    <button onClick={handleLogout} className="px-5 py-2 text-white bg-blue-600 rounded-sm cursor-pointer">
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link href="/auth/login" onClick={() => setIsOpen(false)}
                                        className="text-center text-white py-3 border border-gray-300 bg-blue-600 rounded-xl">
                                        Login
                                    </Link>
                                    <Link href="/auth/registation" onClick={() => setIsOpen(false)}
                                        className="text-center py-3 bg-blue-600 text-white rounded-xl">
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;