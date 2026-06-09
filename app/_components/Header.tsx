'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/views/Sobre' },
    { label: 'Planos', href: '/views/Planos' },
    { label: 'Contato', href: '/views/Contato' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 relative overflow-hidden rounded-full border-2 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-transform group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="Logo Performance"
              fill
              sizes="(max-width: 768px) 100px, 56px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter leading-none">PERFORMANCE</span>
            <span className="text-[9px] text-red-500 font-bold uppercase tracking-[0.2em]">Centro de Treinamento</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-widest"
            >
              {item.label}
            </Link>
          ))}
          {/* MUDANÇA AQUI: Botão preenchido de vermelho e mais bonito */}
          <Link 
            href="https://api.whatsapp.com/send/?phone=553598632437&text&type=phone_number&app_absent=0" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:scale-105"
          >
            Matricule-se
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-bold uppercase tracking-widest hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              {item.label}s
            </Link>
          ))}
          {/* MUDANÇA AQUI: Botão mobile também atualizado */}
          <Link 
            href="https://api.whatsapp.com/send/?phone=553598632437&text&type=phone_number&app_absent=0" 
            className="bg-red-600 text-white py-4 px-6 rounded-full text-center font-black uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.3)]"
            onClick={() => setIsOpen(false)}
          >
            Matricule-se
          </Link>
        </div>
      )}
    </header>
  );
}