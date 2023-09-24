export interface Recipe {
	title: string;
	summary: string;
	numberOfPortions: number;
	ingredients: {
		name: string;
		quantity: string;
	}[];
	instructions: string[];
}
