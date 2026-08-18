import { useEffect, useState } from 'react';
import { Menu, X, Phone, CalendarClock, Eye } from 'lucide-react';
import { pages, clinicInfo } from '../data/pages';
import type { NavigateFn } from './Router';

interface NavbarProps {
  currentPath: string;
  navigate: NavigateFn;
}

export function Navbar({ currentPath, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  const handleNav = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNav('')}
          className="flex items-center gap-2"
          aria-label="Ir al inicio"
        >
          <img
            src={clinicInfo.logo}
            alt="Clínica Oftalmológica Pérez Salvador"
            className="h-12 w-auto rounded"
          />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {pages.map((page) => (
            <button
              key={page.path}
              onClick={() => handleNav(page.path)}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                currentPath === page.path
                  ? 'text-primary-700'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {page.label}
              {currentPath === page.path && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary-600" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={clinicInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            <Phone className="h-4 w-4" />
            {clinicInfo.phone}
          </a>
          <button
            onClick={() => handleNav('ubicacion-contacto')}
            className="inline-flex items-center gap-2 rounded-lg bg-burgundy-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-burgundy-800 hover:shadow-md"
          >
            <CalendarClock className="h-4 w-4" />
            Pedir Cita
          </button>
        </div>

        <button
          className="rounded-md p-2 text-gray-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-3 sm:px-6">
            {pages.map((page) => (
              <button
                key={page.path}
                onClick={() => handleNav(page.path)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium ${
                  currentPath === page.path
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Eye className="h-4 w-4 opacity-50" />
                {page.label}
              </button>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <a
                href={clinicInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700"
              >
                <Phone className="h-4 w-4" />
                Tel: {clinicInfo.phone}
              </a>
              <button
                onClick={() => handleNav('ubicacion-contacto')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-burgundy-700 px-4 py-2.5 text-sm font-semibold text-white"
              >
                <CalendarClock className="h-4 w-4" />
                Pedir Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
