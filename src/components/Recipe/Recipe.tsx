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
			<div className="header">
				<h1>{recipe.title}.</h1>
				<p className="summary">{recipe.summary}</p>
			</div>
			<div className="recipe-image">
				<div className="image">
					{imageUrl && (
						<Image src={imageUrl} alt={recipe.title} width={512} height={512} />
					)}
				</div>
			</div>
			<section className="ingredients-instructions">
				<div className="ingredients">
					<h3>Ingredienser</h3>
					<ul className="ingredients-list">
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient.name}>
								{ingredient.name} {ingredient.quantity}
							</li>
						))}
					</ul>
				</div>
				<div className="instructions">
					<h3>Gör såhär</h3>
					<ol className="instructions-list">
						{recipe.instructions.map((instruction) => (
							<li key={instruction}>{instruction}</li>
						))}
					</ol>
				</div>
			</section>
		</div>
	);
}

export default Recipe;
