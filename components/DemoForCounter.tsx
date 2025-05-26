"use client"
import { useState } from "react"
import Counter from "./Counter"
import { Button } from "@/components/ui/button"
import { PlusIcon, MinusIcon, RotateCcwIcon } from "lucide-react"

export default function CounterDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-6 p-8 dark:bg-neutral-900 bg-slate-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold dark:text-neutral-100 text-slate-800">Animated Counter</h2>

      <div>
        <Counter count={count} />
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-white hover:bg-slate-100 border-slate-200"
        >
          <MinusIcon className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount(0)}
          className="bg-white hover:bg-slate-100 border-slate-200"
        >
          <RotateCcwIcon className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-white hover:bg-slate-100 border-slate-200"
        >
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
