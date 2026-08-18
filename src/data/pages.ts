export interface PageMeta {
  path: string;
  label: string;
}

export const pages: PageMeta[] = [
  { path: '', label: 'Inicio' },
  { path: 'quienes-somos', label: 'Quiénes somos' },
  { path: 'ubicacion-contacto', label: 'Ubicación clínica' },
  { path: 'dotacion-equipos', label: 'Dotación Equipos' },
  { path: 'area-quirurgica', label: 'Área Quirúrgica' },
  { path: 'preguntas-frecuentes', label: 'Preguntas frecuentes' },
];

export const legalPages: PageMeta[] = [
  { path: 'aviso-legal', label: 'Aviso legal' },
  { path: 'politica-privacidad', label: 'Política de privacidad' },
  { path: 'politica-cookies', label: 'Política de cookies' },
];

export const clinicInfo = {
  name: 'Clínica Oftalmológica Pérez Salvador',
  shortName: 'Pérez Salvador',
  domain: 'perezsalvadoroftalmologos.com',
  address: 'Avda. Reyes Católicos, 16. 3ªEsc. 2ºE',
  postalCode: '09005',
  city: 'Burgos',
  phone: '947 22 30 12',
  phoneHref: 'tel:+34947223012',
  email: 'info@perezsalvadoroftalmologos.com',
  logo: '/images/cropped-logo_PSO.jpg',
  heroImage: '/images/ojos_pso.jpg',
};
