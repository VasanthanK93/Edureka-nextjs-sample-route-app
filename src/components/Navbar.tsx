import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-black p-4 flex items-center">
            <Link className="mr-2" href="/">Home</Link>
            <Link className="mr-2" href="/about">About</Link>
            <Link className="mr-2" href="/contact">Contact</Link>
            </nav>
    );
}