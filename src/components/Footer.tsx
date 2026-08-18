import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { pages, legalPages, clinicInfo } from '../data/pages';
import type { NavigateFn } from './Router';

interface FooterProps {
  navigate: NavigateFn;
}

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <img
              src={clinicInfo.logo}
              alt="Clínica Oftalmológica Pérez Salvador"
              className="h-14 w-auto rounded bg-white/95 p-1"
            />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Cuidamos tus ojos para que lo veas claro y nítido. Oftalmología de
              referencia en Burgos.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {pages.map((page) => (
                <li key={page.path}>
                  <button
                    onClick={() => navigate(page.path)}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>
                  {clinicInfo.address}
                  <br />
                  {clinicInfo.postalCode} {clinicInfo.city}
                </span>
              </li>
              <li>
                <a
                  href={clinicInfo.phoneHref}
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary-400" />
                  {clinicInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary-400" />
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                <span>Lunes a Viernes<br />10:00 – 14:00 / 16:00 – 19:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {legalPages.map((page) => (
                <li key={page.path}>
                  <button
                    onClick={() => navigate(page.path)}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {clinicInfo.name}. Todos los derechos
            reservados.
          </p>
          <p className="mt-1">
            {clinicInfo.domain} · Burgos, España
          </p>
        </div>
      </div>
    </footer>
  );
}
