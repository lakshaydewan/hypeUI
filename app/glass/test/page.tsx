"use client"

import MagneticButton from "@/components/MagneticButton"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-center gap-8 p-24">
      <h1 className="text-3xl font-bold mb-8">Magnetic Button Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Default</h2>
          <MagneticButton onClick={() => setCount(count + 1)}>Click Me</MagneticButton>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Outline</h2>
          <MagneticButton variant="outline" size="lg" magneticStrength={0.7}>
            Stronger Effect
          </MagneticButton>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Ghost</h2>
          <MagneticButton
            variant="ghost"
            size="sm"
            magneticStrength={0.3}
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            }
            iconPosition="right"
          >
            With Icon
          </MagneticButton>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-center text-lg">Button clicked: {count} times</p>
      </div>
    </main>
  )
}

