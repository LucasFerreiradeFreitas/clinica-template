"use client";

const servicos = [
  {
    icone: "🦷",
    titulo: "Limpeza e Prevenção",
    descricao:
      "Mantenha sua saúde bucal em dia com nossas limpezas profissionais e consultas preventivas.",
  },
  {
    icone: "✨",
    titulo: "Clareamento Dental",
    descricao:
      "Sorria com mais confiança! Nosso clareamento é seguro, rápido e com resultados visíveis.",
  },
  {
    icone: "😬",
    titulo: "Ortodontia",
    descricao:
      "Aparelhos tradicionais ou invisíveis para alinhar seu sorriso com conforto e eficiência.",
  },
  {
    icone: "😁",
    titulo: "Implantes Dentários",
    descricao:
      "Recupere seu sorriso com implantes de alta qualidade e tecnologia de ponta.",
  },
  {
    icone: "👶",
    titulo: "Odontopediatria",
    descricao:
      "Cuidado especializado e carinhoso para os pequenos, tornando a visita ao dentista divertida.",
  },
  {
    icone: "🚨",
    titulo: "Urgência 24h",
    descricao:
      "Dor de dente não espera. Atendimento de emergência disponível quando você mais precisar.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
            O que oferecemos
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Tratamentos completos para toda a família, com tecnologia moderna e
            profissionais experientes.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{servico.icone}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {servico.titulo}
              </h3>
              <p className="text-gray-500">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
