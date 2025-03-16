export function ServicesCard({ title, subtitle, img, imgAlt }) {
  return (
    <div className="max-w-md mx-auto py-8 px-6 bg-gray-100 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <img
          src={img}
          alt={imgAlt || 'Imagem'}
          className="rounded-lg max-w-40 mb-4 object-contain"
        />
        <h3 className="text-2xl font-bold text-gray-950">{title}</h3>
        <p className="text-xl text-gray-600 mt-2">{subtitle}</p>
      </div>
    </div>
  )
}
