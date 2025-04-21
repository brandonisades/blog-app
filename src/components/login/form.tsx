"use client"

import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import * as yup from "yup"

const LoginSchema = yup.object().shape({
    login : yup.string().required("email is required").email("invalid email format"),
    password: yup.string().required("password is required").min(6, "min 6 character"),
});

interface ILoginForm {
    login: string;
    password: string;
}

export default function ILoginForm(){
    const initialValues: ILoginForm = {
        login: "",
        password: "",
    };

    const onLogin = async (
        value: ILoginForm, 
        action: FormikHelpers<ILoginForm>
    ) => {
        try {
            const { data } = await axios.post("/users/login", value);
            await signIn("credentials" ,{
                redirectTo: "/",
                objectId: data.objectId,
                name: data.name,
                email: data.email,
                userToken: data['user-token'],
            });
            toast.success("SELAMAT ANDA TELAH LOGIN")
            action.resetForm();
        } catch (err) {
            console.log(err);
            action.setSubmitting(false);
            if(err instanceof AxiosError){
            toast.error(err.response?.data?.message || "LOGIN FAILED"); 
            }
        }

    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values, action) =>{
                 onLogin(values, action);
                }}
            >
                {(props: FormikProps<ILoginForm>) => {
                    const { touched, errors, isSubmitting } = props;
                    return (
                        <Form>
                            <div className="flex flex-col">
                            <label htmlFor="email" className="text-md">
                                Email
                            </label>
                            <Field
                            name="login" 
                            type="email" 
                            className="mt-2 mb-1 p-2 border border-gray-600 rounded-md"
                            />
                            {(touched.login && errors.login) &&(
                                <div className="text-red-500 text-[12px]">{errors.login}</div>
                            )}
                            </div>
                            
                            <div className="flex flex-col">
                            <label htmlFor="password" className="text-md">
                                Password
                            </label>
                            <Field
                            name="password" 
                            type="password" 
                            className="mt-2 mb-1 p-2 border border-gray-600 rounded-md"
                            />
                            {(touched.password && errors.password) &&(
                                <div className="text-red-500 text-[12px]">{errors.password}</div>
                            )}
                            </div>

                        <div className="mt-12">
                            <button 

                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full py-1 px-2 bg-gray-600 text-white text-sm rounded-m disabled:bg-gray-400">

                                {isSubmitting ? "Patient ..." : "Login"}
                                </button>
                        </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}