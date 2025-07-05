import { FaPhone, FaTwitter, FaInstagram, FaLinkedin, FaAngleRight } from "react-icons/fa6";
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
	const links = ["Inicio", "Sobre Nosotros", "Servicio", "J Rosa & Asesores"];
	return (
		<div className="flex flex-col w-full">
			{/* Top bar: infinite marquee on mobile, flex row on desktop */}
			<div className="marquee-wrapper w-full bg-[#FEEBD8] px-4 md:px-6 py-2 text-sm">
				<div className="marquee-track gap-x-8 md:gap-x-4 items-center">
					<AddressBarContent />
					<AddressBarContent />
				</div>
			</div>
			{/* Main navbar: always one line, scrollable if needed */}
			<div className="flex items-center justify-between px-4 md:px-8 py-2 bg-white w-full overflow-x-auto">
				<img
					src={Logo}
					className="h-10 w-auto mr-4 flex-shrink-0"
					alt="Logo"
				/>
				<div className="flex items-center flex-1 min-w-0 overflow-x-auto">
					{links.map((link, idx) => (
						<a
							key={idx}
							className="text-base text-black hover:text-orange-400 mx-3 cursor-pointer whitespace-nowrap"
						>
							{link}
						</a>
					))}
					<FaAngleRight className="cursor-pointer mx-4 flex-shrink-0" />
				</div>
				<div className="flex items-center flex-shrink-0">
					<div className="h-8 w-8 bg-white border-orange-400 border-2 flex justify-center items-center text-orange-400 mx-1 cursor-pointer">
						<FaSearch />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
