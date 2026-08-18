export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    category: 'Catarata',
    items: [
      {
        q: '¿Qué es la catarata?',
        a: 'Pérdida de transparencia del cristalino por la edad que produce visión borrosa o deslumbramiento.',
      },
      {
        q: '¿Cuál es el tratamiento?',
        a: 'Cirugía ambulatoria de facoemulsificación por ultrasonidos con implante de lente intraocular bajo anestesia tópica.',
      },
    ],
  },
  {
    category: 'Glaucoma',
    items: [
      {
        q: '¿Qué es el glaucoma?',
        a: 'Enfermedad del nervio óptico ligada habitualmente a una presión intraocular elevada que causa pérdida progresiva y asintomática del campo visual.',
      },
      {
        q: '¿Puedo prevenir la aparición del glaucoma?',
        a: 'No se puede evitar su origen, pero la detección precoz mediante revisiones y tonometría frena su avance.',
      },
      {
        q: 'Un familiar mío padece glaucoma, ¿lo padezco yo?',
        a: 'Existe un factor hereditario claro; los familiares directos deben revisarse periódicamente.',
      },
      {
        q: '¿Cuál es el tratamiento del glaucoma?',
        a: 'Colirios hipotensores, trabeculoplastia láser o cirugía filtrante si la medicación no es suficiente.',
      },
    ],
  },
  {
    category: 'Desprendimiento de retina',
    items: [
      {
        q: '¿Qué es el desprendimiento de retina?',
        a: 'Separación de la membrana retiniana de la capa vascular subyacente.',
      },
      {
        q: 'Veo moscas volantes, ¿es un desprendimiento de retina?',
        a: 'No necesariamente, pero su aparición brusca requiere valoración médica urgente.',
      },
      {
        q: '¿Cuál es el tratamiento si padezco una rotura en la retina?',
        a: 'Fotocoagulación preventiva con láser Argón para sellar la rotura antes de que se desprenda. Si ya hay desprendimiento, requiere cirugía vitrorretiniana.',
      },
      {
        q: 'Soy miope alto, ¿qué debo hacer?',
        a: 'Revisiones periódicas de fondo de ojo bajo dilatación pupilar para descartar lesiones predisponentes.',
      },
    ],
  },
  {
    category: 'Degeneración Macular Asociada a la Edad (DMAE)',
    items: [
      {
        q: '¿Qué es la DMAE?',
        a: 'Deterioro de la mácula que afecta a la visión central y fina en personas mayores.',
      },
      {
        q: '¿Cómo puedo detectarla?',
        a: 'Mediante rejilla de Amsler (deformación de líneas rectas) y OCT de mácula.',
      },
      {
        q: '¿Tiene tratamiento?',
        a: 'La forma seca se frena con suplementos antioxidantes; la forma húmeda con inyecciones intraoculares antiangiogénicas.',
      },
    ],
  },
  {
    category: 'Ojo seco',
    items: [
      {
        q: '¿Qué es el ojo seco?',
        a: 'Trastorno de la película lagrimal que produce sequedad e inflamación ocular.',
      },
      {
        q: '¿Cuáles son los síntomas?',
        a: 'Ardor, sensación de arenilla, enrojecimiento y lagrimeo paradójico.',
      },
      {
        q: '¿Qué puedo hacer si lo padezco?',
        a: 'Higiene palpebral y lágrimas artificiales sin conservantes.',
      },
      {
        q: '¿Cómo se trata?',
        a: 'Tratamiento avanzado con Luz Intensa Ultra Regulada (Thermaeye) para reactivar las glándulas de Meibomio.',
      },
    ],
  },
  {
    category: 'Retinopatía diabética',
    items: [
      {
        q: '¿Qué es?',
        a: 'Lesión de los capilares de la retina por exceso continuado de glucosa en sangre.',
      },
      {
        q: 'Soy diabético, ¿debo tener alguna precaución especial?',
        a: 'Control glucémico estricto y fondo de ojo anual como mínimo.',
      },
      {
        q: '¿Puedo darme cuenta de que la padezco?',
        a: 'En fases iniciales es asintomática; cuando causa pérdida visual el daño ya suele ser avanzado.',
      },
      {
        q: '¿En qué consiste la exploración?',
        a: 'Fondo de ojo dilatado, retinografía y OCT.',
      },
      {
        q: '¿Cuál es su tratamiento?',
        a: 'Láser retiniano, fármacos intraoculares o vitrectomía.',
      },
    ],
  },
  {
    category: 'Cirugía refractiva',
    items: [
      {
        q: '¿Qué es?',
        a: 'Procedimientos para corregir defectos de refracción y eliminar la dependencia de gafas.',
      },
      {
        q: '¿Me puedo operar para no depender de gafas o lentillas? ¿todas las personas son aptas?',
        a: 'La mayoría sí, tras un estudio corneal previo riguroso (topografía y paquimetría).',
      },
      {
        q: '¿Y en cuanto a la presbicia o vista cansada?',
        a: 'Se corrige mediante lentes intraoculares multifocales o técnicas láser personalizadas.',
      },
    ],
  },
  {
    category: 'Miopía, Hipermetropía y Astigmatismo',
    items: [
      {
        q: '¿Qué es cada una y cómo se tratan?',
        a: 'La miopía produce visión borrosa de lejos, la hipermetropía de cerca y el astigmatismo distorsión de la imagen en todas las distancias. Se tratan con láser excímer o lentes intraoculares fáquicas/pseudofáquicas.',
      },
      {
        q: '¿Se puede frenar la miopía?',
        a: 'En niños y jóvenes, mediante control ambiental, orto-k y colirios específicos.',
      },
      {
        q: 'Tengo astigmatismo, ¿subirá con los años?',
        a: 'Suele ser estable; aumentos bruscos exigen descartar queratocono.',
      },
    ],
  },
  {
    category: 'Oftalmología pediátrica',
    items: [
      {
        q: '¿Qué es el ojo vago (ambliopía) y cómo se evita?',
        a: 'Falta de desarrollo de la agudeza visual; se trata antes de los 8 años con corrección óptica y oclusión con parche.',
      },
      {
        q: '¿Qué es el estrabismo y qué hacer si mi hijo desvía un ojo?',
        a: 'Desalineación de los ojos que exige consulta médica inmediata para descartar patología o tratar con gafas/cirugía.',
      },
      {
        q: '¿Cuándo llevar a los niños a revisión?',
        a: 'A los 3-4 años de edad, o antes si se detectan anomalías.',
      },
    ],
  },
  {
    category: 'Miscelánea',
    items: [
      {
        q: 'Me lloran los ojos, ¿por qué?',
        a: 'Puede deberse a ojo seco evaporativo, conjuntivitis o estenosis/obstrucción de la vía lagrimal.',
      },
      {
        q: 'Veo moscas volantes y destellos luminosos',
        a: 'Acudir a revisión prioritaria para descartar desgarros retinianos.',
      },
    ],
  },
];
