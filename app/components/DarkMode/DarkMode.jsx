'use client'
import { useState, useEffect } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

export default function DarkModeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className={`absolute z-50 top-4 right-4 flex items-center 
    w-12 h-6 md:w-16 md:h-8 
    p-1 rounded-full transition-colors duration-300
    ${dark ? "bg-violet-500" : "bg-gray-300"}`}
        >
            {/* Circle */}
            <span
                className={`bg-white rounded-full shadow-md transform transition-transform duration-300
      w-4 h-4 md:w-6 md:h-6
      ${dark ? "translate-x-6 md:translate-x-8" : "translate-x-0"}`}
            >
                {dark ? (
                    <IconMoon className="w-3 h-3 md:w-4 md:h-4 text-violet-500 m-[2px] md:m-1" />
                ) : (
                    <IconSun className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 m-[2px] md:m-1" />
                )}
            </span>
        </button>
    );
}
