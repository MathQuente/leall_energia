import { FiPlus } from 'react-icons/fi' // Ou qualquer ícone de sua preferência

export function FloatingButton({ onClick, icon = <FiPlus /> }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 p-4 bg-[#06b3c2] text-white rounded-full shadow-lg hover:bg-[#0596a3] transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95"
      aria-label="Botão de ação flutuante"
    >
      <div className="text-2xl">{icon}</div>
    </button>
  )
}
