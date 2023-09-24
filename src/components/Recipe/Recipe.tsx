import React from "react";
import Image from "next/image";
import { Recipe } from "@/types/Recipe";
import "./recipe.css";

interface RecipeListProps {
	recipe: Recipe;
	imageUrl?: string;
}

function Recipe({ recipe, imageUrl }: RecipeListProps) {
	return (
		<div className="recipe">
			<h1>{recipe.title}</h1>
			<div className="recipe-image-ingredients">
				{imageUrl && (
					<Image src={imageUrl} alt={recipe.title} width={512} height={512} />
				)}
				<ol>
					{recipe.ingredients.map((ingredient) => (
						<li key={ingredient.name}>
							{ingredient.name} {ingredient.quantity}
						</li>
					))}
				</ol>
			</div>
			<ol className="list-decimal">
				{recipe.instructions.map((instruction) => (
					<li key={instruction}>{instruction}</li>
				))}
			</ol>
		</div>
	);
}

export default Recipe;
