"use client";
import { DotLoader } from "react-spinners";
import "./loading.css";

function Loading() {
	return (
		<div className="loading">
			<p>Genererar det godaste receptet i mannaminne... 😋</p>
			<DotLoader color="hotpink" size={64} loading={true} />
		</div>
	);
}

export default Loading;
