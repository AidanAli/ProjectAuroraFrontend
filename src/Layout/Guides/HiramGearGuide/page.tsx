import {FlipWords} from "@/components/ui/flip_words.tsx";

export const  HiramGearGuide= () => {
    const words = ["Guides", "Tutorials", "Calculations", "Translations"];

    return (
        <div>
            Welcome to the Hiram Gear Guide
            <FlipWords words={words} />

        </div>


    )
}