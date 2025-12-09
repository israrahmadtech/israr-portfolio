'use client'
import React, { useEffect, useState } from 'react'

export default function CursorEffect() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

    // Listen to mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Shadow offsets
    const offsets = [
        { x: 0, y: 0 },
        { x: 50, y: 0 },
        { x: -50, y: 0 },
        { x: 0, y: 50 },
        { x: 0, y: -50 },
        { x: 30, y: 30 },
        { x: -30, y: -30 },
        { x: 30, y: -30 },
        { x: -30, y: 30 },
    ]

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            {offsets.map((offset, index) => (
                <div
                    key={index}
                    className="absolute w-0 h-0 -z-1"
                    style={{
                        left: `${cursorPos.x + offset.x}px`,
                        top: `${cursorPos.y + offset.y}px`,
                        boxShadow: '0 0 110px 100px #5e0ec011',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    )
}
