import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <h3 className="text-3xl font-bold text-amber-400 mb-4">Hire-Loop</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Connecting talented people with amazing opportunities.
                            Find your dream job or hire the best talent.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/allAnimal" className="hover:text-white transition">Browse Jobs</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Companies</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition">For Employers</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Career Advice</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal & Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Hire-Loop. All rights reserved.</p>

                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gray-300">Facebook</Link>
                        <Link href="#" className="hover:text-gray-300">Twitter</Link>
                        <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
                        <Link href="#" className="hover:text-gray-300">Instagram</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;