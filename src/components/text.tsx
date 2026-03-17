import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// CVA ajuda a criar variações de forma mais legível, aatribuindo uma palavra à um conjunto de variações CSS
export const TextVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "body-sm-bold" : "text-sm leading-5 font-semibold",
            "body-md" : "text-base leading-6 font-normal",
            "body-md-bold" : "text-base leading-6 font-semibold",
        }
    },
    defaultVariants: {
        variant: "body-md"
    }
})

interface TextProps extends VariantProps<typeof TextVariants> {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;//Cobre vários tipos de elementos renderizável 
}

export default function Text ({ as = "span", variant, children, className, ...props }: TextProps) {
    return React.createElement(
        as,
        {
            className: TextVariants({variant, className}),
            ...props
        },
        children
    )
}