import React from "react";
import {
	FaMoneyBillWave,
	FaMoneyCheckAlt,
	FaHistory,
	FaGift,
} from "react-icons/fa";
export const QuickActionSlider = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center text-center">
				<button className="flex flex-col items-center w-12 mb-2 p-3 bg-m-gray hover:bg-gray-200 rounded-lg mx-auto">
					<FaMoneyBillWave className="text-lg text-black" />
				</button>
				<span className="text-[12px] font-semibold">
					Make <br /> Payment
				</span>
			</div>

			<div className="flex flex-col justify-center items-center text-center">
				<button className="flex flex-col items-center w-12 mb-2 p-3 bg-m-gray hover:bg-gray-200 rounded-lg mx-auto">
					<FaMoneyCheckAlt className="text-lg text-black" />
				</button>
				<span className="text-[12px] font-semibold">Settlements</span>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<button className="flex flex-col items-center w-12 mb-2 p-3 bg-m-gray hover:bg-gray-200 rounded-lg mx-auto">
					<FaHistory className="text-lg text-black" />
				</button>
				<span className="text-[12px] font-semibold">Transaction History</span>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<button className="flex flex-col items-center w-12 mb-2 p-3 bg-m-gray hover:bg-gray-200 rounded-lg mx-auto">
					<FaGift className="text-lg text-black" />
				</button>
				<span className="text-[12px] font-semibold">
					Gift <br /> Cards
				</span>
			</div>
		</>
	);
};
