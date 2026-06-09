"use client";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          🦷 Clínica Sorriso
        </div>

        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#inicio" className="hover:text-blue-600 transition-colors">
            Início
          </a>
          <a href="#servicos" className="hover:text-blue-600 transition-colors">
            Serviços
          </a>
          <a href="#contato" className="hover:text-blue-600 transition-colors">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}
