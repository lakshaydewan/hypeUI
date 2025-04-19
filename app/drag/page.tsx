'use client'
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";


const initialItems = ["📱 Review App Design", "🔍 User Research", "💻 Code Implementation", "🧪 Testing & QA"]

export default function App() {
    
    const [items, setItems] = useState(initialItems);

    return (
        <div className="w-screen h-screen bg-neutral-100 flex items-center justify-center">
            <div className="p-5 md:px-9 rounded-md bg-white shadow-xl w-fit h-fit">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Project Workflow</h2>
            <p className="text-sm text-slate-500 mb-6">Drag to reorder project phases</p>
            <Reorder.Group axis="y" onReorder={setItems} values={items}>
                {items.map((item) => (
                    <Item key={item} item={item} />
                ))}
            </Reorder.Group>
            </div>
        </div>
    );
}

function Item({ item }: { item: string }) {

    const [isDragging, setIsDragging] = useState(false);

    return (
        <Reorder.Item
            className={`bg-white text-black border border-gray-300 ${isDragging ? "shadow-xl" : ""} px-6 rounded-lg shadow-md p-4 m-2 cursor-pointer`}
            id={item}
            value={item}
            onDrag={()=> {
                setIsDragging(true);
            }}
            onDragEnd={() => {
                setIsDragging(false);
            }}
        >
            <div className="px-10">{item}</div>
        </Reorder.Item>
    );
}