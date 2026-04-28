'use client';

export default function Contato() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-red-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contato
          </h1>
          <p className="text-gray-300 text-lg">
            Entre em contato conosco através dos canais abaixo
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Entre em Contato
                </h2>
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aperformancect/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-4xl">📱</div>
                <div>
                  <p className="text-gray-200 text-sm">Siga-nos no Instagram</p>
                  <p className="text-white font-bold text-lg">@aperformanceact</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=553598632437&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-green-600 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-4xl">💬</div>
                <div>
                  <p className="text-gray-200 text-sm">Envie uma mensagem</p>
                  <p className="text-white font-bold text-lg">WhatsApp</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@performanceacademia.com.br"
                className="flex items-center gap-4 p-6 bg-red-600 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-4xl">✉️</div>
                <div>
                  <p className="text-gray-200 text-sm">Envie um email</p>
                  <p className="text-white font-bold text-lg">contato@performance.com.br</p>
                </div>
              </a>
            </div>

            {/* Location Map */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Localização
              </h2>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl mb-6 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0154587101575!2d-45.438960524304065!3d-21.18970242975637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b56507aa125187%3A0xa4de8f93e2f23602!2sPerformance%20C.T!5e0!3m2!1spt-BR!2sbr!4v1777355270178!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-red-500 mb-4">
                  Performance Academia
                </h3>
                <p className="text-gray-300 mb-2">
                  <strong>Endereço:</strong>
                </p>
                <p className="text-gray-400 mb-6">
                  Rua Matias Borges, 139 - Centro
                  <br />
                  Coqueiral - MG
                </p>

                <p className="text-gray-300 mb-2">
                  <strong>Horário de Funcionamento:</strong>
                </p>
                <p className="text-gray-400">
                  Segunda a Sexta: 4:45h - 22h
                  <br />
                  Sábado: 8h - 12h
                  <br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
