import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function SetupLayout({
    children
}:{
    children: React.ReactNode;
})  {
    const { userId } = auth();

    if(!userId) {
        redirect('/sign-in');
    }

    // now we modify fist active store for each user

    //load the first one (keep the usre inside the root)


    const store = await prismadb.store.findFirst({
        where: {
            userId: userId
        }
    });

    if(store) {
        redirect(`/${store.id}`);
        // we load the first store with curently logged in user
        // redirect to store id (in app/auth/dashboard/storeid)
        // if exist then render the Navigation bar

    }

    return(
        <>
         {children}        
        </>
    );

};