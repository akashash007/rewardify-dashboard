import React from "react";

export const MyOrders = ({ filteredOrders }) => {
	return (
		<>
			<div className="border border-gray-300 rounded-xl mt-4 p-3 bg-white shadow-md max-w-md mx-auto">
				{filteredOrders.length > 0 ? (
					filteredOrders.map((order, index) => (
						<div
							key={index}
							className="mb-4 p-3 border-b border-gray-200"
						>
							<div className="flex justify-between items-center mb-2">
								<span className="text-green font-medium text-sm">
									Order Id: {order.orderId}
								</span>
								<span className="text-gray-500 text-sm">
									Date: {new Date(order.createdAt).toLocaleDateString()}
								</span>
							</div>
							<div className="mb-3">
								<p className="font-semibold text-gray-800 text-sm">Order for:</p>
								<p className="text-gray-700 text-sm">{order.customerName}</p>
								<div className="flex items-center gap-2 mt-1">
									<button className="flex items-center gap-1 text-gray-600 text-sm">
										<span className="bg-m-gray rounded-full p-2">
											<FaPhoneAlt className="text-xs" />
										</span>
										{order.contactNo}
									</button>
									<span className="text-gray-400">|</span>
									<button className="flex items-center gap-1 text-gray-600 text-sm">
										<span className="bg-m-gray rounded-full p-2">
											<FaMapMarkerAlt className="text-xs" />
										</span>
										{order.deliveryAddress}
									</button>
								</div>
							</div>

							<div className="pt-2">
								<p className="font-semibold text-gray-800 mb-2">Order Items:</p>
								{order.items.map((item, i) => (
									<div
										key={i}
										className="flex justify-between text-gray-700 text-sm mb-2"
									>
										<span>
											{item.quantity} x {item.name}
										</span>
										<span>₹{item.price}</span>
									</div>
								))}
							</div>

							<div className="border-t border-gray-200 flex justify-between items-center pt-4">
								<div className="flex items-center">
									<span className="font-semibold text-gray-800">Total Bill Amount</span>
									<span className="text-gray-600 text-sm bg-m-gray text-[10px] px-1 ms-2 py-0 rounded">
										{order.paymentMode}
									</span>
								</div>
								<p className="text-[12px]">₹{order.totalAmount}</p>
							</div>

							<div className="flex gap-2 mt-4">
								<button className="btn-green-gradient-text hover:opacity-70 cursor-pointer">
									<span>Reject Order</span>
								</button>
								<button className="bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white px-4 py-2 rounded w-full hover:opacity-90 cursor-pointer">
									Confirm Order
								</button>
							</div>
						</div>
					))
				) : (
					<p className="text-gray-500 text-center py-4">
						No orders found in this category.
					</p>
				)}
			</div>
		</>
	);
};
