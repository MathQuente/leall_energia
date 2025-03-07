
export function ServicesGrid(prop){
    return (
        <div className="bg-white container mx-auto py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2 items-center">
            <div>
                <h1 className="flex text-3xl font-bold text-gray-950 b-4">{prop.title}</h1>
                <h2 className="flex text-xl text-gray-600 mt-2">{prop.subtitle}</h2>
            </div>
    
            <div className="flex aspect-1/1 object-cover md:justify-start">
                <img src={prop.img} alt="Imagem lateral" className="rounded-lg shadow-lg"/>
            </div>
            </div>
        </div>
    );
}
