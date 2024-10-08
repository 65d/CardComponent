"use client";
import React, { useState } from "react";

const ProductCardSwitch = () => {
    const [selected, setSelected] = useState<"carabine" | "springel">("carabine");
    return (
        <div className="flex border-2 border-[#C2A373] justify-center w-40 mt-2">
            <div className={`w-1/2 cursor-pointer text-center p-1.5 hover:brightness-90 active:scale-95 transition-all duration-300 ${selected === "carabine" ? "bg-[#C2A373] text-white" : "bg-white"}`} onClick={() => setSelected("carabine")}>
                Carabine
            </div>
            <div className={`w-1/2 cursor-pointer text-center p-1.5 hover:brightness-90 active:scale-95 transition-all duration-300 ${selected === "springel" ? "bg-[#C2A373] text-white" : "bg-white"}`} onClick={() => setSelected("springel")}>
                Springel
            </div>
        </div>
    );
};

export default ProductCardSwitch;
