"use client"

import Link from "next/link"

interface Props {
    href: string,
    title: string
}

export default function BackLink({ href, title }: Props) {
    return (
        <Link href={href}
            className={"flex items-center whitespace-nowrap rounded bg-deepskyblue/10 w-fit px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none"}
        >
            {title}
        </Link>
    )
}
