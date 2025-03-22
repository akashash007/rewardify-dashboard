import React from "react";
import { FaUser } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { LastUpdate } from "./LastUpdate";
export const RecentTransactions = ({
	activeTab,
	transactions,
	settlements,
	setActiveTab,
}) => {
	return (
		<>
			<div className="bg-white p-4 rounded-lg">
				<h2 className="text-[20px] font-[600] flex items-center justify-between">
					Recent Transactions
					<LuRefreshCw className="text-lg text-gray-600 cursor-pointer" />
				</h2>
				<LastUpdate />

				{/* Tabs */}
				<div className="flex text-gray-500 text-sm border-b border-gray-200">
					<button
						className={`p-2 font-[500] flex flex-col items-center relative cursor-pointer ${
							activeTab === "transactions" ? "text-black" : "text-neutral-400"
						}`}
						onClick={() => setActiveTab("transactions")}
					>
						All Transactions
						{activeTab === "transactions" && (
							<span className="block w-[60px] h-[2px] mt-1 bg-gradient-to-r from-[#668D12] to-[#ACC43F] rounded-full"></span>
						)}
					</button>

					<button
						className={`p-2 font-[500] flex flex-col items-center relative cursor-pointer ${
							activeTab === "settlements" ? "text-black" : "text-neutral-400"
						}`}
						onClick={() => setActiveTab("settlements")}
					>
						Settlements
						{activeTab === "settlements" && (
							<span className="block w-[60px] h-[2px] mt-1 bg-gradient-to-r from-[#668D12] to-[#ACC43F] rounded-full"></span>
						)}
					</button>
				</div>

				{/* Transactions Content */}
				{activeTab === "transactions" && (
					<div>
						{transactions.length > 0 ? (
							transactions.map((txn, index) => (
								<div
									key={index}
									className="flex justify-between py-4 border-b border-neutral-200"
								>
									<div className="flex items-start">
										<img
											src="/user.png"
											alt="User"
											className="w-8 h-8 me-4"
										/>
										<div>
											<p className="text-sm font-[500] text-neutral-700">
												{txn?.user?.contactNo || "Unknown User"} sent a payment
											</p>
											<p className="text-[10px] text-neutral-700">
												Paid on {new Date(txn?.createdAt).toLocaleString()}
											</p>
											<span className="text-[10px] text-gray-900 font-[500] bg-gray-100 p-1">
												Paid via {txn?.paymentMode || "Unknown Method"}
											</span>
										</div>
									</div>
									<p className="text-xs font-[500] text-green-600">
										+₹{txn?.amount || "0.00"}
									</p>
								</div>
							))
						) : (
							<p className="text-gray-500 text-center py-4">No transactions found.</p>
						)}
					</div>
				)}

				{/* Settlements Content */}
				{activeTab === "settlements" && (
					<div>
						{settlements.length > 0 ? (
							settlements.map((settlement, index) => (
								<div
									key={index}
									className="flex justify-between py-4 border-b border-neutral-200"
								>
									<p className="text-sm font-[500] text-neutral-700">
										Settlement ID: {settlement?.settlementId || "N/A"}
									</p>
									<p className="text-xs font-[500] text-green-600">
										+₹{settlement?.amount || "0.00"}
									</p>
								</div>
							))
						) : (
							<p className="text-gray-500 text-center py-4">No settlements found.</p>
						)}
					</div>
				)}
			</div>
		</>
	);
};
