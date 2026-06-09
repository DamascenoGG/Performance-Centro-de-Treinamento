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
              className={`relative rounded-2xl p-6 transition-all duration-500 transform hover:scale-110 backdrop-blur-md flex flex-col h-full justify-between border-2 shadow-[0_0_30px_rgba(0,0,0,0.4),0_0_60px_rgba(0,0,0,0.2)]`}
              style={{ backgroundColor: '#121212', borderColor: '#121212' }}
            >
              <div>
                <h2 className={`text-xl font-black mb-3 text-center uppercase tracking-widest text-white`}>
                  {plan.name}
                </h2>

                <div className={`mb-6 text-center border-b-2 pb-4 border-gray-400/40`}>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-black text-gray-300">R$</span>
                    <span className={`text-6xl font-black text-white`}>
                      {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 uppercase tracking-widest font-bold text-red-100`}>
                    por mês
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`text-lg font-black flex-shrink-0 text-white`}>
                        ✓
                      </span>
                      <span className={`text-xs font-semibold leading-snug text-white`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 px-6 rounded-full font-black text-base transition-all duration-300 uppercase tracking-wider group relative overflow-hidden bg-white text-red-700 border-4 border-black shadow-[0_4px_0_rgba(0,0,0,0.8)] hover:shadow-[0_2px_0_rgba(0,0,0,0.8)] hover:translate-y-1`}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Clique aqui
                  <span className="text-xl">→</span>
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}