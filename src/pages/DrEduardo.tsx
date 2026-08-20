import { PageHeader } from '../components/PageHeader';
import { Mail } from 'lucide-react';

export function DrEduardo() {
  return (
    <div>
      <PageHeader
        title="Dr. Eduardo Pérez-Salvador"
        subtitle="Director Médico"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <img src="/images/IMG_1960.jpg" alt="Dr. Eduardo Pérez-Salvador" className="w-full rounded-2xl shadow-md" />
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 space-y-4">
              <p><span className="font-bold text-gray-900">Colegiado 092852936</span></p>
              <p>Licenciado en Medicina y Cirugía por la Facultad de Medicina de la Universidad de Navarra.</p>
              <p><span className="font-bold text-gray-900">ALUMNO INTERNO del Departamento de Oftalmología de la Clínica Universitaria de Navarra</span> por Concurso de Méritos.</p>
              <p>Estudios de Medicina finalizados en Mayo de 1997. <span className="font-bold text-gray-900">GRADO DE LICENCIADO</span> obteniendo en los exámenes ordinarios la Licenciatura con la calificación de Notable.</p>
              <p>Obtención del <span className="font-bold text-gray-900">TÍTULO EUROPEO BOARD ESPECIALISTA EN OFTALMOLOGÍA</span>, Fellow European Board of Ophthalmology (F.E.B.O.), mediante examen oral y escrito en lengua inglesa.</p>
              <p>Obtención del <span className="font-bold text-gray-900">TÍTULO ESPECIALISTA EN OFTALMOLOGÍA</span> en el Hospital Universitario La Princesa de Madrid.</p>
              <p><span className="font-bold text-gray-900">DOCTOR EN MEDICINA Y CIRUGÍA CON SOBRESALIENTE CUM LAUDE</span> (2000) por la Universidad Complutense de Madrid.</p>
              <p>Ganador del Accesit del <span className="font-bold text-gray-900">PREMIO NACIONAL DE TESIS DOCTORALES</span> del año 2000.</p>
              <p>En la actualidad <span className="font-bold text-gray-900">Especialista en el Servicio de Oftalmología del HOSPITAL UNIVERSITARIO DE BURGOS</span></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-start mt-16">
            <div className="md:w-1/3">
              <img src="/images/eduardoperezsalvador02.jpg" alt="Dr. Eduardo Pérez-Salvador operando" className="w-full rounded-2xl shadow-md" />
            </div>
            <div className="md:w-2/3 text-lg text-gray-700 space-y-4">
              <p>Editor de la Revista Americana de difusión internacional Revista Cibernética de Oftalmología.</p>
              <p>Participación en Mesas Redondas, Jurado en Congresos Nacionales de Oftalmología.</p>
              <p>Evaluador de la Revista Archivos de la Sociedad Española de Oftalmología.</p>
              <p>Másteres de subespecialización de Retina Médica y Quirúrgica, y cirugía implanto refractiva en Lugano, Suiza.</p>
              <p>Másteres de subespecialización de Electrofisiología Ocular y Patología de Úvea-Retina en la Universidad de Pittsburgh, Pensilvania (EEUU).</p>
              <p>Presentación de vídeos de maniobras quirúrgicas en Congresos de Oftalmología.</p>
              <p>Presentación de más de 100 comunicaciones en Congresos, Symposiums, Cursos, diversos foros relacionados con la Oftalmología a nivel nacional e internacional.</p>
              <p>Publicación de más de 50 artículos en revistas nacionales e internacionales de dicha especialidad.</p>
              <p>Publicación de más de 20 capítulos de libros y libros de oftalmología.</p>
              <p>Participación como investigador en 15 proyectos de investigación a nivel nacional e internacional.</p>
              <p>Obtención de varios premios de comunicaciones presentadas en foros relacionados con la oftalmología.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Sociedades Científicas:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                  <li>Miembro de la Sociedad Española de Oftalmología (SEO).</li>
                  <li>Miembro de la Sociedad Castellano-Leonesa de Oftalmología (ACLOFT)</li>
                  <li>Miembro de la Sociedad Española de Cirugía Ocular Implanto-Refractiva (SECOIR).</li>
                  <li>Miembro de la Academia Americana de Oftalmología (AAO).</li>
                  <li>Miembro de la Comisión Nacional de Consentimiento Informado de la Sociedad Española de Cirugía Ocular Implanto Refractiva.</li>
                  <li>Miembro de la Comisión de Biblioteca y Hemeroteca del Complejo Asistencial Universitario de Burgos</li>
                  <li>Miembro de la Sociedad Española de Retina y Vítreo (SERV)</li>
                  <li>Vocal por Burgos de la Asociación Castellano-Leonesa de Oftalmología (ACLOFT)</li>
              </ul>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
                  <p className="text-gray-900 flex items-center gap-2">
                    <strong className="font-bold">Contacto:</strong> 
                    <a href="tel:947223012" className="text-blue-600 hover:underline">947 223 012</a> / 
                    <a href="mailto:eduardo@perezsalvadoroftalmologos.com" className="text-blue-600 hover:underline">eduardo@perezsalvadoroftalmologos.com</a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
