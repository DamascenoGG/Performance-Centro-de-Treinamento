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
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-red-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Planos
          </h1>
          <p className="text-gray-300 text-lg">
            Escolha o melhor plano para seus objetivos
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-red-600 to-red-700 ring-2 ring-red-500 shadow-2xl'
                    : 'bg-gray-900 border border-gray-700 hover:border-red-500'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-black text-red-500 px-4 py-1 rounded-full text-sm font-bold">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <h2 className={`text-2xl font-bold mb-4 ${
                  plan.highlighted ? 'text-white' : 'text-red-500'
                }`}>
                  {plan.name}
                </h2>

                <div className={`mb-8 text-center ${
                  plan.highlighted ? 'text-white' : 'text-gray-300'
                }`}>
                  <span className="text-4xl font-bold">R$</span>
                  <span className="text-5xl font-bold">{plan.price.toFixed(2)}</span>
                  <p className={`text-sm mt-2 ${
                    plan.highlighted ? 'text-gray-100' : 'text-gray-400'
                  }`}>
                    por mês
                  </p>
                </div>

                <ul className={`space-y-3 mb-8 ${
                  plan.highlighted ? 'text-white' : 'text-gray-400'
                }`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`text-xl ${
                        plan.highlighted ? 'text-white' : 'text-red-500'
                      }`}>
                        ✓
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full font-bold transition-all ${
                  plan.highlighted
                    ? 'bg-black text-red-500 hover:bg-gray-900'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}>
                  Clique aqui para assinar
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg">
              Primeiro mês com
              <span className="text-red-500 font-bold"> 50% de desconto</span>!
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Sem contrato de longa duração • Cancelamento flexível
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
