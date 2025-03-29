"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

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
        <NavigationMenu className="bg-red-400 w-screen py-2 px-4 ">

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Notification</NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="absolute">
                        <div className="flex flex-col md:w-[400px] lg:w-[500px] max-w-[1000px] overflow-auto">
                            {
                                notifications.map((ele, i) => (
                                    <div key={i} className="flex items-center gap-2 py-3 px-2 border-b-2">
                                        <Image src='/profile-demo-1.jpg' alt="profile pic" height={30} width={30} className="rounded-full" />
                                        <div>{ele.username}</div>
                                        <div className="flex-grow">{ele.description}</div>
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
                    <NavigationMenuContent>
                        <ul className="flex flex-col w-[260px] gap-3 p-1">
                            <Link href={"/profile"}>Profile</Link>
                            <Link href={"/docs/primitives"}>Primitives</Link>
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

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"



const Navbar = () => {
    return (
        <div className="flex bg-red-200">
            <div className="">
                Feedbacks For Me
            </div>
            <div className="ml-auto">
                <NavigationMenuDemo />
            </div>
        </div>
    )
}

export default Navbar
