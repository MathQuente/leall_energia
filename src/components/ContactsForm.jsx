
export function ContactsForm(){
    return(
        <>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Empresa</label>
                    <input
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Digite sua Empresa"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                        type="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <input
                        type="tel"
                        pattern="\(\d{2}\) \d{4,5}-\d{4}"
                        maxLength="15"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="(DDD) 99999-9999"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea
                        type="text"
                        className="mt-1 p-2 w-full border border-gray-300 shadow-sm rounded-md resize-none h-40 max-h-60"
                        placeholder="Escreva sua mensagem..."
                    />
                </div>
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
}