import {
  Microscope,
  Scan,
  Eye,
  Zap,
  Activity,
  Gauge,
  TestTube,
  Telescope,
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';

interface EquipmentItem {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const equipment: EquipmentItem[] = [
  {
    icon: Scan,
    title: 'Diagnóstico corneal y pupilar',
    items: [
      'Paquimetría ultrasónica',
      'Topografía corneal anterior y posterior (Orbscan)',
      'Pupilometría',
    ],
  },
  {
    icon: Zap,
    title: 'Láseres terapéuticos',
    items: [
      'Láser YAG',
      'Láser Argón',
    ],
  },
  {
    icon: Eye,
    title: 'Imagen retiniana',
    items: [
      'Retinografía',
      'Angiografía Fluoresceínica (AFG)',
      'Tomografía de Coherencia Óptica (OCT)',
    ],
  },
  {
    icon: Gauge,
    title: 'Exploración visual',
    items: [
      'Campimetría computerizada',
      'Test de colores',
      'Biometría',
      'Autorrefractómetros',
      'Frontofocómetros para lentes progresivos',
    ],
  },
  {
    icon: Telescope,
    title: 'Unidades de exploración',
    items: [
      'Forópteros',
      'Proyectores',
      'Oftalmoscopios',
      'Retinoscopios',
      'Tonómetros de aplanación',
      'Queratómetros',
      'Gabinete de adaptación de lentes de contacto',
      'Ayudas de Baja Visión',
    ],
  },
];

const gallery = [
  { src: '/images/equipos-1.jpg', alt: 'Sala de espera' },
  { src: '/images/equipos-2.jpg', alt: 'Sala de exploración' },
  { src: '/images/equipos-3.jpg', alt: 'Despachos' },
  { src: '/images/equipos-4.jpg', alt: 'Despachos' },
];

export function Equipment() {
  return (
    <div>
      <PageHeader
        title="Equipamiento de última generación"
        subtitle="Contamos con un equipamiento de última generación que nos permite realizar una amplia gama de estudios que ayudan al diagnóstico, tratamiento y seguimiento de la mayoría de las enfermedades oculares."
      />

      {/* ThermaEye highlight */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                <Activity className="h-4 w-4" />
                Tecnología puntera
              </div>
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                THERMAEYE
              </h2>
              <p className="mt-2 text-lg text-primary-100">
                Luz Intensa Ultra Regulada para el tratamiento de vanguardia
                contra el OJO SECO.
              </p>
              <p className="mt-4 leading-relaxed text-primary-100">
                Primera tecnología con certificado oftalmológico mundial.
                ThermaEye reactiva las glándulas de Meibomio mediante luz
                intensa pulsada regulada, ofreciendo una solución avanzada y
                eficaz para los pacientes con síndrome de ojo seco.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/thermoeye.jpg"
                alt="Tratamiento ThermaEye con luz pulsada"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment cards */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Equipamiento técnico
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contamos con una dotación completa de instrumentos de precisión
              para el diagnóstico y seguimiento oftalmológico.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((eq) => (
              <div
                key={eq.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                  <eq.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {eq.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {eq.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
              <Microscope className="h-6 w-6 text-primary-700" />
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestras instalaciones
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un espacio diseñado para tu confort y seguridad.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
