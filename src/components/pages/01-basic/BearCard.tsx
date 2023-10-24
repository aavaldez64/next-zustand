"use client"
import { WhiteCard } from "@/components"
import { useBearStore } from "@/stores";
import type { Bears } from "@/stores/bears/bears.store";

interface Props {
    title: string;
    property: Bears;
}
export const BearCard = ({title, property}: Props) => {

    const bears = useBearStore( state => state[property]);
    const increaseBears = useBearStore( state => state.increaseBears);

    return (
        <WhiteCard centered>
        <h2>{ title }</h2>

        <div className="flex flex-col md:flex-row">
            <button
                onClick={() => increaseBears(+1, property)}
            > +1</button>
            <span className="text-3xl mx-2 lg:mx-10"> { bears } </span>
            <button
                onClick={() => increaseBears(-1, property)}
            >-1</button>
        </div>

        </WhiteCard>
    )
}