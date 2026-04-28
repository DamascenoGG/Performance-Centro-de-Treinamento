'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              PERFORMANCE
            </h3>
            <p className="text-gray-400 text-sm">
              Academia moderna com equipamentos de ponta e atendimento personalizado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/views/Sobre" className="text-gray-400 hover:text-red-500">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/views/Planos" className="text-gray-400 hover:text-red-500">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/views/Contato" className="text-gray-400 hover:text-red-500">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Coqueiros, MG</li>
              <li>📞 Rua Matias Borges, 159</li>
              <li>✉️ contato@performance.com.br</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/aperformanceact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <span className="text-2xl">📱</span>
              </a>
              <a
                href="https://wa.me/551130000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <span className="text-2xl">💬</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {year} Performance Academia. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-red-500">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-red-500">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
