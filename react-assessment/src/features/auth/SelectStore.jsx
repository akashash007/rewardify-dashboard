import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getStores } from "../../api/authService";

const SelectStore = () => {
	const navigate = useNavigate();
	const [stores, setStores] = useState([]);
	const [selectedStore, setSelectedStore] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const storeListRef = useRef(null);

	// Fetch stores from API
	useEffect(() => {
		const fetchStores = async () => {
			try {
				const response = await getStores();
				console.log("Fetched Stores:", response);

				// Ensure stores are always in an array
				setStores(Array.isArray(response) ? response : [response]);
			} catch (err) {
				setError("Failed to load stores. Please try again.", err);
			} finally {
				setLoading(false);
			}
		};
		fetchStores();
	}, []);

	// Enable scrolling when more than 2 stores
	useEffect(() => {
		if (stores.length > 2 && storeListRef.current) {
			storeListRef.current.style.overflowY = "auto"; // Enable scrolling
			storeListRef.current.style.maxHeight = "175px"; // Set max height
			storeListRef.current.style.scrollbarWidth = "none"; // Hide scrollbar (Firefox)
			storeListRef.current.style.msOverflowStyle = "none"; // Hide scrollbar (IE/Edge)
		}
	}, [stores]);

	// Handle Store Selection
	const handleSelectStore = () => {
		if (selectedStore) {
			localStorage.setItem("selectedStore", JSON.stringify(selectedStore));
			navigate("/dashboard"); // Go to Dashboard
		}
	};

	return (
		<div
			className="flex justify-center items-center h-screen bg-cover bg-center"
			style={{ backgroundImage: "url('/login_bg.png')" }}
		>
			<div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
				<h2 className="text-2xl font-[700] mb-2">Select Your Store</h2>

				{/* Show loading spinner */}
				{loading && <p className="text-gray-500">Loading stores...</p>}

				{/* Show error message if API fails */}
				{error && <p className="text-red-500 text-sm">{error}</p>}

				{/* Store List */}
				{!loading && !error && stores.length > 0 && (
					<>
						<p className="text-gray-500 mb-4 font-[400] text-[13px]">
							Your number is connected with {stores.length} store(s)
						</p>

						<div
							ref={storeListRef}
							className="text-left mb-4 space-y-2"
						>
							{stores.map((store) => {
								const imageUrl =
									store?.images?.length > 0 && store.images[0]
										? store.images[0]
										: "/store_list.png";

								return (
									<label
										key={store._id}
										className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-200 transition relative"
									>
										{/* Store Image */}
										<img
											src={imageUrl}
											alt="Store"
											className="w-14 h-14 rounded-md border mr-3 object-cover"
											onError={(e) => {
												e.target.src = "/store_list.png";
											}}
										/>

										{/* Store Details */}
										<div className="flex-1">
											<span className="text-sm font-bold block">{store.name}</span>
											<span className="text-xs text-gray-600 block">
												{store.address?.city}, {store.address?.state}
											</span>
											<span className="text-xs text-gray-400 block">
												Store ID: {store.storeId}
											</span>
										</div>

										{/* Radio Button */}
										<input
											type="radio"
											name="store"
											className="absolute right-3 top-1/2 transform -translate-y-1/2"
											checked={selectedStore?.storeId === store.storeId}
											onChange={() => setSelectedStore(store)}
										/>
									</label>
								);
							})}
						</div>

						{/* Continue Button */}
						<button
							onClick={handleSelectStore}
							disabled={!selectedStore}
							className={`px-4 py-2 rounded w-full transition-opacity ${
								selectedStore
									? "bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white hover:opacity-90"
									: "bg-gray-300 cursor-not-allowed"
							}`}
						>
							Continue
						</button>
					</>
				)}

				{/* If no stores found */}
				{!loading && !error && stores.length === 0 && (
					<p className="text-gray-500 text-sm">No stores linked to this account.</p>
				)}
			</div>
		</div>
	);
};

export default SelectStore;
