"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>){
    
    const pathname = usePathname();
    const params = useParams();
    
    const routes = [
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname === `/${params.storeId}/settings`
        },
    ];


    return(
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            // this will merge classname we passed
        >
            {routes.map((route) => (
                <Link
                    key = {route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                    )}                
                >

                    {route.label}
                </Link>
            ))}
        </nav>   
    )
};
