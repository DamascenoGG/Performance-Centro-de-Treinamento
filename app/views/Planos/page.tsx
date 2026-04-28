import Link from 'next/link';

export default function Planos() {
  const plans = [
    {
      name: 'Plano Mensal',
      price: 99.99,
      features: [
        'Acesso completo à academia',
        'Treinos ilimitados',
        'Suporte básico',
        'Cancelamento a qualquer momento',
      ],
    },
    {
      name: 'Plano Família',
      price: 89.99,
      features: [
        'Até 4 membros da família',
        'Acesso completo à academia',
        'Treinos ilimitados',
        'Atendimento prioritário',
        'Programa em grupo',
      ],
      highlighted: true,
    },
    {
      name: 'Plano Empresarial',
      price: 89.99,
      features: [
        'Para grupos de 10+ pessoas',
        'Acesso completo à academia',
        'Avaliação inicial completa',
        'Programas customizados',
        'Suporte prioritário 24/7',
        'Relatórios de desempenho',
      ],
    },
  ];

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 w-full relative z-20">
      
      {/* Cabeçalho da página de Planos */}
      <div className="w-full max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] uppercase tracking-wider">
          Planos
        </h1>
        <p className="text-xl text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">
          Escolha o melhor plano para seus objetivos
        </p>
      </div>

      {/* Container Principal que segura os Cartões e o Desconto */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Grade dos 3 Cartões */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 backdrop-blur-md ${
                plan.highlighted
                  ? 'bg-red-700/90 border border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.4)] z-10 md:-mt-10 md:mb-10 py-12'
                  : 'bg-black/70 border border-gray-700 hover:border-red-500/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-black text-red-500 border border-red-500 px-6 py-1.5 rounded-full text-xs font-black shadow-lg uppercase tracking-widest">
                    Mais Popular
                  </span>
                </div>
              )}

              <h2 className={`text-2xl font-bold mb-2 text-center uppercase tracking-wide ${
                plan.highlighted ? 'text-white' : 'text-red-500'
              }`}>
                {plan.name}
              </h2>

              <div className={`mb-8 text-center border-b pb-6 ${
                plan.highlighted ? 'border-red-400/30' : 'border-gray-700/50'
              }`}>
                <span className="text-3xl font-bold text-gray-300">R$</span>
                <span className={`text-6xl font-black ${plan.highlighted ? 'text-white' : 'text-gray-100'}`}>
                  {plan.price.toFixed(2)}
                </span>
                <p className={`text-xs mt-2 uppercase tracking-widest font-semibold ${
                  plan.highlighted ? 'text-red-200' : 'text-gray-400'
                }`}>
                  por mês
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`text-xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-red-500'
                    }`}>
                      ✓
                    </span>
                    <span className={`text-sm font-medium ${
                       plan.highlighted ? 'text-white' : 'text-gray-300'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg uppercase tracking-wider ${
                plan.highlighted
                  ? 'bg-black text-white hover:bg-gray-900 hover:shadow-2xl hover:-translate-y-1'
                  : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-2xl hover:-translate-y-1'
              }`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Informação Adicional de Desconto - AGORA GARANTIDO NO CENTRO DA PÁGINA */}
        <div className="mt-16 w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-black/60 border border-gray-800/50 p-8 rounded-2xl backdrop-blur-md shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-white text-xl md:text-2xl font-medium text-center">
            Primeiro mês com
            <span className="text-red-500 font-black text-2xl md:text-3xl uppercase tracking-wider">50% Off</span>!
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm font-medium text-center">
            <span>🔓</span> Sem contrato de longa duração • Cancelamento flexível
          </div>
          
        </div>

      </div>
    </main>
  );
}