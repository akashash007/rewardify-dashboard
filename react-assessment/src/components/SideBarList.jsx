import React from "react";
import { FaShoppingCart, FaStore, FaBox, FaUserCircle } from "react-icons/fa";
export const SideBarList = ({ navigate, isActive }) => {
	return (
		<>
			<li
				className={`flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded text-black ps-10 ${
					isActive("/dashboard") ? "border-r-4 border-[#668D12] bg-m-gray" : ""
				}`}
				onClick={() => navigate("/dashboard")}
			>
				<FaStore className="mr-3" /> Dashboard
			</li>
			<li
				className={`flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded text-black ps-10 ${
					isActive("/orders") ? "border-r-4 border-green-500 bg-m-gray" : ""
				}`}
				onClick={() => navigate("/orders")}
			>
				<FaShoppingCart className="mr-3" /> Orders
			</li>
			<li
				className={`flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded text-black ps-10 ${
					isActive("/transactions") ? "border-r-4 border-green-500 bg-m-gray" : ""
				}`}
				onClick={() => navigate("/transactions")}
			>
				<FaBox className="mr-3" /> My Products
			</li>
			<li
				className={`flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded text-black ps-10 ${
					isActive("/settlements") ? "border-r-4 border-green-500 bg-m-gray" : ""
				}`}
				onClick={() => navigate("/settlements")}
			>
				<FaUserCircle className="mr-3" /> Profile
			</li>
		</>
	);
};
