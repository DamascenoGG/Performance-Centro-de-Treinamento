'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', textAlign: 'center' }}
      className="bg-black/80 backdrop-blur-lg border-t border-red-900/40 mt-auto relative z-20 py-12 px-6"
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* 1. Logo e Nome */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }} className="group mb-8">
          <div className="w-16 h-16 relative overflow-hidden rounded-full border-2 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)] mb-4">
            <Image src="/logo.jpeg" alt="Logo Performance" fill className="object-cover" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="font-black text-2xl tracking-tighter text-white">PERFORMANCE</span>
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-[0.2em] mt-1">Centro de Treinamento</span>
          </div>
        </Link>

        {/* 2. Descrição */}
        <p className="text-gray-400 text-sm max-w-md mb-8">
          Academia moderna com equipamentos de ponta, focada em resultados reais e atendimento totalmente personalizado.
        </p>

        {/* 3. Menu Horizontal */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }} className="mb-8">
          <Link href="/" className="text-gray-300 hover:text-red-500 font-bold uppercase tracking-wider text-xs transition-colors">Home</Link>
          <Link href="/views/Sobre" className="text-gray-300 hover:text-red-500 font-bold uppercase tracking-wider text-xs transition-colors">Sobre</Link>
          <Link href="/views/Planos" className="text-gray-300 hover:text-red-500 font-bold uppercase tracking-wider text-xs transition-colors">Planos</Link>
          <Link href="/views/Contato" className="text-gray-300 hover:text-red-500 font-bold uppercase tracking-wider text-xs transition-colors">Contato</Link>
        </div>

        {/* 4. Redes Sociais */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }} className="mb-10">
          <a href="https://www.instagram.com/aperformancect/" target="_blank" className="text-gray-400 hover:text-red-600 transition-transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.919-.058 1.265-.069-1.646-.069-4.849s.012-3.584.069-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=553598632437" target="_blank" className="text-gray-400 hover:text-green-500 transition-transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.887.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.44-9.89 9.889-.001 2.224.604 3.738 1.688 5.484l-1.108 4.047 4.103-1.077c-.121-.077-.189-.133-.213-.156z"/></svg>
          </a>
        </div>

        {/* 5. Copyright (A parte que estava teimosa) */}
        <div 
          style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <p style={{ margin: '0 0 16px 0', fontSize: '12px', color: '#6b7280', textAlign: 'center', width: '100%' }}>
            © {year} Performance Centro de Treinamento. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '11px', color: '#4b5563' }}>
            <Link href="#" className="hover:text-red-500 transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-red-500 transition-colors">Termos de Serviço</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}