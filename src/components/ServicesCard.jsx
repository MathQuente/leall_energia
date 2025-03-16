
export function ServicesCard(prop){
    return (
    <div className="max-w-md mx-auto py-8 px-6 bg-gray-100 rounded-lg text-center">
        <div className="flex flex-col items-center">
            <img src={prop.img} alt="Imagem" className="rounded-lg max-w-40 mb-4" />
            <h1 className="text-2xl font-bold text-gray-950">{prop.title}</h1>
            <h2 className="text-xl text-gray-600 mt-2">{prop.subtitle}</h2>
        </div>
    </div>
    );
}
