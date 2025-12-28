"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function NewsletterSection() {
    return (
        <section className="w-full py-20">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left: Email Subscription */}
                <div className="w-full">
                    <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
                        SUBSCRIBE TO NEWSLETTER
                    </h2>
                    <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm">
                        Get updates about my latest projects, articles, and resources directly in your inbox.
                    </p>

                    <form className="mt-6 flex flex-col gap-4 w-full">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="flex-1 p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                        />
                        <button
                            type="submit"
                            className="w-fit ms-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-md rounded-lg bg-violet-500 text-white font-semibold transition-transform duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Right: Social Media Buttons */}
                <div className="relative flex flex-col items-center justify-center space-y-4">
                    <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-500/20 blur-3xl" />
                    <div
                        className="relative w-full max-w-md rounded-3xl p-8 border border-violet-500/30 bg-gradient-to-br from-violet-500/20
                                    to-transparent backdrop-blur-sm flex flex-col items-center justify-center space-y-4"
                    >
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                            Connect with me
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-gray-400 text-center">
                            Follow me on my social media accounts to stay updated.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer"
                                className="p-3 rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white hover:scale-110 transition-transform">
                                <FaWhatsapp size={20} />
                            </a>
                            <a href="https://linkedin.com/in/israr-ahmad" target="_blank" rel="noreferrer"
                                className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white hover:scale-110 transition-transform">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/israrahmad" target="_blank" rel="noreferrer"
                                className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white hover:scale-110 transition-transform">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://twitter.com/israrahmad" target="_blank" rel="noreferrer"
                                className="p-3 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white hover:scale-110 transition-transform">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
