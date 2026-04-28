import Link from 'next/link';

export default function TelaInicial() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden flex items-center justify-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            TRANSFORME SEU
            <span className="block text-red-500 mt-2">DESEMPENHO</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            A academia moderna para quem busca resultados reais. Equipamentos de ponta, ambiente acolhedor e atendimento personalizado.
          </p>

          <Link
            href="/views/Planos"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
          >
            CLIQUE AQUI
          </Link>

          <p className="text-gray-400 text-sm">
            <span className="text-red-400">→</span> Agendar aula gratuita
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500 opacity-5 rounded-full blur-3xl" />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-center">
        <p className="text-gray-400 text-sm">
          Conheça nossa estrutura e transforme sua vida. Comece agora!
        </p>
      </section>
    </main>
  );
}
