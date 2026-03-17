import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import Text from "./Text";
import Skeleton from "./skeleton";
import SpinnerIcon from "../assets/icons/spinner.svg?react";

const ButtonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
`, {
    variants: {
        variant: {
            primary: "bg-gray-200 hover:bg-pink-light"
        },
        size: {
            md: "h-14 py-4 px-5"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        },
        handling: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false,
        handling: false
    }
})

const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            none: "",
            primary: "fill-pink-base"
        },
        size: {
            md: "w-5 h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    }
})

const buttonTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-gray-400",
        }
    },
    defaultVariants: {
        variant: "primary",
    }
})

interface ButtonProps
    extends Omit<React.ComponentProps<"button">, 'size' | 'disabled'>, //devido a conflitos do size e disabled do button e do cva, foi omitido
    VariantProps<typeof ButtonVariants>{
    icon?: React.ComponentProps<typeof Icon>["svg"];
    loading?: boolean;
    handling?: boolean;
}

export default function Button ({
    children,
    variant,
    size,
    disabled,
    loading,
    className,
    icon,
    handling,
    ...props
}: ButtonProps) {
    if (loading) {
        <Skeleton 
            className={buttonIconVariants({variant: "none", size, className})}
        />
    }

    return <button className={ButtonVariants({variant, size, disabled, className, handling})} {...props}>
        {icon && 
            <Icon 
                svg={handling ? SpinnerIcon : icon}
                animate={handling}
                className={buttonIconVariants({variant, size})}
            />
        }
        <Text variant="body-md-bold" className={buttonTextVariants({variant})}
        >{children}</Text>
    </button>
}