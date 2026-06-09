"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-3">
              🦷 Clínica Sorriso
            </div>
            <p className="text-gray-400">
              Cuidando do seu sorriso com carinho e tecnologia há mais de 10
              anos.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-blue-400 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Av. Boa Viagem, 123 - Recife, PE</li>
              <li>📞 (81) 99999-9999</li>
              <li>⏰ Seg-Sex: 8h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © 2026 Clínica Sorriso. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
