import RecipeList from "@/components/Recipe";
import generateRecipe from "@/utils/generateRecipe";
import React from "react";
import "./style.css";
import Link from "next/link";

interface RecipePageProps {
	params: {
		searchTerm: string;
	};
}

async function RecipePage({ params }: RecipePageProps) {
	const decodedSearchTerm = decodeURIComponent(params.searchTerm);

	const recipe = await generateRecipe(decodedSearchTerm);

	return (
		<main>
			{recipe && (
				<RecipeList recipe={recipe} />
			)}
			<Link href="/" className="button">
				Tillbaka till startsidan
			</Link>
		</main>
	);
}

export default RecipePage;
