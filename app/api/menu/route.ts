import connectDB from "@/lib/mongoose";
import Menu from "@/models/Menu";
import { NextResponse } from "next/server";

export async function GET() {  
  let menus;
  try {
    await connectDB();
    menus = await Menu.find();
  } catch (error) {    
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }


  return NextResponse.json(menus);
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    await connectDB();
    const menu = new Menu(body);
    await menu.save();
    return NextResponse.json(menu, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}