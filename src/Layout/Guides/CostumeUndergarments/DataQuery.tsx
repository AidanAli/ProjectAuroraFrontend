import {client} from "@/lib/sanity.ts";
import {CostumeUnderGarmentsGuideInterface} from "@/Layout/Guides/CostumeUndergarments/Interface.ts";

async function getData(): Promise<CostumeUnderGarmentsGuideInterface[]> {
    const query = `*[_type == 'CostumeUndergarmentsGuide']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function CostumeUndergarmentsGuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}
