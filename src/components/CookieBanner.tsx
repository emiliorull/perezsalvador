import { useEffect, useState } from 'react';
import { Cookie, X, Check } from 'lucide-react';

const STORAGE_KEY = 'pso_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] animate-slide-up">
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-2xl sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50">
              <Cookie className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-sm text-gray-600">
              Usamos cookies técnicas esenciales para el funcionamiento de la
              web. No usamos cookies publicitarias ni de terceros.{' '}
              <a
                href="/politica-cookies"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/politica-cookies');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
                className="font-medium text-primary-600 underline hover:text-primary-700"
              >
                Política de Cookies
              </a>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:ml-auto">
            <button
              onClick={reject}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <X className="h-4 w-4" />
              Rechazar
            </button>
            <button
              onClick={accept}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              <Check className="h-4 w-4" />
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
