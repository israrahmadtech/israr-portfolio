"use client";
import React, { useState } from "react";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconHighlight,
    IconHome,
    IconMail,
    IconMoon,
    IconPhoneCall,
    IconRocket,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/AdminSidebar/sidebarUI";
import { useLogout } from "../../CustomHooks/AdminLogout";
import { FaHome } from "react-icons/fa";
import Link from "next/link";


export function AdminSidebar() {
    const handleLogout = useLogout()
    
    const links = [
        {
            label: "Dashboard",
            href: "/admin/dashboard",
            icon: (
                <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Contacts",
            href: "/admin/contacts",
            icon: (
                <IconPhoneCall className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Emails",
            href: "/admin/emails",
            icon: (
                <IconMail className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Projects",
            href: "/admin/projects",
            icon: (
                <IconRocket className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Highlights",
            href: "/admin/highlights",
            icon: (
                <IconHighlight className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
            ),
        },
        {
            label: "Logout",
            href: "#", // href must exist for Link, but we prevent default
            icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
            onClick: handleLogout,
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody
                className="justify-between gap-10 bg-white dark:bg-[#0a0611] border-r border-violet-500/15
    "
            >
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    <Link href='/' className={`flex items-center gap-2 ${open ? "ps-2" : ""}`}> <LogoIcon /> {open ? "Home" : ""} </Link>

                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink
                                key={idx}
                                link={link}
                                className="rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-violet-500/10 dark:hover:bg-violet-500/15 transition"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <SidebarLink
                        link={{
                            label: "Israr Ahmad",
                            href: "#",
                            icon: (
                                <img
                                    src="/israr7.png"
                                    className="h-7 w-7 shrink-0 rounded-full ring-1 ring-violet-500/30"
                                    width={50}
                                    height={50}
                                    alt="Avatar"
                                />
                            ),
                        }}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-violet-500"
                    />
                </div>
            </SidebarBody>
        </Sidebar>
    );
}

export const LogoIcon = () => {
    return (
        <span
            className="rounded-full w-4 h-4 md:w-6 md:h-6 bg-white dark:bg-violet-500/10 flex items-center justify-center"
        >
            <FaHome className="w-3 h-3 md:w-5 md:h-5 text-violet-300" />
        </span>
    );
};
