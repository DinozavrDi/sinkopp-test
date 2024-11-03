'use client'
import { useFormik } from "formik";
import { InputBase, OptionBase, SelectBase, TextAreaBase } from "./inputs";
import { Navigation } from "./navigation";
import * as Yup from 'yup';
import { MainButton } from "./buttons";
export interface FormValues {
    name: string;
    genre: string;
    format: string;
    nf: string;
    country: string;
    cost: string;
    description: string;
}

export default function Form() {

    const nfRegExp = /^(\d{3})-(\d{3})-(\d{3})-(\d{2})-(\d{3})$/;

    const values: FormValues = JSON.parse(localStorage.getItem('values') || '{}');

    const formik = useFormik({
        initialValues: {
            name: values.name ? values.name : '',
            genre: values.genre ? values.genre : '',
            format: values.format ? values.format : '',
            nf: values.nf ? values.nf : '',
            country: values.country ? values.country : '',
            cost: values.cost ? values.cost : '',
            description: values.description ? values.description : '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Заполните поле'),
            genre: Yup.string()
                .required('Заполните поле'),
            format: Yup.string()
                .required('Заполните поле'),
            nf: Yup.string()
                .matches(nfRegExp, 'Некорректный номер фильма')
                .required('Заполните поле'),
            country: Yup.string()
                .nullable()
                .required('Заполните поле'),  
        }),
        onSubmit: values => {
            localStorage.setItem('values', JSON.stringify(values));
        },
    });

    // Функция для форматирования ввода в реальном времени
    function formatNF(value: string) {
        const digits = value.replace(/\D/g, '');
        
        let formatted = '';
        if (digits.length > 0) formatted += digits.substring(0, 3);
        if (digits.length >= 4) formatted += '-' + digits.substring(3, 6);
        if (digits.length >= 7) formatted += '-' + digits.substring(6, 9);
        if (digits.length >= 10) formatted += '-' + digits.substring(9, 11);
        if (digits.length >= 12) formatted += '-' + digits.substring(11, 14);

        return formatted;
}

    
    return (
            <form onSubmit={formik.handleSubmit} className="max-h-[77%] flex flex-wrap gap-y-10 w-full justify-between max-w-screen-2xl">
                <div className="flex flex-col gap-10 w-full md:w-fit ">
                    <InputBase 
                        error={formik.errors.name}
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        name="name"
                        label="Название проекта" 
                        placeholder="Название"
                    />
                    <SelectBase 
                        label="Жанр"
                        value={formik.values.genre}
                        name="genre"
                        onChange={formik.handleChange}
                    >
                        <OptionBase value={'comedy'}>
                            Комедия
                        </OptionBase>
                        <OptionBase value={'dramm'}>
                            Драмма
                        </OptionBase>
                        <OptionBase value={'parody'}>
                            Пародия
                        </OptionBase>
                        <OptionBase value={'tragy'}>
                            Трагедия
                        </OptionBase>
                        <OptionBase value={'action'}>
                            Экшен
                        </OptionBase>
                    </SelectBase>
                    <SelectBase 
                        label="Формат"
                        value={formik.values.format}
                        name="format"
                        onChange={formik.handleChange}
                    >
                        <OptionBase value={'online'}>
                            Онлайн-платформа
                        </OptionBase>
                        <OptionBase value={'big-screen'}>
                            Большой экран
                        </OptionBase>
                        <OptionBase value={'internet'}>
                            Интернет
                        </OptionBase>
                    </SelectBase>
                    <InputBase 
                        error={formik.errors.nf}
                        onChange={(e) => formik.setFieldValue('nf', formatNF(e.target.value))} 
                        value={formik.values.nf} 
                        name="nf"
                        label="№ УНФ или отсутсвует"
                        placeholder="890-000-000-00-000"
                    />
                </div>
                <div className="flex flex-col gap-10 w-full md:w-fit ">
                    <SelectBase 
                        label="Страна-производитель (копродукция)"
                        value={formik.values.country}
                        name="country"
                        onChange={formik.handleChange}
                    >
                        <OptionBase>
                            Россия
                        </OptionBase>
                        <OptionBase>
                            Казахстан
                        </OptionBase>
                        <OptionBase>
                            Беларусь
                        </OptionBase>
                    </SelectBase>
                    <InputBase 
                        error={formik.errors.cost}
                        onChange={formik.handleChange} 
                        value={formik.values.cost} 
                        name="cost"
                        label="Свединья о сметной стоимости производства фильма на территории Нижегородской области, если есть" 
                        placeholder="Сметная стоимость"
                    />
                    <TextAreaBase 
                        onChange={formik.handleChange} 
                        value={formik.values.description} 
                        name="description"
                        label="Синопсис" 
                        placeholder="Напишите краткое изложение"
                    />
                </div>
                <Navigation isValid={formik.isValid}/>
            </form>
    )
}