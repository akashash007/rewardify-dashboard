import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<div
			className="flex justify-center items-center h-screen bg-cover bg-center"
			style={{ backgroundImage: "url('/login_bg.png')" }}
		>
			<div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
				<img
					src="/logo.png"
					alt="Logo"
					className="mx-auto mb-4 w-15"
				/>
				<h2 className="text-2xl font-[700] mb-2">
					Grow your Business Exponentially!
				</h2>
				<p className="text-gray-500 mb-4 font-[400] text-[13px]">
					Pay less on each transaction you <br /> make with our App.
				</p>
				<button
					onClick={() => navigate("/enter-mobile")}
					className="bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white px-4 py-2 rounded w-full hover:opacity-90 cursor-pointer"
				>
					Login
				</button>
				<button className="btn-green-gradient-text mt-2 hover:opacity-70 cursor-pointer">
					<span>Contact Us</span>
				</button>
				<p className="text-[10px] text-gray-500 mt-4">
					By clicking, you agree to our <br />
					<span className="font-bold">Terms & Conditions</span> and{" "}
					<span className="font-bold">Privacy Policy</span>.
				</p>
			</div>
		</div>
	);
};

export default Login;
