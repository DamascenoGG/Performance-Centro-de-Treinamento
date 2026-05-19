import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      {/* Removi o gradiente vermelho e adicionei bg-transparent */}
      <section className="min-h-screen bg-transparent relative overflow-hidden flex items-center justify-center">
        
        {/* Background overlay (mantido para o texto não sumir na foto) */}
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
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-5 px-16 rounded-full text-xl transition-all transform hover:scale-110 shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] mb-8 uppercase tracking-widest"
          >
            Clique Aqui
          </Link>

          <p className="text-gray-200 text-sm font-semibold uppercase tracking-widest">
            <span className="text-red-400 font-black text-lg">→</span> Agendar aula gratuita
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500 opacity-5 rounded-full blur-3xl" />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/80 text-center relative z-20">
        <p className="text-gray-400 text-sm">
          Conheça nossa estrutura e transforme sua vida. Comece agora!
        </p>
      </section>
    </main>
  );
}