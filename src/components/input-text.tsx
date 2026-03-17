import { cva, type VariantProps, cx } from "class-variance-authority";
import type React from "react";
import { TextVariants } from "./Text";


const inputTextVariant = cva(`
    border-b border-solid border-gray-200 focus:border-pink-base
    bg-transparent outline-none
`, {
    variants: {
        size: {
            md: "pb-2 px-2"
        },
        disabled: {
            true: "pointer-events-none"//apenas impedir do user usar o campo 
        }
    },
    defaultVariants: {
        size: "md",
        disabled: false
    }
})

interface InputTextProps 
    extends Omit<React.ComponentProps<"input">, 'size' | 'disabled'>,
    VariantProps<typeof inputTextVariant>{}

export default function InputText({
    size,
    disabled,
    className,
    ...props
}: InputTextProps){
    return <input 
        className={cx(inputTextVariant({size, disabled}), TextVariants(), className)} //cx permite condensar varios inputs em uma string
        {...props}
    />
}