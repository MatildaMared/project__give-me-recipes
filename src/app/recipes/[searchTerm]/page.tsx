import RecipeList from "@/components/Recipe";
import { generateRecipe } from "@/utils/generateRecipe";
import { generateImageUrl } from "@/utils/generateImage";
import React from "react";

interface RecipePageProps {
	params: {
		searchTerm: string;
	};
}

async function RecipePage({ params }: RecipePageProps) {
	const decodedSearchTerm = decodeURIComponent(params.searchTerm);

	const recipe = await generateRecipe(decodedSearchTerm);

	const imageUrl = await generateImageUrl(recipe!.title);

	return (
		<div>
			RecipePage
			{recipe && <RecipeList recipe={recipe} imageUrl={imageUrl} />}
		</div>
	);
}

export default RecipePage;
