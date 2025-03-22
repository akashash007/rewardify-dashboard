import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/authService";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";

const DashboardLayout = () => {
	const navigate = useNavigate();
	const [profile, setProfile] = useState(null);
	const [selectedStore, setSelectedStore] = useState(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		if (!token) {
			alert("Session expired. Please log in again.");
			localStorage.clear();
			navigate("/enter-mobile");
			return;
		}

		const loadProfile = async () => {
			const data = await fetchProfile(token);
			if (!data) {
				alert("Invalid or expired session. Please log in again.");
				localStorage.clear();
				navigate("/enter-mobile");
			} else {
				setProfile(data);
			}
		};
		loadProfile();

		const storedStore = localStorage.getItem("selectedStore");
		if (storedStore) {
			setSelectedStore(JSON.parse(storedStore));
		}
	}, [navigate]);

	return (
		<div className="h-screen flex flex-col">
			<Navbar
				profile={profile}
				toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
			/>
			<div className="flex flex-1 mt-16">
				<SideBar
					selectedStore={selectedStore}
					isSidebarOpen={isSidebarOpen}
					toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
				/>
				<div className="flex-1 lg:p-6 md:p-4 p-2 bg-gray-100">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
