'use client';

export default function Contato() {
  return (
    // Transformamos o main em um container flex que centraliza o conteúdo verticalmente e horizontalmente
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 w-full relative z-20 bg-transparent">
      
      {/* Cabeçalho da página de Contato - Centralizado e Centralizado */}
      <div className="w-full max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] uppercase tracking-wider">
          Contato:
        </h1>
        <h2 className="text-4xl md:text-5xl font-black text-red-500 uppercase tracking-widest drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
          Localização:
        </h2>
      </div>

      {/* Container Principal que segura a grade de botões e mapa */}
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Grade de 2 Colunas (50/50) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: Botões de Contato - Centralizados na coluna */}
          <div className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-10">
            
            {/* Instagram Button - Oval, Vermelho, Brilhante */}
            <a
                href="https://www.instagram.com/aperformancect/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm flex items-center justify-center gap-4 py-6 px-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 hover:shadow-[0_0_45px_rgba(220,38,38,0.7)]"
              >
                {/* Ícone vetorial do Instagram */}
                <svg className="w-10 h-10 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069-1.646-.069-4.849s.012-3.584.069-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-white font-bold text-2xl tracking-tighter drop-shadow-md">@aperformancect</span>
            </a>

            {/* WhatsApp Button - Oval, Vermelho, Brilhante */}
            <a
                href="https://api.whatsapp.com/send/?phone=553598632437&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm flex items-center justify-center gap-4 py-6 px-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 hover:shadow-[0_0_45px_rgba(220,38,38,0.7)]"
              >
                {/* Ícone vetorial do WhatsApp */}
                <svg className="w-10 h-10 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.887.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.44-9.89 9.889-.001 2.224.604 3.738 1.688 5.484l-1.108 4.047 4.103-1.077c-.121-.077-.189-.133-.213-.156z"/>
                </svg>
                <span className="text-white font-bold text-2xl tracking-tighter drop-shadow-md">WhatsApp</span>
            </a>

          </div>

          {/* LADO DIREITO: Seção de Localização - Centralizada na coluna */}
          <div className="flex flex-col items-center justify-center h-full space-y-6">
              
            {/* Map Box - Estilizado com glassmorphism e brilho sutil */}
            <div className="w-full max-w-2xl bg-black/70 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.3)] h-96 border border-gray-800 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1490.643355474704!2d-45.48056159518177!3d-21.18958744111307!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4h16!3m3!1m2!1s0x94b46571556817b1%3A0xe726487e411b90c1!2sR.%20Matias%20Borges%2C%20139%20-%20Centro%2C%20Coqueiral%20-%20MG%2C%2037235-000!5e0!3m2!1spt-BR!2sbr!4v1709664478200!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address - Simplificado, branco e centralizado na parte inferior */}
            <div className="text-center text-white text-lg font-medium drop-shadow-md pt-4 leading-relaxed">
                R. Matias Borges, 139 - Centro, <br/>Coqueiral - MG
            </div>
            
          </div>

        </div>

      </div>

    </main>
  );
}