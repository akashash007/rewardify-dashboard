import { useNavigate, useLocation } from "react-router-dom";
import { SideBarList } from "./SideBarList";
import { SideBarUserDetails } from "./SideBarUserDetails";

const SideBar = ({ selectedStore, isSidebarOpen }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const isActive = (path) => location.pathname === path;

	return (
		<div
			className={`w-64 bg-white text-[#475B30] p-6 px-0 h-full fixed lg:relative transition-transform duration-300 z-50 ${
				isSidebarOpen ? "translate-x-0" : "-translate-x-full"
			} lg:translate-x-0`}
		>
			<div className="mb-6 text-start ps-10 pt-10">
				<SideBarUserDetails selectedStore={selectedStore} />
			</div>
			<ul className="space-y-4">
				<SideBarList
					navigate={navigate}
					location={location}
					isActive={isActive}
				/>
			</ul>
		</div>
	);
};

export default SideBar;
