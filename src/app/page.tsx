import SearchInput from "@/components/SearchInput";
import "./style.css";
import { DotLoader } from "react-spinners";

export default async function Home() {
	return (
		<main className="main">
			<div className="search">
				<h1>Jag är hungrig.</h1>
				<SearchInput />
			</div>
		</main>
	);
}
