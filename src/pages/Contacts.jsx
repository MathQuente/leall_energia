import { ContactsForm } from '../components/ContactsForm'
import { Container } from '../components/Container' // Importe o Container

export function Contacts() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20">
      <Container className="flex flex-col items-center lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1196bb] to-[#21256b]">
            Como nos encontrar
          </h2>

          <address className="not-italic text-gray-700">
            R. Antônio Pereira do Nascimento, 160 - Luzardo Viana, Maracanaú -
            CE, 61910-025
          </address>

          <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Localização no mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6764.204806778514!2d-38.6434683!3d-3.8587393000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c753b61c3c0bc7%3A0xa2f8855c9fb06fb1!2sCondom%C3%ADnio%20Jardins%20das%20Flores%20-%20R.%20Ant%C3%B4nio%20Pereira%20do%20Nascimento%2C%20160%20-%20Luzardo%20Viana%2C%20Maracana%C3%BA%20-%20CE%2C%2061910-025!5e1!3m2!1spt-BR!2sbr!4v1740253705954!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <ContactsForm />
      </Container>
    </section>
  )
}
