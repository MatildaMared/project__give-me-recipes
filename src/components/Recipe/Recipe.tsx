import React from "react";
import Image from "next/image";

interface RecipeListProps {
	recipe: {
		title: string;
		summary: string;
		numberOfPortions: number;
		ingredients: {
			name: string;
			quantity: string;
		}[];
		instructions: string[];
	};
	imageUrl?: string;
}

function RecipeList({ recipe, imageUrl }: RecipeListProps) {
	return (
		<div>
			<ul>
				<li key={recipe.title} className="border border-black/10 p-4 mb-4">
					{imageUrl && (
						<Image src={imageUrl} alt={recipe.title} width={512} height={512} />
					)}
					<h2 className="text-xl font-bold">{recipe.title}</h2>
					<ol className="list-disc border border-b-black/10">
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient.name}>
								{ingredient.name} {ingredient.quantity}
							</li>
						))}
					</ol>
					<ol className="list-decimal">
						{recipe.instructions.map((instruction) => (
							<li key={instruction}>{instruction}</li>
						))}
					</ol>
				</li>
			</ul>
		</div>
	);
}

export default RecipeList;
