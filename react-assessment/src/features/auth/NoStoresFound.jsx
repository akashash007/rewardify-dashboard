import { useNavigate } from "react-router-dom";

const NoStoresFound = () => {
	const navigate = useNavigate();

	return (
		<div
			className="flex justify-center items-center h-screen bg-cover bg-center"
			style={{ backgroundImage: "url('/login_bg.png')" }}
		>
			<div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
				<img
					src="/store_logo.png"
					alt="Logo"
					className="mx-auto mb-4 w-35"
				/>
				<h2 className="text-2xl font-[700] mb-2">
					No stores are linked to this account
				</h2>
				<p className="text-gray-500 mb-4 font-[400] text-[13px]">
					Enter your account details correctly or register your store with us.
				</p>
				<button className="bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white px-4 py-2 rounded w-full hover:opacity-90 mb-2">
					Register your store with us
				</button>
				<button
					onClick={() => navigate("/select-store")}
					className="btn-green-gradient-text mt-2 hover:opacity-70 cursor-pointer"
				>
					<span>Login with different account</span>
				</button>
			</div>
		</div>
	);
};

export default NoStoresFound;
