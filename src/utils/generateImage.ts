import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImageUrl(description: string) {
	const image = await openai.images.generate({
		prompt: `Generate a recipe image for the following recipe title: ${description}`,
		size: "512x512",
	});

	return image.data[0].url;
}
