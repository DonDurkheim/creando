import { useState } from "react";
import { FaPhone, FaTwitter, FaInstagram, FaLinkedin, FaAngleRight, FaBars} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF, FaSearch } from "react-icons/fa";
import Logo from "./../assets/creando-logo.png";
import "../index.css";

const AddressBarContent = () => (
    <>
        <div className="flex items-center min-w-max">
            <FaPhone className="mr-2 text-xl" />
            <span className="font-manrope mr-4">Tel : +1 (849) 885-2282</span>
        </div>
        <div className="flex items-center min-w-max">
            <MdEmail className="mr-2 text-xl" />
            <span className="font-manrope mr-4">creandonegociosrd@gmail.com</span>
        </div>
        <div className="flex items-center min-w-max">
            <IoLocationSharp className="mr-2 text-xl" />
            <span className="mr-4">Villa Mella, Santo Domingo Norte</span>
        </div>
        <div className="flex min-w-max">
            <div className="h-6 w-6 bg-orange-400 flex justify-center items-center text-white mx-1 cursor-pointer">
                <FaFacebookF />
            </div>
            <div className="h-6 w-6 bg-orange-400 flex justify-center items-center text-white mx-1 cursor-pointer">
                <FaTwitter />
            </div>
            <div className="h-6 w-6 bg-orange-400 flex justify-center items-center text-white mx-1 cursor-pointer">
                <FaLinkedin />
            </div>
            <div className="h-6 w-6 bg-orange-400 flex justify-center items-center text-white mx-1 cursor-pointer">
                <FaInstagram />
            </div>
        </div>
    </>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        { label: "Inicio", target: "hero" },
        { label: "Sobre Nosotros", target: "who-we-are" },
        { label: "Servicio", target: "services" },
        { label: "J Rosa & Asesores", target: "team" },
        { label: "Testimonios", target: "testimonials" },
        { label: "Contacto", target: "contact" },
    ];

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* Top bar: infinite marquee on mobile, flex row on desktop */}
            <div className="w-full bg-[#FEEBD8] px-4 md:px-6 py-2 text-sm">
                {/* Mobile: marquee */}
                <div className="block md:hidden marquee-wrapper overflow-hidden w-full">
                    <div className="marquee-track flex gap-x-8 items-center">
                        <AddressBarContent />
                        <AddressBarContent />
                    </div>
                </div>
                {/* Desktop: normal flex row */}
                <div className="hidden md:flex gap-x-4 items-center justify-start">
                    <AddressBarContent />
                </div>
            </div>
            {/* Main navbar */}
            <div className="flex items-center justify-between px-4 md:px-8 py-2 bg-white w-full overflow-x-auto relative">
                <img
                    src={Logo}
                    className="h-10 w-auto mr-4 flex-shrink-0"
                    alt="Logo"
                />
                {/* Desktop links */}
                <div className="hidden md:flex items-center flex-1 min-w-0 overflow-x-auto justify-end">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            className="text-base text-black hover:text-orange-400 mx-3 cursor-pointer whitespace-nowrap"
                            onClick={() => scrollToSection(link.target)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <FaAngleRight className="cursor-pointer mx-4 flex-shrink-0" />
                </div>
                {/* Hamburger for mobile */}
                <div className="flex items-center md:hidden">
                    <div
                        className="h-8 w-8 bg-white border-orange-400 border-2 flex justify-center items-center text-orange-400 mx-1 cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                    >
                        <FaBars />
                    </div>
                </div>
                {/* Search icon (always visible) */}
                <div className="hidden md:flex items-center flex-shrink-0">
                    <div className="h-8 w-8 bg-white border-orange-400 border-2 flex justify-center items-center text-orange-400 mx-1 cursor-pointer">
                        <FaSearch />
                    </div>
                </div>
            </div>
            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
            />
            {/* Mobile menu drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <img src={Logo} className="h-8 w-auto" alt="Logo" />
                    <button
                        className="text-2xl text-orange-400"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>
                <nav className="flex flex-col px-6 py-4 gap-4">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            className="text-lg text-black hover:text-orange-400 py-2 border-b border-gray-100"
                            onClick={() => { scrollToSection(link.target); setMenuOpen(false); }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex px-6 py-4 gap-2">
                    <div className="h-8 w-8 bg-orange-400 flex justify-center items-center text-white rounded-full cursor-pointer">
                        <FaFacebookF />
                    </div>
                    <div className="h-8 w-8 bg-orange-400 flex justify-center items-center text-white rounded-full cursor-pointer">
                        <FaTwitter />
                    </div>
                    <div className="h-8 w-8 bg-orange-400 flex justify-center items-center text-white rounded-full cursor-pointer">
                        <FaLinkedin />
                    </div>
                    <div className="h-8 w-8 bg-orange-400 flex justify-center items-center text-white rounded-full cursor-pointer">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
