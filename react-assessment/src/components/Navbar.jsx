import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { NavbarUsername } from "./NavbarUsername";

const Navbar = ({ profile, toggleSidebar }) => {
	const navigate = useNavigate();

	return (
		<div className="w-full bg-white p-4 border border-gray-300 flex justify-between items-center fixed top-0 left-0 z-50 lg:pe-20">
			<h2 className="text-xl font-bold text-[#789F08] hidden lg:flex">
				<i>REWARDIFY</i>
			</h2>
			<NavbarUsername profile={profile} />
			<button
				className="lg:hidden text-lg text-black"
				onClick={toggleSidebar}
			>
				<Menu
					className="w-8 h-8 cursor-pointer text-black"
					strokeWidth={1.5}
				/>
			</button>
			<div className="flex items-center justify-between space-x-3 ms-auto">
				<div className="flex space-x-3">
					<p className="text-sm font-[500] items-center me-4 bg-m-gray text-black p-2 px-4 rounded-xl">
						XCoins: 300 🪙
					</p>
					<img
						src="/notification.png"
						alt="Notifications"
						className="w-8 h-8 cursor-pointer"
					/>
					<img
						src="/userhand.png"
						alt="User Profile"
						className="w-8 h-8 cursor-pointer hidden lg:flex"
					/>
					<img
						src="/user.png"
						alt="Logout"
						className="w-8 h-8 cursor-pointer"
						onClick={() => {
							localStorage.clear();
							navigate("/enter-mobile");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
