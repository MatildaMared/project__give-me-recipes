import generateImageUrl from "@/utils/generateImage";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	const body = await req.text();
	const title = JSON.parse(body).title;

	const imageUrl = await generateImageUrl(title);

	return NextResponse.json({ imageUrl });
};
