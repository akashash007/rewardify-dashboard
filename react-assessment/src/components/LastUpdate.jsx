import React from "react";

export const LastUpdate = () => {
	return (
		<>
			<p className="text-[12px] text-gray-400 mb-3">
				Last Update at:{" "}
				{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
			</p>
		</>
	);
};
