"use client";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BredCumps: React.FC = () => {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {
        const fullURL: string = window.location.pathname;
        const pathArray: string[] = fullURL.split("/").filter((path) => path);
        setBreadcrumbs(pathArray);
    }, [pathname]);

    if (!breadcrumbs.length) {
        return <div></div>;
    }

    return (
        <div className="containers">
            <Breadcrumbs className="mt-5">
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                {breadcrumbs.map((crumb, index) => {
                    const href: string = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
                    const isActive = index === breadcrumbs.length - 1;
                    return (
                        <BreadcrumbItem key={href} href={href} className={isActive ? "text-xl font-bold" : ""}>
                            {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
};

export default BredCumps;
