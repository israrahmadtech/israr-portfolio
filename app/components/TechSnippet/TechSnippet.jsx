"use client";
import { useState } from "react";

export default function TechSnippet() {
    const [active, setActive] = useState("next");

    const snippets = {
        react: `1   import Hero from "./components/Hero/Hero"
2  
3   export function Home() {
4     return (
5       <div>
6         <Hero/>
7       </div>
8     )
9   }
        `,

        next: `1   import Sidebar from './components/Sidebar/
    Sidebar';
2   import './global.css'
3
4   export function RootLayout({ children }) {
5     return (
6       <html lang="en">
7         <body className="w-full h-screen">
8           <Sidebar />
9           <main className='w-full h-full'>
10             {children}
11           </main>
12         </body>
13       </html>
14     );
15   }
        `,

        tailwind: `1   <div class="p-4 bg-violet-600 text-white 
    rounded-lg">
2     Tailwind is Love 💜
3   </div>`,

        supabase: `1   import { createClient } from '@supabase/
    supabase-js';
2 
3   const supabaseUrl = 'YOUR_SUPABASE_URL';
4   const supabaseAnonKey = 
    'YOUR_SUPABASE_ANON_KEY';
5 
6   const supabase = createClient(
7                     supabaseUrl,
8                     supabaseAnonKey
9                 );
        `,

        workflow: `1   Plan UI in Figma
2   Build Components in React + Tailwind
3   Connect Supabase APIs
4   Deploy on Vercel 🚀`,
    };

    return (
        <div className="w-full max-w-md min-h-130 mx-auto bg-black dark:bg-[#01000394] border border-white/10 rounded-xl p-0 select-none shadow-[0_0_70px_10px_rgba(139,92,246,0.2)] overflow-hidden flex flex-col">

            {/* Tabs */}
            <div className="border-b border-white/10 flex w-full">
                {[
                    { key: "react", label: "React" },
                    { key: "next", label: "Next.js" },
                    { key: "tailwind", label: "Tailwind" },
                    { key: "supabase", label: "Supabase" },
                    { key: "workflow", label: "Workflow" },
                ].map((item) => (
                    <button
                        key={item.key}
                        onClick={() => setActive(item.key)}
                        className={`font-semibold flex-1 text-center py-3 text-sm transition border-r border-white/5 last:border-r-0
              ${active === item.key ? "text-violet-400 bg-[#33007249]" : "text-gray-400 hover:text-white"}`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Code Block */}
            <pre className="text-green-300 text-sm p-5 leading-relaxed font-mono whitespace-pre-wrap min-h-[220px]">{snippets[active]}</pre>

            {/* Footer */}
            <div className="mt-auto border-t border-white/10 px-5 py-3 text-sm text-gray-400 flex justify-between items-center">
                <span>Documentation →</span>
                <button
                    onClick={() => navigator.clipboard.writeText(snippets[active])}
                    className="text-gray-500 hover:text-white transition"
                >
                    ⧉
                </button>
            </div>
        </div>
    );
}