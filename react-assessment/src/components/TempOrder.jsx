import React from "react";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export const TempOrder = ({ activeTabOrder }) => {
	return (
		<>
			{activeTabOrder === "Confirmation" && (
				<div className="border border-gray-300 rounded-xl mt-4 p-3 bg-white shadow-md max-w-md mx-auto">
					<div className="flex justify-between items-center mb-2">
						<span className="text-green font-medium text-sm">Order Id: 1</span>
						<span className="text-gray-500 text-sm">Date: Apr 09, 2024</span>
					</div>
					<div className="mb-3">
						<p className="font-semibold text-gray-800 text-sm">Order for:</p>
						<p className="text-gray-700 text-sm">Rajesh Kannan</p>
						<div className="flex items-center gap-2 mt-1">
							<button className="flex items-center gap-1 text-gray-600 text-sm">
								<span className="bg-m-gray rounded-full p-2">
									<FaPhoneAlt className="text-xs" />
								</span>
								+918526547512
							</button>
							<span className="text-gray-400">|</span>
							<button className="flex items-center gap-1 text-gray-600 text-sm">
								<span className="bg-m-gray rounded-full p-2">
									<FaMapMarkerAlt className="text-xs" />
								</span>
								R S Puram, Coimbatore
							</button>
						</div>
					</div>

					<div className="pt-2">
						<p className="font-semibold text-gray-800 mb-2">Order Items:</p>
						<div className="flex justify-between text-gray-700 text-sm mb-2">
							<span>1 x Ooty apple</span>
							<span>₹100.00</span>
						</div>
						<div className="flex justify-between text-gray-700 text-sm mb-4">
							<span>5 x White Egg</span>
							<span>₹50.00</span>
						</div>
					</div>

					<div className="border-t border-gray-200 flex justify-between items-center pt-4">
						<div className="flex items-center">
							<span className="font-semibold text-gray-800">Total Bill Amount</span>
							<span className="text-gray-600 text-sm bg-m-gray text-[10px] px-1 ms-2 py-0 rounded">
								PAID - UPI
							</span>
						</div>
						<p className="text-[12px]">₹150</p>
					</div>

					<div className="mt-3 flex gap-2 mt-4">
						<button className="btn-green-gradient-text  hover:opacity-70 cursor-pointer">
							<span>Reject Order</span>
						</button>
						<button className="bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white px-4 py-2 rounded w-full hover:opacity-90 cursor-pointer">
							Confirm Order
						</button>
					</div>
				</div>
			)}
			{activeTabOrder === "preparing" && (
				<div className="border border-gray-300 rounded-xl mt-4 p-3 bg-white shadow-md max-w-md mx-auto">
					<div className="flex justify-between items-center mb-2">
						<span className="text-green font-medium text-sm">Order Id: 1</span>
						<span className="text-gray-500 text-sm">Date: Apr 09, 2024</span>
					</div>
					<div className="mb-3">
						<p className="font-semibold text-gray-800 text-sm">Order for:</p>
						<p className="text-gray-700 text-sm">Rajesh Kannan</p>
						<div className="flex items-center gap-2 mt-1">
							<button className="flex items-center gap-1 text-gray-600 text-sm">
								<span className="bg-m-gray rounded-full p-2">
									<FaPhoneAlt className="text-xs" />
								</span>
								+918526547512
							</button>
							<span className="text-gray-400">|</span>
							<button className="flex items-center gap-1 text-gray-600 text-sm">
								<span className="bg-m-gray rounded-full p-2">
									<FaMapMarkerAlt className="text-xs" />
								</span>
								R S Puram, Coimbatore
							</button>
						</div>
					</div>

					<div className="pt-2">
						<p className="font-semibold text-gray-800 mb-2">Order Items:</p>
						<div className="flex justify-between text-gray-700 text-sm mb-2">
							<span>1 x Ooty apple</span>
							<span>₹100.00</span>
						</div>
						<div className="flex justify-between text-gray-700 text-sm mb-4">
							<span>5 x White Egg</span>
							<span>₹50.00</span>
						</div>
					</div>

					<div className="border-t border-gray-200 border-b flex justify-between items-center py-4">
						<div className="flex items-center">
							<span className="font-semibold text-gray-800">Total Bill Amount</span>
							<span className="text-gray-600 text-sm bg-m-gray text-[10px] px-1 ms-2 py-0 rounded">
								PAID - UPI
							</span>
						</div>
						<p className="text-[12px]">₹150</p>
					</div>

					<div className="flex gap-2 mt-4">
						<button
							disabled={true}
							className="bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white px-4 py-2 rounded w-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Verify & Pack Items
						</button>
					</div>
				</div>
			)}
			{activeTabOrder === "packed" && (
				<div className="border border-gray-300 rounded-xl mt-4 p-3 bg-white shadow-md max-w-md mx-auto">
					<div className="flex justify-between items-center mb-2">
						<span className="font-medium text-sm">Ready for deleivery :</span>
					</div>
					<div className="mb-3">
						<p className="font-semibold text-green text-sm">Order Id:</p>
						<p className="text-gray-700 text-sm">Rajesh Kannan</p>
						<div className="flex items-center gap-2 mt-1">
							<button className="flex items-center gap-1 text-gray-600 text-sm">
								<span className="bg-m-gray rounded-full p-2">
									<FaPhoneAlt className="text-xs" />
								</span>
								+918526547512
							</button>
							<span className="text-gray-400">|</span>
							<button className="flex items-center gap-1 text-gray-600 text-sm">
								<span className="bg-m-gray rounded-full p-2">
									<FaMapMarkerAlt className="text-xs" />
								</span>
								R S Puram, Coimbatore
							</button>
						</div>
					</div>

					<div className="pt-2 relative">
						<div className="absolute left-[6.8px] top-3 bottom-3 border-l-2 border-dashed border-neutral-300"></div>
						<div className="space-y-5">
							<div className="relative flex justify-between text-black text-xs">
								<span className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full  before:left-[-15px] ms-4">
									Store Confirmation
								</span>
								<span>Apr 09, 2024 | 02:00PM</span>
							</div>

							<div className="relative flex justify-between text-black text-xs">
								<span className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full  before:left-[-15px] ms-4">
									Delivery Accepted
								</span>
								<span>Apr 09, 2024 | 02:00PM</span>
							</div>

							<div className="relative flex justify-between text-black text-xs">
								<span className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full  before:left-[-15px] ms-4">
									Delivery Pickup
								</span>
								<span>Apr 10, 2024 | 03:30PM</span>
							</div>
						</div>
					</div>
				</div>
			)}
			{activeTabOrder === "completed" && (
				<div className="border border-gray-300 rounded-xl mt-4 p-3 bg-white shadow-md max-w-md mx-auto">
					<div className="flex justify-between items-center mb-2">
						<span className="font-medium text-sm"> Deleivery Completed :</span>
					</div>
					<div className="mb-3">
						<div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
							<span className="bg-m-gray rounded-full p-2">
								<FaUser className="text-xs" />
							</span>
							Rajesh Kannan
						</div>
						<div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
							<span className="bg-m-gray rounded-full p-2">
								<FaPhoneAlt className="text-xs" />
							</span>
							+918526547512
						</div>
						<div className="flex items-center gap-1 text-gray-600 text-sm">
							<span className="bg-m-gray rounded-full p-2">
								<FaMapMarkerAlt className="text-xs" />
							</span>
							R S Puram, Coimbatore
						</div>
					</div>

					<div className="pt-2 relative">
						<div className="absolute left-[6.8px] top-3 bottom-3 border-l-2 border-dashed border-neutral-300"></div>
						<div className="space-y-5">
							<div className="relative flex justify-between text-black text-xs">
								<span className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full  before:left-[-15px] ms-4">
									Store Confirmation
								</span>
								<span>Apr 09, 2024 | 02:00PM</span>
							</div>

							<div className="relative flex justify-between text-black text-xs">
								<span className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full  before:left-[-15px] ms-4">
									Delivery Accepted
								</span>
								<span>Apr 09, 2024 | 02:00PM</span>
							</div>

							<div className="relative flex justify-between text-black text-xs">
								<span className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-green-500 before:rounded-full  before:left-[-15px] ms-4">
									Delivery Pickup
								</span>
								<span>Apr 10, 2024 | 03:30PM</span>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-200  flex justify-between items-center py-4 mt-4">
						<div className="flex items-center">
							<span className="font-semibold text-gray-800">Total Bill Amount</span>
							<span className="text-gray-600 text-sm bg-m-gray text-[10px] px-1 ms-2 py-0 rounded">
								PAID - UPI
							</span>
						</div>
						<p className="text-[12px]">₹150</p>
					</div>
					<div className="flex gap-2">
						<button className="btn-green-gradient-text  hover:opacity-70 cursor-pointer">
							<span>Reject Order</span>
						</button>
						<button className="bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white px-4 py-2 rounded w-full hover:opacity-90 cursor-pointer">
							Confirm Order
						</button>
					</div>
					<p className="text-[12px] text-neutral-400 mt-2 text-center">
						*After 5days the payment will be automatically approves
					</p>
				</div>
			)}
		</>
	);
};
