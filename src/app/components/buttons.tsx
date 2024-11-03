import { ButtonHTMLAttributes } from "react";

export function MainButton({ children, ...props }: { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <button className="py-3 px-8 border-2 border-solid border-[#121212/16%] rounded-[41px] font-helvetica text-base hover:bg-neutral-200 transition-all disabled:bg-[#EFEFEF] disabled:text-[#ACACAC] disabled:border-[#EFEFEF] text-nowrap flex justify-center items-center gap-5 w-fit active:shadow-inner active:bg-neutral-300 " {...props}>
            {children}    
        </button>
    )
}