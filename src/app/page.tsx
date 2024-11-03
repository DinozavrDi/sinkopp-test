import { useFormik } from "formik";
import { MainButton } from "./components/buttons";
import { InputBase, TextAreaBase } from "./components/inputs";
import { Navigation } from "./components/navigation";
import Form from "./components/form";

export default function App() {
  return (
    <main className="min-h-screen px-5 lg:px-[380px] justify-start items-center py-10 gap-20 flex flex-col w-full">
      <div className="w-full flex flex-wrap gap-5 items-center justify-between max-w-screen-2xl">
        <h1 className="text-3xl md:text-5xl font-semibold font-inter max-w-[500px]">
          Производственные параметры фильма
        </h1>
        <MainButton>
          Отменить заполнение
        </MainButton>
      </div>
      <Form/>

    </main>
  )
}