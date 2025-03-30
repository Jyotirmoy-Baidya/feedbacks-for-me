/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { FaBell } from "react-icons/fa"
import Search from "./Search"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

const notifications = [
    { username: "Jyoti", description: "You have a invite link from Jyoti" },
    { username: "Jyoti", description: "You have a invite link from Jyoti" },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className="pl-5">
                    <NavigationMenuTrigger>
                        <div className="flex items-center h-full relative">
                            <FaBell className="text-xl" />
                            <div className="absolute font-medium -top-1.5 right-0 z-20 text-red-600 text-[14px]">
                                2
                            </div>
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="px-1 py-1">
                        <div className="flex flex-col w-[180px] overflow-auto">
                            {
                                notifications.map((ele, i) => (
                                    <div key={i} className="cursor-pointer hover:bg-slate-100/90 flex items-center gap-2 py-3 px-2 border-b-2">
                                        <Image src='/profile-demo-1.jpg' alt="profile pic" height={30} width={30} className="rounded-full" />
                                        <div className="flex-grow text-xs">{ele.description}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <div className="flex gap-2 items-center">
                            <Image src='/profile-demo-1.jpg' alt="profile pic" height={30} width={30} className="rounded-full" />
                            <div>Jyoti</div>
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <ul className="flex flex-col w-[170px] p-1 gap-3 text-sm">
                            <Link className="" href={"/profile"}>Profile</Link>
                            <Link className="pb-2 border-b-2" href={"/docs/primitives"}>Primitives</Link>
                            <button className="bg-red-400 hover:bg-red-500 rounded-lg py-2 px-3 w-full">
                                Sign Out
                            </button>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}



const Navbar = () => {
    return (
        <div className="flex items-center py-2 px-4 relative">
            <div className="">
                Feedbacks For Me
            </div>
            <Search />
            <div className="ml-auto">
                <NavigationMenuDemo />
            </div>
        </div>
    )
}

export default Navbar
