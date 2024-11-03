import { ArrowForward } from "@mui/icons-material"
import { MainButton } from "./buttons"
import { FormValues } from "./form"
import { FormikConfig } from "formik"
import { ValidationError } from "yup"

export function Navigation({isValid}: {isValid: boolean}) {
    return (
        <nav className="grid grid-cols-1 2xl:grid-cols-3  gap-1 items-center  w-full max-w-screen-2xl  ">
            <div className="flex 2xl:col-start-2 gap-1 w-full justify-center">
                <NavigationItem isCurrentPage> 1 </NavigationItem>
                <NavigationItem> 2 </NavigationItem>
                <NavigationItem> ... </NavigationItem>
                <NavigationItem> 4 </NavigationItem>
                <NavigationItem> <ArrowForward/> </NavigationItem>
            </div>

            <div className="flex justify-center 2xl:justify-end">
                <MainButton disabled={!isValid} type="submit" >
                    Следующий шаг
                    <ArrowForward/>
                </MainButton>
            </div>

        </nav>
    )
}

function NavigationItem({ children, isCurrentPage }: { children: React.ReactNode, isCurrentPage?: boolean }) {
    return (
        <button className={`w-10 h-10 flex justify-center items-center rounded-full ${isCurrentPage ? 'border-[#000000/25] text-[#000000]' : ' border-none'}  border-solid border-[1px] font-inter text-[14px] hover:bg-neutral-200 active:shadow-inner active:bg-neutral-300 transition-all`}>
            {children}
        </button>
    )
}