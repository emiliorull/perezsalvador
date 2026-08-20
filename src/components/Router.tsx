import { useEffect, useState, useCallback } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';
import { pages } from '../data/pages';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Location } from '../pages/Location';
import { Equipment } from '../pages/Equipment';
import { Surgical } from '../pages/Surgical';
import { FAQ } from '../pages/FAQ';
import { Legal } from '../pages/Legal';
import { DrEduardo } from '../pages/DrEduardo';
import { DrJoseLuis } from '../pages/DrJoseLuis';


const pageMap: Record<string, React.ComponentType> = {
  '': Home,
  'quienes-somos': About,
  'dr-eduardo-perez-salvador': DrEduardo,
  'dr-jose-luis-perez-salvador': DrJoseLuis,
  'ubicacion-contacto': Location,
  'dotacion-equipos': Equipment,
  'area-quirurgica': Surgical,
  'preguntas-frecuentes': FAQ,
  'aviso-legal': Legal,
  'politica-privacidad': Legal,
  'politica-cookies': Legal,
};

export function Router() {
  const [path, setPath] = useState(window.location.pathname.slice(1));

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname.slice(1));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === '') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', '/' + to);
    }
    setPath(to);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const CurrentPage = pageMap[path] ?? Home;
  const pageInfo = pages.find((p) => p.path === path);
  const isLegal = ['aviso-legal', 'politica-privacidad', 'politica-cookies'].includes(path);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar currentPath={path} navigate={navigate} />
      <main className={`flex-1 page-enter ${isLegal ? 'bg-white' : ''}`} key={path}>
        <CurrentPage navigate={navigate} currentPath={path} />
      </main>
      <Footer navigate={navigate} />
      <CookieBanner />
    </div>
  );
}

export type NavigateFn = (to: string) => void;

