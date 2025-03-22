import React from "react";
import { QuickActionSlider } from "./QuickActionSlider";
export const QuickActions = () => {
	return (
		<>
			<div className="bg-white p-4 rounded-lg mb-4">
				<h2 className="text-[20px] font-[600]">Quick Actions</h2>
				<div className="grid grid-cols-4 gap-0 mt-4 items-start">
					<QuickActionSlider />
				</div>
			</div>
		</>
	);
};
