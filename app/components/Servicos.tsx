"use client";

import { motion } from "framer-motion";
import config from "../config";

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.servicos.map((servico, index) => (
            <motion.div
              key={servico.titulo}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{servico.icone}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {servico.titulo}
              </h3>
              <p className="text-gray-500">{servico.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
