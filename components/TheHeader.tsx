// import Link from "next/link";
import {Navigation} from "./Navigation";


const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
];

const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItems} />
            {/*<Link href="/">Home</Link>*/}
            {/*<Link href="/blog">Blog</Link>*/}
            {/*<Link href="/about">About</Link>*/}
        </header>
    );
}

export { TheHeader };