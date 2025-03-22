import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { verifyOTP } from "../../api/authService";

const EnterOTP = () => {
	const navigate = useNavigate();
	const mobile = localStorage.getItem("mobile");
	const [otp, setOtp] = useState(["", "", "", ""]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const inputRefs = useRef([]);

	// Handle input change and move to the next field automatically
	const handleChange = (index, value) => {
		if (!/^\d*$/.test(value)) return; // Allow only numbers
		let newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		// Move to the next input field if a number is entered
		if (value && index < otp.length - 1) {
			inputRefs.current[index + 1].focus();
		}
	};

	// Handle backspace to move to the previous field
	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	// Handle OTP verification
	const handleVerifyOTP = async () => {
		try {
			setLoading(true);
			setError("");
			await verifyOTP(mobile, otp.join(""));
			navigate("/select-store");
		} catch (err) {
			setError(err.message || "Invalid OTP. Try again.");
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
				<h2 className="text-2xl font-[700] mb-2">Verify your details</h2>
				<p className="text-gray-500 mb-4 font-[400] text-[13px]">
					Enter OTP number below
				</p>

				{/* OTP Input Fields */}
				<div className="flex justify-center gap-2 mb-4">
					{otp.map((_, index) => (
						<input
							key={index}
							type="text"
							maxLength="1"
							ref={(el) => (inputRefs.current[index] = el)}
							className="border p-2 text-center w-12 h-12 rounded-md text-lg font-bold focus:outline-none focus:ring-0"
							value={otp[index]}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyDown(index, e)}
						/>
					))}
				</div>

				{/* Error Message */}
				{error && <p className="text-red-500 text-xs">{error}</p>}

				{/* Verify Button */}
				<button
					onClick={handleVerifyOTP}
					disabled={otp.includes("") || loading}
					className={`px-4 py-2 rounded w-full transition-opacity ${
						otp.includes("") || loading
							? "bg-neutral-200 text-gray-500"
							: "bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white hover:opacity-90"
					}`}
				>
					{loading ? "Verifying..." : "Verify and Continue"}
				</button>
			</div>
		</div>
	);
};

export default EnterOTP;
