import React from "react";
import logoform from '../assets/logo-form.png'
import worker from '../assets/trabalhador.jpg'
import { ContactsForm } from "../components/ContactsForm";

export function Contacts(){
    return(
    <>
        <div
        style={{ backgroundImage: `url(${worker})` }}
        className="absolute h-screen w-full bg-cover bg-center bg-no-repeat">

    <div className="flex items-center justify-center h-full p-4">
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
    </div>
    </>
);
}

