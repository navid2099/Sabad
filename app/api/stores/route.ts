import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";


export async function POST(
    req: Request,
){
    try{
        const { userId } = auth();
        const body = await req.json();


        const { name } = body;


        if(!userId){
            return new NextResponse("Unauthorized" , { status: 401});
        }

        if(!name){
            return new NextResponse("Name is required" , {status: 400})
        }
            // till this point we check that informations are enough or what!!


        const store = await prismadb.store.create({
            data:   {
                name,
                userId
            }
        });

        

        return NextResponse.json(store);



    }   catch(error){
        console.log('[STORES_POST]' , error);
        return new NextResponse("Internal error" , {status: 500});
    }
}