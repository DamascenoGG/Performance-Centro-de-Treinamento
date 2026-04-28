import Image from 'next/image';

export default function Sobre() {
  return (
    <main className="flex-1 flex flex-col items-center w-full relative z-20">
      
      {/* Hero Section - Título */}
      <section className="w-full pt-32 md:pt-44 pb-12 bg-transparent relative flex flex-col items-center justify-center text-center">
        <div className="relative z-20 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter drop-shadow-2xl">
            Sobre a
            <span className="block text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">Academia</span>
          </h1>
        </div>
      </section>

      {/* Seção Principal de Conteúdo - Imagem e Texto lado a lado */}
      <section className="w-full pb-20 px-6 relative z-20 flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Container da Foto (Esquerda) */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <Image
              src="/academia.png"
              alt="Performance Centro de Treinamento"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Área de Texto (Direita) */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
            <p className="text-gray-100 text-lg md:text-xl lg:text-[22px] font-medium leading-snug max-w-lg drop-shadow-md">
              Academia localizada em Coqueiral-MG, com foco em musculação completa e atendimento personalizado.
              <br /><br />
              O grande diferencial da academia é o atendimento dos profissionais, reconhecidos na cidade como referência em qualidade, atenção e suporte aos alunos.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}