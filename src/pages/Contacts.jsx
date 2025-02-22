import React from "react";
import logoform from '../assets/logo-form.png'
import { ContactsForm } from "../components/ContactsForm";

export function Contacts(){
    return(
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full ">
            <h2 className="text-2xl font-semibold text-gray-700 text-left mb-4">Fale Conosco</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ContactsForm/>
                <div >
                    <img src={logoform} alt="" />
                </div>
            </div>
           
        </div>
    </div>
    </>
);
}

