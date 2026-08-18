import { PageHeader } from '../components/PageHeader';
import { clinicInfo } from '../data/pages';

interface LegalProps {
  currentPath: string;
}

export function Legal({ currentPath }: LegalProps) {
  if (currentPath === 'aviso-legal') return <AvisoLegal />;
  if (currentPath === 'politica-privacidad') return <PoliticaPrivacidad />;
  return <PoliticaCookies />;
}

function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader title={title} />
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 leading-relaxed text-gray-700">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}

function AvisoLegal() {
  return (
    <LegalShell title="Aviso legal">
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la
        sociedad de la información y de comercio electrónico (LSSI-CE), se
        informan a los usuarios los siguientes datos identificativos:
      </p>
      <h2 className="text-xl font-bold text-gray-900">Titular</h2>
      <p>
        Clínica Oftalmológica Pérez Salvador, ejercida por los Doctores D. José
        Luis Pérez-Salvador (Colegiado 090902129) y D. Eduardo Pérez-Salvador
        (Colegiado 092852936).
      </p>
      <h2 className="text-xl font-bold text-gray-900">Domicilio</h2>
      <p>
        {clinicInfo.address}, {clinicInfo.postalCode} {clinicInfo.city},
        España.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Contacto</h2>
      <p>
        Teléfono/Fax: {clinicInfo.phone}
        <br />
        Email: {clinicInfo.email}
      </p>
      <h2 className="text-xl font-bold text-gray-900">Ámbito</h2>
      <p>
        El acceso a este sitio web implica la aceptación de las presentes
        condiciones generales. La clínica se reserva el derecho a modificar el
        contenido y la configuración del sitio en cualquier momento.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Regulación médica</h2>
      <p>
        El ejercicio profesional de la oftalmología se rige por la Ley
        44/2003, de 21 de noviembre, de ordenación de las profesiones
        sanitarias, y por el código deontológico del Colegio Oficial de
        Médicos. La información contenida en este sitio tiene carácter
        divulgativo y no sustituye la consulta médica presencial.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Propiedad intelectual</h2>
      <p>
        Todos los contenidos de este sitio web (textos, imágenes, logotipo y
        diseño) son titularidad de Clínica Oftalmológica Pérez Salvador y están
        protegidos por la legislación vigente sobre propiedad intelectual.
      </p>
    </LegalShell>
  );
}

function PoliticaPrivacidad() {
  return (
    <LegalShell title="Política de privacidad">
      <p>
        La Clínica Oftalmológica Pérez Salvador cumple con el Reglamento (UE)
        2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD).
      </p>
      <h2 className="text-xl font-bold text-gray-900">
        Responsable del tratamiento
      </h2>
      <p>
        Clínica Oftalmológica Pérez Salvador, con domicilio en{' '}
        {clinicInfo.address}, {clinicInfo.postalCode} {clinicInfo.city}.
        Email de contacto: {clinicInfo.email}.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Finalidad</h2>
      <p>
        Los datos recogidos a través del formulario de contacto y de la gestión
        de citas se utilizan exclusivamente para la gestión de citas de
        pacientes y la atención de consultas recibidas a través del sitio web.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Legitimación</h2>
      <p>
        El tratamiento se basa en el consentimiento del interesado al marcar la
        casilla de aceptación de la política de privacidad en el formulario de
        contacto.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Conservación</h2>
      <p>
        Los datos se conservarán durante el tiempo necesario para cumplir con
        la finalidad para la que se recogieron y, en su caso, durante los
        plazos legales aplicables.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Destinatarios</h2>
      <p>
        No se ceden datos a terceros, salvo por obligación legal. Los datos no
        serán objeto de transferencias internacionales.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Derechos del usuario</h2>
      <p>
        El usuario puede ejercer sus derechos de acceso, rectificación,
        supresión, oposición, limitación del tratamiento y portabilidad de los
        datos dirigiéndose por escrito a {clinicInfo.email}.
      </p>
    </LegalShell>
  );
}

function PoliticaCookies() {
  return (
    <LegalShell title="Política de cookies">
      <p>
        Esta política de cookies explica qué son las cookies, qué tipos se
        utilizan en este sitio web y cómo puedes gestionarlas.
      </p>
      <h2 className="text-xl font-bold text-gray-900">¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web envía al
        navegador del usuario y se almacenan en su dispositivo. Permiten
        recordar información sobre la visita para mejorar la experiencia de
        navegación.
      </p>
      <h2 className="text-xl font-bold text-gray-900">
        Cookies utilizadas en este sitio
      </h2>
      <p>
        Este sitio web utiliza únicamente cookies técnicas esenciales
        necesarias para el correcto funcionamiento de la página. Estas cookies
        no requieren consentimiento según la legislación vigente.
      </p>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="font-semibold text-burgundy-800">
          Esta web no usa cookies publicitarias ya que no se permite publicidad
          de terceros.
        </p>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Gestión de cookies</h2>
      <p>
        Puedes aceptar o rechazar las cookies no esenciales a través del banner
        de cookies que aparece al acceder a la web. Asimismo, puedes configurar
        tu navegador para bloquear o eliminar las cookies almacenadas en tu
        dispositivo.
      </p>
      <h2 className="text-xl font-bold text-gray-900">Actualización</h2>
      <p>
        Esta política puede actualizarse para adaptarse a cambios normativos o
        a las funcionalidades del sitio. Se recomienda revisarla periódicamente.
      </p>
    </LegalShell>
  );
}
