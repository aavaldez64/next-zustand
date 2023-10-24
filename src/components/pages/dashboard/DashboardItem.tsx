"use client"

import { useBearStore } from "@/stores";
import { BearState } from "@/stores/bears/bears.store";

interface Props {
    item: keyof BearState;
}
export default function DashboardItem({item}: Props) {
    const property = useBearStore( state => state[item] as Function);
    return (
        <p>{ property() }</p>
    )
}
