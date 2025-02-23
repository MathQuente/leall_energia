import React from "react";
import logoform from '../assets/logo-form.png'
import worker from '../assets/trabalhador.jpg'
import { ContactsForm } from "../components/ContactsForm";

export function Contacts(){
    return(
    <>
        <div
        style={{ backgroundImage: `url(${worker})` }}
        className="absolute h-screen bg-cover object-cover w-full bg-center bg-no-repeat">

            <div className="items-center justify-center h-full p-4 overflow-auto md:flex">
                <div className=" bg-white shadow-lg rounded-2xl p-6 max-w-5xl w-full">
                    <h2 className="text-2xl font-semibold text-gray-700 text-left mb-4">Fale Conosco</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ContactsForm/>
                        <div >
                            <img src={logoform} alt="" />
                        </div>
                    </div>

                    <hr className="text-gray-400 font-semibold mt-3" />
                    
                    <div>
                    <h2 className="text-center text-3xl font-semibold text-gray-700 b-4">Nós estamos aqui!</h2>
                    <p className="text-center block text-sm font-medium text-gray-700">R. Antônio Pereira do Nascimento, 160 - Luzardo Viana, Maracanaú - CE, 61910-025</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6764.204806778514!2d-38.6434683!3d-3.8587393000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753b61c3c0bc7%3A0xa2f8855c9fb06fb1!2sCondom%C3%ADnio%20Jardins%20das%20Flores%20-%20R.%20Ant%C3%B4nio%20Pereira%20do%20Nascimento%2C%20160%20-%20Luzardo%20Viana%2C%20Maracana%C3%BA%20-%20CE%2C%2061910-025!5e1!3m2!1spt-BR!2sbr!4v1740253705954!5m2!1spt-BR!2sbr" 
                        className="border-0 max-w-full w-full min-h-auto h-screen/3 md:h-96 rounded-2xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
    </div>
    </>
);
}
