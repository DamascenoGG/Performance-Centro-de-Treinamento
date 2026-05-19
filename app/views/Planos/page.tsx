import Link from 'next/link';

export default function Planos() {
  const plans = [
    {
      name: 'Plano Mensal',
      price: 105.00,
      features: [
        'Acesso completo à academia',
        'Treinos ilimitados',
        'Suporte básico',
        'Cancelamento a qualquer momento',
      ],
    },
    {
      name: 'Plano Semestral',
      price: 99.99,
      features: [
        'Acesso completo à academia',
        'Treinos ilimitados',
        'Suporte básico',
        'Cancelamento a qualquer momento',
        'Valor total 599,94 (economize R$ 100,06!)',
      ],
      highlighted: true,
    },
    {
      name: 'Plano Trimestral',
      price: 100.00,
      features: [
   'Acesso completo à academia',
        'Treinos ilimitados',
        'Suporte básico',
        'Cancelamento a qualquer momento',
        'Valor total 300,00 (economize R$ 15,00!)',
      ],
    },
  ];

  return (
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 w-full relative z-20">
      
      {/* Cabeçalho da página de Planos */}
      <div className="w-full max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] uppercase tracking-wider">
          Planos
        </h1>
        <p className="text-xl text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">
          Escolha o melhor plano para seus objetivos
        </p>
      </div>

      {/* Container Principal - Centralizado */}
      <div className="w-full flex flex-col items-center justify-center">
        
        {/* Grade dos 3 Cartões - Centralizada */}
        <div className="grid md:grid-cols-3 gap-6 items-center justify-center max-w-6xl mx-auto w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-500 transform hover:scale-110 backdrop-blur-md flex flex-col h-full justify-between ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-red-600 to-red-800 border-2 border-red-400 shadow-[0_0_50px_rgba(220,38,38,0.8),0_0_100px_rgba(220,38,38,0.4)] z-10 md:scale-100'
                  : 'bg-gradient-to-br from-black/80 to-black/60 border-2 border-red-600/90 hover:border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.4),0_0_60px_rgba(220,38,38,0.2)]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-black to-red-900 text-red-300 border-2 border-red-500 px-8 py-2 rounded-full text-xs font-black shadow-lg uppercase tracking-widest">
                    ⭐ Mais Popular
                  </span>
                </div>
              )}

              <div>
                <h2 className={`text-xl font-black mb-3 text-center uppercase tracking-widest ${
                  plan.highlighted ? 'text-white' : 'text-red-500'
                }`}>
                  {plan.name}
                </h2>

                <div className={`mb-6 text-center border-b-2 pb-4 ${
                  plan.highlighted ? 'border-red-300/40' : 'border-red-500/40'
                }`}>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-black text-red-300">R$</span>
                    <span className={`text-6xl font-black ${plan.highlighted ? 'text-white' : 'text-red-400'}`}>
                      {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 uppercase tracking-widest font-bold ${
                    plan.highlighted ? 'text-red-100' : 'text-red-400'
                  }`}>
                    por mês
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`text-lg font-black flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-red-500'
                      }`}>
                        ✓
                      </span>
                      <span className={`text-xs font-semibold leading-snug ${
                         plan.highlighted ? 'text-white' : 'text-gray-300'
                      }`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 px-4 rounded-xl font-black text-sm transition-all duration-300 uppercase tracking-wider group relative overflow-hidden ${
                plan.highlighted
                  ? 'bg-gradient-to-r from-white to-gray-100 text-red-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-2'
                  : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-2 border border-red-500'
              }`}>
                <span className="relative z-10 flex items-center justify-center gap-1">
                  Clique aqui
                  <span className="text-lg">→</span>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Informação Adicional de Desconto - Centralizada */}
        <div className="mt-16 w-full max-w-2xl mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-black/70 to-black/60 border-2 border-red-600/60 p-8 rounded-2xl backdrop-blur-md shadow-[0_0_40px_rgba(220,38,38,0.3)]">
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-white text-lg md:text-xl font-bold text-center">
            Primeiro mês com
            <span className="text-red-400 font-black text-xl md:text-2xl uppercase tracking-wider">50% OFF</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-red-300 text-xs font-semibold text-center">
            <span className="text-lg">🔓</span> 
            <span>Sem contrato de longa duração • Cancelamento flexível</span>
          </div>
          
        </div>

      </div>
    </main>
  );
}