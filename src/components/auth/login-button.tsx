"use client"

import { useRouter } from "next/navigation"

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild,
} : LoginButtonProps) => {

    // click
    const onClick = () => {
        console.log("Login clicked! hhahahah")
    }

    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}