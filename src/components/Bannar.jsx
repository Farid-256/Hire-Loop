import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="text-white pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 md:px-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Find Your <span className="text-amber-400">Dream Job</span> <br />
                            With Ease
                        </h1>

                        <p className="text-xl text-blue-100 max-w-lg">
                            Discover thousands of opportunities from top companies.
                            Your next big career move is just a click away.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/allAnimal"
                                className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition">
                                Browse All Jobs</Link>
                        </div>
                    </div>

                    {/* Right Side - Image / Visual */}
                    <div className="hidden md:flex justify-end relative">
                        <div className="absolute -right-10 top-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" width='600' height='600'
                            alt="Hiring" className="rounded-3xl shadow-2xl relative z-10 w-full max-w-lg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;