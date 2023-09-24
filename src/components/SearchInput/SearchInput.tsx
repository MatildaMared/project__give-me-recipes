"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "./search-input.css";

function SearchInput() {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const router = useRouter();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const encodedSearchTerm = encodeURIComponent(searchTerm);
		router.push(`/recipes/${encodedSearchTerm}`);
	};

	return (
		<form onSubmit={handleSubmit} className="search-input">
			<input
				type="text"
				className="border border-black/10 rounded-lg px-4 py-2 text-lg mr-2"
				placeholder="Vad är du sugen på? 🥳"
				value={searchTerm}
				onChange={handleChange}
			/>
			<button type="submit">Ge mig ett recept!</button>
		</form>
	);
}

export default SearchInput;
