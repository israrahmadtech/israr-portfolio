import Link from "next/link";
import { IconDownload, IconMail, IconBriefcase } from "@tabler/icons-react";

export default function CallToAction() {
    return (
        <section className="w-full py-[6vw] lg:py-[4vw]">
            <div className="mx-auto max-w-4xl text-center px-6">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                    Let’s Build Something Meaningful
                </h2>

                <p className="text-sm xs:text-md mt-4 text-zinc-600 dark:text-gray-400">
                    I’m open to freelance work, collaborations, and full-time opportunities.
                    Let’s turn ideas into real products.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    {/* Hire Me */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm sm:text-md rounded-xl bg-violet-500 px-4 sm:px-6 py-3 text-white font-medium
                                    hover:bg-violet-600 transition"
                    >
                        <IconBriefcase size={18} />
                        Hire Me
                    </Link>

                    {/* Download Resume */}
                    <Link
                        href="/resume"
                        className="inline-flex items-center gap-2 text-sm sm:text-md rounded-xl border border-violet-500/40
                            px-4 sm:px-6 py-3 text-violet-600 dark:text-violet-300
                            bg-violet-500/10 transition"
                    >
                        <IconDownload size={18} />
                        Download Resume
                    </Link>

                    {/* Contact */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm sm:text-md rounded-xl border border-zinc-300 dark:border-white/15
                                    px-4 sm:px-6 py-3 text-zinc-700 dark:text-gray-300
                                    hover:bg-violet-500/10 transition"
                    >
                        <IconMail size={18} />
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    );
}
