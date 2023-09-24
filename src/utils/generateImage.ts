import OpenAI from "openai";
import { cache } from "react";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const generateImageUrl = cache(async (description: string) => {
	console.log("Generating image for", description);
	const image = await openai.images.generate({
		prompt: `Generate a recipe image for the following recipe title: ${description}`,
		size: "512x512",
	});

	return image.data[0].url;
});

export default generateImageUrl;
