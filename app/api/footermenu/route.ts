import connectDB from "@/lib/mongoose";
import FooterMenu from "@/models/FooterMenu";
import { NextResponse } from "next/server";

export async function GET() {  
  let footermenus;
  try {
    await connectDB();
    footermenus = await FooterMenu.find();
  } catch (error) {    
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }


  return NextResponse.json(footermenus);
}
