"use client";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
            Fale conosco
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Entre em Contato
          </h2>
          <p className="text-gray-500 mt-4">
            Agende sua consulta ou tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📍</div>
              <div>
                <h4 className="font-bold text-gray-800">Endereço</h4>
                <p className="text-gray-500">
                  Av. Boa Viagem, 123 - Boa Viagem, Recife - PE
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <h4 className="font-bold text-gray-800">Telefone</h4>
                <p className="text-gray-500">(81) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">⏰</div>
              <div>
                <h4 className="font-bold text-gray-800">Horário</h4>
                <p className="text-gray-500">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-500">Sábado: 8h às 12h</p>
              </div>
            </div>
            <a
              href="https://wa.me/5581999999999"
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <span className="text-xl">💬</span>
              Falar pelo WhatsApp
            </a>
          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-md"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3!2d-34.8983!3d-8.1149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f1b4b4b4b4b5%3A0x1!2sAv.%20Boa%20Viagem%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
