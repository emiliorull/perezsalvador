import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { faqData } from '../data/faq';
import { clinicInfo } from '../data/pages';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <PageHeader
        title="Preguntas más frecuentes"
        subtitle="Respuestas médicas precisas a las dudas más habituales sobre las principales patologías oculares."
      />

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqData.map((cat, catIdx) => (
            <div key={cat.category} className={catIdx > 0 ? 'mt-10' : ''}>
              <h2 className="flex items-center gap-2 text-xl font-bold text-primary-800">
                <HelpCircle className="h-5 w-5 text-primary-600" />
                {cat.category}
              </h2>
              <div className="mt-4 space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = openId === id;
                  return (
                    <div
                      key={id}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                    >
                      <button
                        onClick={() => toggle(id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold text-gray-900 sm:text-base">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`accordion-content ${isOpen ? 'open' : ''}`}
                      >
                        <div>
                          <p
                            className="px-5 pb-4 text-sm leading-relaxed text-gray-600"
                            dangerouslySetInnerHTML={{ __html: item.a }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-14 rounded-2xl bg-primary-900 p-8 text-center text-white">
            <h3 className="text-xl font-bold">¿Tienes más dudas?</h3>
            <p className="mt-2 text-primary-100">
              Estaremos encantados de atenderte y resolver cualquier consulta
              sobre tu salud visual.
            </p>
            <a
              href={clinicInfo.phoneHref}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition-all hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              Llamar: {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
