import React from "react";
import generateStaticParams from "@/components/Todays"

export default function Page({ params }: { params: { slug: string } }) {
    return <>
        My Post: {params.slug}
    </>
}