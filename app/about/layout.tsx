import React from "react";
import Link from "next/link";

export default function AboutLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>About us</h1>
            <ul>
                <li>
                    <Link href="/about/contacts">Contacts</Link>
                </li>
                <li>
                    <Link href="/about/team">Team</Link>
                </li>
            </ul>
            {/*В данном случае конкретная страница либо page, либо team or contacts*/}
            {children}
        </div>
    )
}