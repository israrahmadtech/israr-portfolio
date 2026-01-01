"use client"

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = e.target
        if (!email.value || !message.value) return toast.error("Email & Message is required!")
        setIsLoading(true)
        const contact = { name: name.value, email: email.value, message: message.value }

        try {
            const res = await fetch('/api/contacts', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data.message)
            toast.success("Message has sent!")
            // e.target.reset()
        }
        catch (error) {
            toast.error("Something went wrong!")
        }
        finally { setIsLoading(false) }
    }


    return (
        <section id="contact-section" className="w-full py-20">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left: Contact Form */}
                <div className="w-full">
                    <h2 className="text-violet-500 font-semibold text-lg inline-block border-s-2 border-violet-500 ps-2 leading-6">
                        CONTACT ME
                    </h2>
                    <p className="text-violet-400 dark:text-violet-300 mt-2 text-sm max-w-md">
                        Send me a message and I&apos;ll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg outline-none bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 backdrop-blur-sm focus:border-violet-500/70 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-fit ms-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-md rounded-lg bg-violet-500 text-white font-semibold transition-transform duration-300"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>

                {/* Right: Contact Info Card */}
                <div className="relative hidden lg:flex items-center justify-center">
                    {/* Glow */}
                    <div className="absolute w-[520px] h-[520px] rounded-full bg-violet-500/20 blur-3xl" />

                    {/* Card */}
                    <div
                        className="relative w-full max-w-md rounded-3xl p-8 border border-violet-500/30 bg-gradient-to-br from-violet-500/20 to-transparent backdrop-blur-sm space-y-6"
                    >
                        {/* Header */}
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                                Contact Information
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-gray-400 mt-2">
                                Feel free to reach out via email, phone, or visit me at my location.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📧</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        Email
                                    </p>
                                    <p className="text-md text-zinc-600 dark:text-gray-400">
                                        israr.ahmad@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">📞</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        Phone
                                    </p>
                                    <p className="text-md text-zinc-600 dark:text-gray-400">
                                        +92 300 1234567
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">📍</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        Location
                                    </p>
                                    <p className="text-md text-zinc-600 dark:text-gray-400">
                                        Karachi, Pakistan
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">💼</span>
                                <div>
                                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                        LinkedIn
                                    </p>
                                    <p className="text-md text-zinc-600 dark:text-gray-400">
                                        linkedin.com/in/israr-ahmad
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
