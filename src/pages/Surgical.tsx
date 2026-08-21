import { ShieldCheck, HeartPulse, Building2, Stethoscope, Eye } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { clinicInfo } from '../data/pages';
import type { NavigateFn } from '../components/Router';

interface SurgicalProps {
  navigate: NavigateFn;
}

export function Surgical({ navigate }: SurgicalProps) {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Máxima seguridad',
      desc: 'Quirófanos certificados con los más altos estándares de seguridad e higiene.',
    },
    {
      icon: HeartPulse,
      title: 'Tecnología avanzada',
      desc: 'Instrumental óptico de última generación para cirugía de precisión.',
    },
    {
      icon: Building2,
      title: 'Clínica Recoletas Burgos',
      desc: 'Las intervenciones se realizan en los quirófanos de la Clínica Recoletas, garantizando la máxima calidad asistencial.',
    },
    {
      icon: Stethoscope,
      title: 'Cirugía ambulatoria',
      desc: 'Procedimientos ambulatorios, con recuperación rápida y sin ingreso.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Área Quirúrgica"
        subtitle="La excelencia quirúrgica con la máxima seguridad y la mejor tecnología disponible."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/quirofano.jpg"
                  alt="Quirófano con instrumental óptico de alta precisión"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-500">
                Quirófano equipado con instrumental óptico de alta precisión
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Cirugía en Clínica Recoletas, Burgos
              </h2>
              <p className="mt-5 leading-relaxed text-gray-700">
                La mayoría de las intervenciones quirúrgicas se realizan en los
                quirófanos de la Clínica Recoletas en Burgos, garantizando la
                máxima seguridad y tecnología. Contamos con instrumental óptico
                de alta precisión para ofrecer los mejores resultados en cada
                procedimiento.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Nuestras especialidades quirúrgicas incluyen cirugía de
                catarata mediante facoemulsificación, cirugía refractiva con
                láser excímer, cirugía vitrorretiniana, cirugía oculoplástica y
                tratamiento del glaucoma, entre otras.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={clinicInfo.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:shadow-md"
                >
                  Solicitar información
                </a>
                <button
                  onClick={() => navigate('preguntas-frecuentes')}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-700 px-6 py-3 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50"
                >
                  <Eye className="h-4 w-4" />
                  Ver preguntas frecuentes
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100">
                  <f.icon className="h-5 w-5 text-primary-700" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
