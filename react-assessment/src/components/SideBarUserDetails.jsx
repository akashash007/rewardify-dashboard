import React from "react";

export const SideBarUserDetails = ({ selectedStore }) => {
	return (
		<>
			<img
				src="/store_list.png"
				alt="Store"
				className="w-16 h-16 rounded-lg"
			/>
			<p className="font-[600] mt-2 text-[15px] text-black">
				{selectedStore?.name || "No Store Selected"}
			</p>
			<p className="text-xs text-gray-400">
				Shop ID: {selectedStore?.storeId || "N/A"}
			</p>
		</>
	);
};
