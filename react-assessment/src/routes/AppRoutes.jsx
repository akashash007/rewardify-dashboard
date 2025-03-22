import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login";
import EnterMobile from "../features/auth/EnterMobile";
import EnterOTP from "../features/auth/EnterOTP";
import SelectStore from "../features/auth/SelectStore";

import DashboardLayout from "../features/dashboard/DashboardLayout";
import Dashboard from "../features/dashboard/Dashboard";
import Orders from "../features/dashboard/Orders";
import Transactions from "../features/dashboard/Transactions";
import Settlements from "../features/dashboard/Settlements";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{/* Authentication Routes */}
				<Route
					path="/"
					element={<Login />}
				/>
				<Route
					path="/enter-mobile"
					element={<EnterMobile />}
				/>
				<Route
					path="/enter-otp"
					element={<EnterOTP />}
				/>
				<Route
					path="/select-store"
					element={<SelectStore />}
				/>

				{/* Dashboard Routes (Inside Layout) */}
				<Route
					path="/dashboard"
					element={<DashboardLayout />}
				>
					<Route
						index
						element={<Dashboard />}
					/>
					<Route
						path="orders"
						element={<Orders />}
					/>
					<Route
						path="transactions"
						element={<Transactions />}
					/>
					<Route
						path="settlements"
						element={<Settlements />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
