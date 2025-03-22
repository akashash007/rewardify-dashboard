import { useState, useEffect } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { fetchTransactions, fetchSettlements } from "../../api/authService";
import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../../api/authService";
import { QuickActions } from "../../components/QuickActions";
import { TempOrder } from "../../components/TempOrder";
import { MyOrders } from "../../components/MyOrders";
import { LastUpdate } from "../../components/LastUpdate";
import { RecentTransactions } from "../../components/RecentTransactions";
const Dashboard = () => {
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const [activeTab, setActiveTab] = useState("transactions");
	const [settlements, setSettlements] = useState([]);
	const [orders, setOrders] = useState([]);
	const [filteredOrders, setFilteredOrders] = useState([]); // Stores filtered data for each tab
	const [activeTabOrder, setActiveTabOrder] = useState("Confirmation");

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		const storedStore = JSON.parse(localStorage.getItem("selectedStore"));

		if (!token || !storedStore) {
			alert("Session expired or no store selected. Please log in again.");
			localStorage.clear();
			navigate("/enter-mobile");
			return;
		}

		const loadOrders = async () => {
			try {
				const ordersData = await fetchOrders(token, storedStore.storeId);
				console.log("📢 Orders Data:", ordersData);
				setOrders(ordersData || []); // Ensure orders is an array
			} catch (error) {
				console.error("🚨 Orders API error:", error);
			}
		};

		loadOrders();
	}, []); // Runs once when the component loads

	// Fetch Settlements & Transactions in a Single useEffect
	useEffect(() => {
		const token = localStorage.getItem("authToken");
		const storedStore = JSON.parse(localStorage.getItem("selectedStore"));

		if (!token || !storedStore) {
			alert("Session expired or no store selected. Please log in again.");
			localStorage.clear();
			navigate("/enter-mobile");
			return;
		}

		const loadData = async () => {
			try {
				// 1️⃣ Fetch Settlements First
				const settlementData = await fetchSettlements(token, storedStore.storeId);
				console.log("📢 Settlements Data:", settlementData);
				setSettlements(settlementData || []); // Ensure it's an array

				// 2️⃣ Fetch Transactions **only if settlements exist**
				const transactionData = await fetchTransactions(token, storedStore.storeId);
				console.log("📢 Transactions Data:", transactionData);
				setTransactions(transactionData || []);
			} catch (error) {
				console.error("❌ API error:", error);
			}
		};

		loadData();
	}, []); // ✅ Removed `[navigate]` from dependencies

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		const storedStore = JSON.parse(localStorage.getItem("selectedStore"));

		if (!token || !storedStore) {
			alert("Session expired or no store selected. Please log in again.");
			localStorage.clear();
			navigate("/enter-mobile");
			return;
		}

		const loadOrders = async () => {
			try {
				const ordersData = await fetchOrders(token, storedStore.storeId);
				console.log("📢 Orders Data:", ordersData);
				setOrders(ordersData);
				filterOrders(ordersData, "Confirmation"); // Load Confirmation orders first
			} catch (error) {
				console.error("🚨 Orders API error:", error);
			}
		};

		loadOrders();
	}, []);

	const filterOrders = (ordersData, status) => {
		const filtered = ordersData.filter((order) => order.status === status);
		setFilteredOrders(filtered);
	};

	// Handle tab change
	const handleTabChange = (status) => {
		setActiveTabOrder(status);
		filterOrders(orders, status);
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-0 lg:pe-8 pt-2">
			<div className="flex flex-col">
				{/* Quick Actions */}
				<QuickActions />

				{/* Recent Transactions */}
				<RecentTransactions
					activeTab={activeTab}
					transactions={transactions}
					settlements={settlements}
					setActiveTab={setActiveTab}
				/>
			</div>
			<div className="flex flex-col">
				<div className="bg-white p-4 rounded-lg mb-4">
					<h2 className="text-[20px] font-[600] flex items-center justify-between">
						My Orders
						<LuRefreshCw className="text-lg text-gray-600 cursor-pointer" />
					</h2>
					<LastUpdate />
					<div className="order-header lg:space-x-3 space-x-1 flex justify-center">
						{["Confirmation", "preparing", "packed", "completed"].map((status) => (
							<button
								key={status}
								className={`lg:text-[13px] md:text-[12px] text-[10px] p-1 font-[500] flex flex-col items-center relative cursor-pointer ${
									activeTabOrder === status ? "text-black" : "text-neutral-400"
								}`}
								onClick={() => handleTabChange(status)}
							>
								{status} ({orders.filter((order) => order.status === status).length})
								{activeTabOrder === status && (
									<span className="block lg:w-[60px] w-[40px] h-[2px] mt-1 bg-gradient-to-r from-[#668D12] to-[#ACC43F] rounded-full"></span>
								)}
							</button>
						))}
					</div>

					{/* Temporary UI Component */}
					<TempOrder activeTabOrder={activeTabOrder} />
					<MyOrders filteredOrders={filteredOrders} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
