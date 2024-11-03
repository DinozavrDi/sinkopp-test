import { InputHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function InputBase({ label, error, ...props }: { label: string, error: string | undefined } & InputHTMLAttributes<HTMLInputElement>): JSX.Element {
    return (
        <div className="group flex flex-col w-full md:w-fit gap-3 relative">
            <label className="font-helvetica text-[15px] text-neutral-[#1D1D1D] max-w-[498px] " htmlFor={label}>{label}</label>
            <input id={label} className={`border-[1px] border-solid border-black/19 rounded-[6px] ${error ? 'border-[#BE1F2A]' : ''} px-5 py-4 w-full md:w-[498px] font-helvetica text-[15px] text-[#1D1D1D] hover:border-neutral-300 transition-all hover:shadow h-[54px]`} {...props} />
            
            <div className={`absolute right-5 top-[50px] ${ error ? 'block' : 'hidden'}`}>
                <p className="text-[#BE1F2A] font-helvetica text-[14px]">{error}</p>
            </div>
        </div>
    )
}

export function TextAreaBase({ label, ...props }: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element {
    return (
        <div className="flex flex-col w-full md:w-fit gap-3">
            <label className="font-helvetica text-[15px] text-neutral-[#1D1D1D] " htmlFor={label}>{label}</label>
            <textarea id={label} className="border-[1px] border-solid border-black/19 rounded-[6px] invalid:border-[#BE1F2A] px-5 py-4 w-full md:w-[498px] font-helvetica text-[15px] text-[#1D1D1D] resize-none min-h-[157px] hover:border-neutral-300 transition-all hover:shadow" {...props} />
        </div>
    )
}

export function SelectBase({ children, label, ...props }: { children: React.ReactNode, label: string } & SelectHTMLAttributes<HTMLSelectElement>): JSX.Element {
    return (
        <div className="flex flex-col w-full md:w-fit gap-3">
            <label className="font-helvetica text-[15px] text-neutral-[#1D1D1D] " htmlFor={label}>{label}</label>
            <select {...props} className="border-[1px] border-solid border-black/19 rounded-[6px] invalid:border-[#BE1F2A] px-5 py-4 w-full md:w-[498px] font-helvetica text-[15px] text-[#1D1D1D] hover:border-neutral-300 transition-all hover:shadow">
                {children}
            </select>
        </div>

    )
}

export function OptionBase({ children, ...props }: { children: React.ReactNode } & OptionHTMLAttributes<HTMLOptionElement>): JSX.Element {
    return (
        <option {...props}>
            {children}
        </option>
    )
}