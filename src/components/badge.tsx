import type React from "react";
import Text from "./Text";
import { cva, cx, type VariantProps } from "class-variance-authority";
import Skeleton from "./skeleton";

const badgeVariants = cva("inline-flex items-center rounded-full", {
    variants: {
        variant: {
            none: "",
            primary: "bg-green-light",
            secondary: "bg-pink-light"
        },
        size: {
            sm: "py-0.5 px-2"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
});

const badgeTextVariants = cva("", {
    variants: {
        variant: {
            none: "",
            primary: "text-green-dark",
            secondary: "text-pink-dark"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

const badgeSkeletonVariants = cva('', {
    variants: {
        size: {
            sm: "w-5 h-5"
        }
    },
    defaultVariants: {
        size: "sm"
    }
})

interface BadgeProps 
    extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
        loading?: boolean;
}

export default function Badge({
    variant,
    size,
    loading,
    className,
    children,
    ...props
}: BadgeProps){
    if (loading) {
        return <Skeleton 
            rounded="full" 
            className={cx(
                badgeVariants({variant: "none"}),
                badgeSkeletonVariants({size}),
                className
            )} 
        />
    }

    return (
        <div className={badgeVariants({variant, size, className})} {...props}>
            <Text 
                variant="body-sm-bold" 
                className={badgeTextVariants({variant})}
            >{children}</Text>
        </div>
    )
}