import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail,
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer className="w-full mt-[6vw] lg:mt-[4vw] border-t text-white border-zinc-200 bg-violet-900 dark:bg-violet-900 dark:border-violet-500/30">
            <div className="container  py-14">
                {/* Top */}
                <div className="flex flex-col lg:flex-row gap-12 lg:justify-between">
                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-bold">
                            Israr Ahmad
                        </h3>
                        <p className="mt-3 text-base max-w-md leading-relaxed">
                            Frontend Web Developer building fast, scalable and user-focused
                            web applications using React, Next.js and Tailwind CSS.
                        </p>
                    </div>

                    {/* Navigation + Social */}
                    <div className="flex gap-20">
                        {/* Navigation */}
                        <div>
                            <h4 className="text-base font-semibold">
                                Navigation
                            </h4>
                            <ul className="mt-4 space-y-3 text-sm">
                                {["Home", "About", "Projects", "Contact"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                            className="transition-colors duration-300 transform hover:scale-105"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="text-base font-semibold">
                                Socials
                            </h4>
                            <ul className="mt-4 space-y-3 text-sm">
                                {[
                                    { icon: <IconBrandGithub size={18} />, label: "GitHub", href: "https://github.com/" },
                                    { icon: <IconBrandLinkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/" },
                                    { icon: <IconBrandTwitter size={18} />, label: "Twitter", href: "https://twitter.com/" },
                                    { icon: <IconMail size={18} />, label: "Email", href: "mailto:youremail@gmail.com" },
                                ].map((social) => (
                                    <li
                                        key={social.label}
                                        className="flex items-center gap-3 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-300"
                                    >
                                        {social.icon}
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            {social.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-violet-500/30 pt-8">
                    <p className="text-sm ">
                        © {new Date().getFullYear()} Israr Ahmad. All rights reserved.
                    </p>

                    <p className="text-sm">
                        Built with ❤️ using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
