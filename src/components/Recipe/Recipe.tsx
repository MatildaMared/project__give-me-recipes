"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Recipe } from "@/types/Recipe";
import generateImageUrl from "@/utils/generateImage";
import "./recipe.css";
import { DotLoader } from "react-spinners";

interface RecipeListProps {
	recipe: Recipe;
}

function Recipe({ recipe }: RecipeListProps) {
	const [imageUrl, setImageUrl] = useState("https://img.plho.me/512");
	const [imageLoading, setImageLoading] = useState(false);

	const onGenerateImage = async () => {
		setImageLoading(true);
		const response = await fetch("/api/generate-image", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: recipe.title }),
		});

		const data = await response.json();
		setImageUrl(data.imageUrl);
		setImageLoading(false);
	};

	return (
		<div className="recipe">
			<div className="header">
				<h1>{recipe.title}.</h1>
				<p className="summary">{recipe.summary}</p>
			</div>
			<div className="recipe-image">
				<div className="image">
					{imageLoading && (
						<div className="loading">
							<p>Laddar bild... 😋</p>
							<DotLoader color="hotpink" size={64} loading={imageLoading} />
						</div>
					)}
					{!imageLoading && imageUrl && (
						<Image src={imageUrl} alt={recipe.title} width={512} height={512} />
					)}
				</div>
				<button className="button" onClick={onGenerateImage}>
					Låt AI generera en läcker bild!
				</button>
			</div>
			<p className="portions">{recipe.numberOfPortions} portioner</p>
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
