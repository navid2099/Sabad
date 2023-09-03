import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";

export default async function DashboardLayout({
    children,
    params
}:{
    children: React.ReactNode;
    params: { storeId: string}
}) {
    const { userId } = auth();

    if(!userId){
        redirect ('/sign-in');
    }
    // managing that we have userId on not


    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId: userId
        }
    });

    //now we should verify that stores exist or what

    if(!store){
        redirect('./')
    }

    return(

        <>
        <Navbar />
        {children}        
        </>


    )

}