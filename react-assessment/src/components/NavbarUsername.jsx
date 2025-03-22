import React from "react";

export const NavbarUsername = ({ profile }) => {
	return (
		<>
			<h2 className="text-xl font-bold me-auto ms-40 hidden lg:block">
				Welcome, {profile?.name || ""}
			</h2>
		</>
	);
};
