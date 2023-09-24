import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import z from "zod";

const parser = StructuredOutputParser.fromZodSchema(
	z.object({
		title: z.string().describe("The recipe title."),
		summary: z.string().describe("A short summary of the recipe."),
		numberOfPortions: z
			.number()
			.int()
			.positive()
			.describe("The number of portions the recipe is for"),
		ingredients: z
			.array(
				z.object({
					name: z.string().describe("The ingredient name."),
					quantity: z
						.string()
						.describe(
							"The ingredient quantity using Swedish units (i.e 1 dl, 2 msk, 1 tsk)."
						),
				})
			)
			.describe("The recipe ingredients with quantity."),
		instructions: z.array(z.string()).describe("The recipe instructions."),
	})
);

const getRecipePrompt = async (content: string) => {
	const formatInstructions = parser.getFormatInstructions();
	const prompt = new PromptTemplate({
		template: `I am going to give you a string describing what I would like to eat (i.e "meat" or "salad"), what ingredients I have at home (i.e "feta cheese", "spaghetti") or what type of dish I would like (i.e "healthy"). I want you to read the string and search the internet for a fitting recipe, using only Swedish sources. The recipe should default to 4 portions. Follow the instructions and format your response to match the format instructions, no matter what! I would like the response to be written in Swedish. \n{formatInstructions}\n{content}`,
		inputVariables: ["content"],
		partialVariables: { formatInstructions },
	});

	const input = await prompt.format({ content });
	return input;
};

export const generateRecipe = async (content: string) => {
	const input = await getRecipePrompt(content);

	const model = new OpenAI({
		temperature: 0,
		modelName: "gpt-3.5-turbo",
	});

	const result = await model.call(input);

	try {
		return parser.parse(result);
	} catch (err) {
		console.log(err);
	}
};
