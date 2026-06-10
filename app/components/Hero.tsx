"use client";

import config from "../config";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
            ✨ Mais de {config.clinica.experiencia} anos de experiência
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mt-6 leading-tight">
            {config.clinica.slogan}
          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-lg">
            {config.clinica.descricao}
          </p>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#contato"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-sm">
            <div className="text-8xl mb-4">🦷</div>
            <h3 className="text-2xl font-bold text-gray-800">
              {config.clinica.nome}
            </h3>
            <p className="text-gray-500 mt-2">
              Cuidando do seu sorriso há mais de {config.clinica.experiencia}{" "}
              anos
            </p>
            <div className="flex justify-center gap-6 mt-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  {config.clinica.pacientes}+
                </div>
                <div className="text-sm text-gray-500">Pacientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  {config.clinica.experiencia}+
                </div>
                <div className="text-sm text-gray-500">Anos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5⭐</div>
                <div className="text-sm text-gray-500">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
