import axios from "axios";

const API_BASE_URL = "https://rewardify.dotcod.in/api";

// Device details (Static for now)
// const deviceInfo = {
// 	device: "Nexus Phone",
// 	app: "web",
// 	device_type: 2,
// 	os: "unknown",
// 	ip_address: "103.28.246.86",
// 	browser: "Chrome",
// };

// Send OTP
export const sendOTP = async (mobile) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/v1/store-user/auth/generate-otp`,
			{
				dialCode: 91, // Fixed for India
				contactNo: mobile,
			}
		);
		return response.data; // API returns a success message
	} catch (error) {
		console.error("Error sending OTP:", error);
		throw error.response?.data || error;
	}
};

export const verifyOTP = async (mobile, otp) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/v1/store-user/auth/login`,
			{
				dialCode: 91,
				contactNo: mobile,
				type: 1, // Required field
				otp: otp,
			},
			{
				headers: {
					device: JSON.stringify({
						device: "Nexus Phone",
						app: "web",
						device_type: 2,
						os: "unknown",
						ip_address: "103.28.246.86",
						browser: "Chrome",
					}),
				},
			}
		);

		// Store user details & token
		localStorage.setItem("authToken", response.data.token);
		localStorage.setItem("refreshToken", response.data.refreshToken || "");
		localStorage.setItem("stores", JSON.stringify(response.data.stores || []));
		localStorage.setItem("userMobile", mobile);

		return response.data;
	} catch (error) {
		console.error("Error verifying OTP:", error);
		throw error.response?.data || error;
	}
};

export const getStores = async () => {
	try {
		const token = localStorage.getItem("authToken"); // Get stored token
		if (!token) {
			console.error("No auth token found!");
			throw new Error("User is not authenticated.");
		}

		const response = await axios.get(`${API_BASE_URL}/v1/store-user/store`, {
			headers: {
				authorization: `Bearer ${token}`,
				device: JSON.stringify({
					device: "Nexus Phone",
					app: "web",
					device_type: 2,
					os: "unknown",
					ip_address: "103.28.246.86",
					browser: "Chrome",
				}),
			},
		});

		console.log("API Store Response:", response.data); // Log API response
		return response.data;
	} catch (error) {
		console.error("Error fetching stores:", error.response?.data || error);
		throw error.response?.data || error;
	}
};

export const fetchProfile = async (token) => {
	try {
		if (!token) {
			console.error("No token found");
			return null;
		}

		const response = await axios.get(
			"https://rewardify.dotcod.in/api/v1/store-user/store/user/",
			{
				headers: {
					authorization: `Bearer ${token}`, // Ensure Bearer token format
					device: JSON.stringify({
						device: "Nexus Phone",
						app: "web",
						device_type: 2,
						os: "unknown",
						ip_address: "103.28.246.86",
						browser: "Chrome",
					}),
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error(
			"Error fetching profile:",
			error.response?.data || error.message
		);
		return null;
	}
};

export const confirmOrderAPI = async (orderId) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/v1/store-user/orders/confirm`,
			{ orderId }
		);
		return response.data;
	} catch (error) {
		console.error("🚨 Order Confirmation Error:", error.response?.data || error);
		return null;
	}
};

export const fetchOrders = async (token, storeId) => {
	if (!storeId) {
		console.error("⚠️ Missing storeId for orders request!");
		return [];
	}

	const storeIdStr = String(storeId); // Ensure storeId is a string

	console.log("🔍 Fetching orders with:", { token, storeId: storeIdStr }); // Debugging log

	try {
		const response = await axios.post(
			"https://rewardify.dotcod.in/api/v1/store-user/order/list",
			{ limit: 10, pageNo: 1, storeId: storeIdStr }, // ✅ Use storeId as a string
			{
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
					device: JSON.stringify({
						device: "Nexus Phone",
						app: "web",
						device_type: 2,
						os: "unknown",
						ip_address: "103.28.246.86",
						browser: "Chrome",
					}),
				},
			}
		);
		console.log("✅ Orders API Response:", response.data);
		return response.data.data || [];
	} catch (error) {
		console.error("🚨 Orders API error:", error.response?.data || error);
		return [];
	}
};

export const fetchTransactions = async (token, storeId) => {
	if (!storeId) {
		console.error("⚠️ Missing storeId for transactions request!");
		return [];
	}
	try {
		const response = await axios.post(
			"https://rewardify.dotcod.in/api/v1/store-user/payment/list",
			{ limit: 10, pageNo: 1, storeId },
			{
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
					device: JSON.stringify({
						device: "Nexus Phone",
						app: "web",
						device_type: 2,
						os: "unknown",
						ip_address: "103.28.246.86",
						browser: "Chrome",
					}),
				},
			}
		);
		return response.data.data || [];
	} catch (error) {
		console.error(
			"❌ Error fetching transactions:",
			error.response?.data || error
		);
		return [];
	}
};

// export const fetchSettlements = async (token, storeId) => {
// 	console.log("storeId:", storeId);

// 	if (!token) {
// 		console.error("⚠️ Missing authToken!");
// 		return [];
// 	}
// 	if (!storeId) {
// 		console.error("⚠️ Missing storeId for settlements request!");
// 		return [];
// 	}

// 	try {
// 		const response = await axios.post(
// 			`${API_BASE_URL}/v1/store-user/settlements/list`, // Ensure this is correct
// 			{ limit: 10, pageNo: 1, storeId }, // ✅ Pass storeId properly
// 			{
// 				headers: {
// 					authorization: `Bearer ${token}`,
// 					"Content-Type": "application/json",
// 					device: JSON.stringify({
// 						device: "Nexus Phone",
// 						app: "web",
// 						device_type: 2,
// 						os: "unknown",
// 						ip_address: "103.28.246.86",
// 						browser: "Chrome",
// 					}),
// 				},
// 			}
// 		);

// 		console.log("✅ Settlements Response:", response.data);
// 		return response.data.data || [];
// 	} catch (error) {
// 		console.error("🚨 Settlement API error:", error.response?.data || error);
// 		return [];
// 	}
// };

export const fetchSettlements = async (token, storeId) => {
	if (!storeId) {
		console.error("⚠️ Missing storeId for settlements request!");
		return [];
	}
	try {
		const response = await axios.post(
			"https://rewardify.dotcod.in/api/v1/store-user/settlements/list", // ✅ Ensure Correct URL
			{ limit: 10, pageNo: 1, storeId }, // ✅ Ensure storeId is passed
			{
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
					device: JSON.stringify({
						device: "Nexus Phone",
						app: "web",
						device_type: 2,
						os: "unknown",
						ip_address: "103.28.246.86",
						browser: "Chrome",
					}),
				},
			}
		);
		console.log("✅ Settlements Response:", response.data);
		return response.data.data || [];
	} catch (error) {
		console.error("🚨 Settlement API error:", error.response?.data || error);
		return [];
	}
};
