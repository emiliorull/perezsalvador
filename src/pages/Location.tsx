import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { clinicInfo } from '../data/pages';
import { useState } from 'react';

export function Location() {
  const [submitted, setSubmitted] = useState(false);

  const mapSrc =
    'https://www.google.com/maps?q=' +
    encodeURIComponent(
      'Avda. Reyes Católicos 16, 09005 Burgos, España'
    ) +
    '&output=embed';

  return (
    <div>
      <PageHeader
        title="Ubicación clínica y Contacto"
        subtitle="Estamos en el corazón de Burgos. Pide tu cita o resuelve cualquier duda contactando directamente con nosotros."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact info + form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Datos de la clínica
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <MapPin className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dirección</p>
                    <p className="text-gray-600">
                      {clinicInfo.address}
                      <br />
                      {clinicInfo.postalCode} {clinicInfo.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Phone className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono / Fax</p>
                    <a
                      href={clinicInfo.phoneHref}
                      className="text-gray-600 hover:text-primary-700"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Mail className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-gray-600 hover:text-primary-700"
                    >
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Clock className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horario</p>
                    <p className="text-gray-600">
                      Lunes a Viernes
                      <br />
                      10:00 – 14:00 / 16:00 – 19:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <h3 className="mt-10 text-xl font-bold text-gray-900">
                Formulario de contacto
              </h3>
              {submitted ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <p className="text-sm text-green-800">
                    Gracias por contactarnos. Hemos recibido tu mensaje y nos
                    pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
              ) : (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="mt-6 space-y-4"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="ace294c7-33ee-44bb-a730-1214e4ea2e53"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="Consulta web - Clínica Oftalmológica Pérez Salvador"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Web Pérez Salvador"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                        placeholder="tucorreo@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                        placeholder="947 00 00 00"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Motivo de consulta
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none"
                      placeholder="Cuéntanos brevemente cómo podemos ayudarte"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      id="privacy-check"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                    <label
                      htmlFor="privacy-check"
                      className="text-sm text-gray-600"
                    >
                      He leído y acepto la{' '}
                      <a
                        href="/politica-privacidad"
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/politica-privacidad');
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }}
                        className="font-medium text-primary-600 underline"
                      >
                        política de privacidad
                      </a>
                      .
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Cómo llegar
              </h2>
              <p className="mt-3 text-gray-600">
                La clínica se encuentra en la Avenida Reyes Católicos, una zona
                céntrica y bien comunicada de Burgos.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <iframe
                  title="Mapa de la clínica"
                  src={mapSrc}
                  className="h-[450px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
