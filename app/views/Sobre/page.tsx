export default function Sobre() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
            Sobre a
            <span className="block text-red-500 mt-2">Academia</span>
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500 opacity-5 rounded-full blur-3xl" />
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg overflow-hidden shadow-2xl h-80 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏋️</div>
                <p className="text-xl font-bold">Performance Academia</p>
              </div>
            </div>

            {/* Text */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 text-red-500">
                Nossa História
              </h2>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">Academia localizada em Coqueiros-MG com:</strong>
                </p>

                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✓</span>
                    <span>Equipamentos de última geração e modernos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✓</span>
                    <span>Ambiente acolhedor e profissional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✓</span>
                    <span>Atendimento personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✓</span>
                    <span>Treinadores experientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✓</span>
                    <span>Programas personalizados para cada objetivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-1">✓</span>
                    <span>Suporte aos alunos</span>
                  </li>
                </ul>

                <p className="text-lg pt-4 text-red-400 font-semibold">
                  O grande diferencial da academia é o atendimento e suporte aos alunos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
