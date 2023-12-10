import { NextResponse } from "next/server";
import {headers} from 'next/headers'
import * as jose from 'jose'
import jwt from "jsonwebtoken";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
export async function GET(request){
    const headersInstance = headers()
    const barearToken =  headersInstance.get("Authorization")

    const Token = barearToken.split(" ")[1]

    const payload = jwt.decode(Token)
    await connectMongoDB();
    const userWithEmail = await User.findOne({email:payload.email}).select("first_name email")
    
    return NextResponse.json({
        id:userWithEmail
    })
}