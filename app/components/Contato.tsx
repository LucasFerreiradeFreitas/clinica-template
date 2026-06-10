"use client";

import { useState } from "react";
import config from "../config";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCarregando(true);

    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const telefone = (form.elements.namedItem("telefone") as HTMLInputElement)
      .value;
    const mensagem = (
      form.elements.namedItem("mensagem") as HTMLTextAreaElement
    ).value;

    const res = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, mensagem }),
    });

    const data = await res.json();
    setCarregando(false);
    if (data.sucesso) setEnviado(true);
  }

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
                <p className="text-gray-500">{config.contato.endereco}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>
              <div>
                <h4 className="font-bold text-gray-800">Telefone</h4>
                <p className="text-gray-500">{config.contato.telefone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl">⏰</div>
              <div>
                <h4 className="font-bold text-gray-800">Horário</h4>
                <p className="text-gray-500">
                  Segunda a Sexta: {config.contato.horario_semana}
                </p>
                <p className="text-gray-500">
                  Sábado: {config.contato.horario_sabado}
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${config.contato.whatsapp}`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              <span className="text-xl">💬</span>
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-800">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-500 mt-2">
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    name="telefone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={carregando}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {carregando ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
