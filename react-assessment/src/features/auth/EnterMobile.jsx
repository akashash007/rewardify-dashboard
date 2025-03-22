// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const EnterMobile = () => {
// 	const navigate = useNavigate();
// 	const [mobile, setMobile] = useState("");

// 	const handleInputChange = (e) => {
// 		const value = e.target.value;
// 		if (/^\d*$/.test(value)) {
// 			setMobile(value);
// 		}
// 	};

// 	const isDisabled = mobile.trim() === "";

// 	return (
// 		<div
// 			className="flex justify-center items-center h-screen bg-cover bg-center"
// 			style={{ backgroundImage: "url('/login_bg.png')" }}
// 		>
// 			<div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
// 				<img
// 					src="/logo.png"
// 					alt="Logo"
// 					className="mx-auto mb-4 w-15"
// 				/>
// 				<h2 className="text-2xl font-[700] mb-2">Get started with REWARDIFY</h2>
// 				<p className="text-gray-500 mb-4 font-[400] text-[13px]">
// 					Enter your mobile number or <br /> Shop ID to get started
// 				</p>

// 				<input
// 					type="text"
// 					value={mobile}
// 					onChange={handleInputChange}
// 					className="border p-2 w-full mb-3 rounded-lg text-center text-sm focus:outline-none focus:ring-0"
// 					placeholder="Enter shop ID / Mobile Number"
// 					maxLength={10}
// 				/>

// 				<button
// 					onClick={() => navigate("/enter-otp")}
// 					disabled={isDisabled}
// 					className={`px-4 py-2 rounded w-full transition-opacity ${
// 						isDisabled
// 							? "bg-neutral-200 text-gray-500"
// 							: "bg-gradient-to-r cursor-pointer from-[#668D12] to-[#ACC43F] text-white hover:opacity-90"
// 					}`}
// 				>
// 					Send OTP
// 				</button>

// 				<p className="text-[10px] text-gray-500 mt-4">
// 					By clicking, you agree to our <br />
// 					<span className="font-bold">Terms & Conditions</span> and{" "}
// 					<span className="font-bold">Privacy Policy</span>.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default EnterMobile;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendOTP } from "../../api/authService";

const EnterMobile = () => {
	const navigate = useNavigate();
	const [mobile, setMobile] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSendOTP = async () => {
		try {
			setLoading(true);
			setError("");
			await sendOTP(mobile);
			localStorage.setItem("mobile", mobile); // Store mobile for OTP verification
			navigate("/enter-otp");
		} catch (err) {
			setError(err.message || "Failed to send OTP. Try again.");
		} finally {
			setLoading(false);
		}
	};

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
				<h2 className="text-2xl font-[700] mb-2">Get started with REWARDIFY</h2>
				<p className="text-gray-500 mb-4 font-[400] text-[13px]">
					Enter your mobile number to get started
				</p>

				<input
					type="text"
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
					className="border p-2 w-full mb-3 rounded-lg text-center text-sm focus:outline-none focus:ring-0"
					placeholder="Enter Mobile Number"
					maxLength={10}
				/>

				{error && <p className="text-red-500 text-xs">{error}</p>}

				<button
					onClick={handleSendOTP}
					disabled={mobile.trim() === "" || loading}
					className={`px-4 py-2 rounded w-full transition-opacity ${
						mobile.trim() === "" || loading
							? "bg-neutral-200 text-gray-500"
							: "bg-gradient-to-r cursor-pointer from-[#668D12] to-[#ACC43F] text-white hover:opacity-90"
					}`}
				>
					{loading ? "Sending OTP..." : "Send OTP"}
				</button>
			</div>
		</div>
	);
};

export default EnterMobile;
