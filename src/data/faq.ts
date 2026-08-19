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
    category: 'Cataratas',
    items: [
      {
        q: '¿Qué es la catarata?',
        a: "La catarata es la pérdida de transparencia del cristalino (la lente natural del ojo), lo que provoca una visión borrosa, disminución de la sensibilidad al contraste y, en ocasiones, deslumbramientos. Se asocia habitualmente al proceso natural de envejecimiento, aunque puede tener otras causas."
      },
      {
        q: '¿Cuál es el tratamiento?',
        a: "El único tratamiento definitivo para la catarata es la cirugía. En nuestra clínica realizamos la intervención mediante <strong>facoemulsificación por ultrasonidos</strong> a través de microincisiones (inferiores a 3 mm), aspirando el cristalino opaco e implantando una lente intraocular plegable de última tecnología. Es una cirugía rápida, ambulatoria y con anestesia tópica (en gotas)."
      }
    ]
  },
  {
    category: 'Glaucoma',
    items: [
      {
        q: '¿Qué es el glaucoma?',
        a: "El glaucoma es una enfermedad crónica y progresiva del nervio óptico, comúnmente asociada a una presión intraocular elevada. Produce una pérdida gradual del campo visual periférico de manera silenciosa, por lo que muchas veces el paciente no nota los síntomas hasta fases avanzadas."
      },
      {
        q: '¿Puedo prevenir la aparición del glaucoma?',
        a: "No existe una forma absoluta de prevenir su aparición, pero <strong>la detección precoz es la mejor prevención</strong> contra la ceguera. Un diagnóstico temprano permite iniciar el tratamiento a tiempo y detener el daño irreversible. Recomendamos revisiones anuales de la tensión ocular a partir de los 40 años."
      },
      {
        q: 'Un familiar mío padece glaucoma, ¿lo padezco yo?',
        a: "El glaucoma tiene un fuerte componente hereditario. Si tiene antecedentes familiares directos, su riesgo de padecerlo es mayor. Por ello, es imperativo que se realice controles oftalmológicos periódicos exhaustivos que incluyan tonometría (medición de presión) y estudio del nervio óptico (OCT)."
      },
      {
        q: '¿Cuál es el tratamiento del glaucoma?',
        a: "El objetivo del tratamiento es reducir la presión intraocular para frenar el daño en el nervio óptico. Esto se consigue generalmente mediante <strong>colirios (gotas oftálmicas)</strong>. Si la medicación no es suficiente, se puede recurrir a tratamientos con láser o a cirugía filtrante de glaucoma."
      }
    ]
  },
  {
    category: 'Desprendimiento de retina',
    items: [
      {
        q: '¿Qué es el desprendimiento de retina?',
        a: "Es una urgencia médica oftalmológica grave en la que la retina (la capa de tejido sensible a la luz en el fondo del ojo) se separa de su posición normal. Sin tratamiento quirúrgico urgente, puede causar pérdida permanente de la visión."
      },
      {
        q: 'Veo moscas volantes, ¿es un desprendimiento de retina?',
        a: "La simple presencia de 'moscas volantes' (miodesopsias) suele ser un proceso benigno relacionado con alteraciones del humor vítreo debido a la edad o miopía. Sin embargo, si la aparición es brusca, masiva o va acompañada de <strong>destellos de luz (relámpagos)</strong> o de un 'telón' oscuro que tapa una zona de la visión, podría tratarse de una rotura o desprendimiento de retina que requiere valoración oftalmológica urgente."
      },
      {
        q: '¿Cuál es el tratamiento si padezco una rotura en la retina?',
        a: "Si se detecta una rotura o desgarro retiniano <strong>antes</strong> de que se produzca el desprendimiento, se puede sellar de forma ambulatoria mediante <strong>fotocoagulación con láser Argón</strong>, rodeando la lesión para 'soldar' la retina y evitar que el líquido pase a través del desgarro."
      },
      {
        q: 'Soy miope alto, ¿qué debo hacer?',
        a: "La alta miopía produce un estiramiento y adelgazamiento de la retina, lo que aumenta el riesgo de lesiones periféricas (desgarros) y desprendimiento de retina. Todo paciente con miopía alta debe someterse a una revisión oftalmológica completa con dilatación pupilar (estudio del fondo de ojo) al menos <strong>una vez al año</strong>."
      }
    ]
  },
  {
    category: 'Degeneración Macular (DMAE)',
    items: [
      {
        q: '¿Qué es la Degeneración Macular Asociada a la Edad?',
        a: "La DMAE es una enfermedad degenerativa de la mácula (la zona central de la retina responsable de la visión detallada y aguda). Ocurre principalmente en personas mayores de 50 años y es una de las principales causas de pérdida de visión central en el mundo desarrollado."
      },
      {
        q: '¿Cómo puedo detectarla?',
        a: "Los primeros síntomas incluyen visión borrosa central, dificultad para leer o reconocer caras, y un síntoma clave: <strong>ver las líneas rectas torcidas u onduladas (metamorfopsias)</strong>. Si percibe estos cambios, debe acudir a la clínica rápidamente para realizar un estudio del fondo de ojo y una OCT macular."
      },
      {
        q: '¿Tiene tratamiento?',
        a: "La forma 'seca' de la DMAE evoluciona lentamente y se trata con suplementos vitamínicos y antioxidantes. La forma 'húmeda' o exudativa (más agresiva y rápida) se trata mediante <strong>inyecciones intravítreas de fármacos antiangiogénicos</strong>, que frenan el sangrado y la inflamación de los vasos anómalos."
      }
    ]
  },
  {
    category: 'Ojo Seco',
    items: [
      {
        q: '¿Qué es el ojo seco?',
        a: "El síndrome del ojo seco es una patología crónica de la superficie ocular en la que existe una mala calidad o escasa cantidad de lágrima, provocando desprotección e inflamación de la córnea y la conjuntiva."
      },
      {
        q: '¿Cuáles son los síntomas del ojo seco?',
        a: "Los pacientes suelen referir sensación de cuerpo extraño o arenilla, quemazón, ardor, enrojecimiento ocular, fotofobia (molestia con la luz), fatiga visual y, paradójicamente, episodios de lagrimeo excesivo (lágrima refleja de mala calidad)."
      },
      {
        q: '¿Qué puedo hacer si lo padezco?',
        a: "Es fundamental evitar factores ambientales desecantes (aires acondicionados fuertes, ambientes con humo), hacer descansos periódicos al utilizar pantallas (parpadeo consciente) y mantener una buena hidratación general."
      },
      {
        q: '¿Cómo se trata?',
        a: "El tratamiento base consiste en lágrimas artificiales sin conservantes y pomadas lubricantes. Sin embargo, en la Clínica Oftalmológica Pérez Salvador disponemos de la <strong>tecnología revolucionaria Thermaeye Plus</strong> (Luz Intensa Ultra Regulada), que trata el ojo seco severo actuando sobre la inflamación de las glándulas de Meibomio con resultados excelentes."
      }
    ]
  },
  {
    category: 'Retinopatía Diabética',
    items: [
      {
        q: '¿Qué es la retinopatía diabética?',
        a: "Es una complicación grave de la diabetes causada por el deterioro de los vasos sanguíneos que irrigan la retina, debido a niveles altos de glucemia mantenidos en el tiempo."
      },
      {
        q: 'Soy diabético, ¿debo tener alguna precaución especial en el cuidado de los ojos?',
        a: "El factor más importante es mantener un <strong>control estricto de los niveles de azúcar en sangre (glucemia) y de la presión arterial</strong>. Además, es obligatorio realizar revisiones oftalmológicas periódicas."
      },
      {
        q: '¿Puedo darme cuenta que padezco retinopatía diabética?',
        a: "En sus fases iniciales, la enfermedad es totalmente asintomática. Cuando la visión se vuelve borrosa, inestable o aparecen 'sombras', el daño suele estar ya muy avanzado. Por eso no debe esperar a tener síntomas para revisarse."
      },
      {
        q: '¿En qué consiste la exploración oftalmológica en un paciente diabético?',
        a: "Consiste fundamentalmente en dilatar la pupila con gotas para examinar exhaustivamente el fondo de ojo (retina y vasos sanguíneos). También realizamos una OCT para valorar si existe edema (acúmulo de líquido) en la mácula."
      },
      {
        q: '¿Cuál es el tratamiento de la retinopatía diabética?',
        a: "En estadios precoces, control metabólico. En estadios avanzados con edema macular o retinopatía proliferativa, disponemos de fotocoagulación con láser, fármacos intravítreos (inyecciones antiangiogénicas o corticoides) y, en casos muy severos (hemorragias vítreas o desprendimientos), se requiere cirugía (Vitrectomía)."
      }
    ]
  },
  {
    category: 'Cirugía Refractiva',
    items: [
      {
        q: '¿Qué es la cirugía refractiva?',
        a: "Es el conjunto de técnicas quirúrgicas destinadas a eliminar o reducir la dependencia de gafas y lentes de contacto para ver con claridad, corrigiendo defectos como la miopía, la hipermetropía, el astigmatismo y la presbicia."
      },
      {
        q: '¿Me puedo operar para no depender de gafas o lentillas? ¿todas las personas son aptas?',
        a: "La gran mayoría de las personas son candidatas a alguna técnica refractiva, pero <strong>no todas</strong>. Es imprescindible realizar un minucioso estudio preoperatorio (topografía corneal, paquimetría, etc.) para descartar contraindicaciones (como córneas excesivamente finas o ciertas patologías oculares) y elegir la técnica más segura para cada ojo (láser excimer o lente intraocular)."
      },
      {
        q: '¿Y en cuanto a la vista cansada o presbicia?',
        a: "Sí, la presbicia también puede corregirse quirúrgicamente. La opción más definitiva y exitosa es la extracción del cristalino envejecido (cirugía tipo catarata) y la implantación de una <strong>lente intraocular multifocal de alta tecnología</strong> que restaura la visión a todas las distancias."
      }
    ]
  },
  {
    category: 'Miopía, Hipermetropía y Astigmatismo',
    items: [
      {
        q: '¿Qué es la miopía?',
        a: "Es un defecto de refracción en el que el ojo es más alargado de lo normal o la córnea muy curva, haciendo que las imágenes se enfoquen por delante de la retina. El paciente miope ve mal de lejos pero bien de cerca."
      },
      {
        q: '¿Cómo se trata la miopía?',
        a: "Se corrige ópticamente con gafas o lentes de contacto. La corrección definitiva se realiza mediante <strong>cirugía refractiva con láser Excimer</strong> o, en casos de alta miopía donde el láser no es aconsejable, mediante la implantación de lentes intraoculares fáquicas (ICL)."
      },
      {
        q: '¿Se puede frenar el avance de la miopía?',
        a: "Actualmente existen tratamientos probados científicamente para ralentizar (no detener por completo) la progresión de la miopía en niños y adolescentes, tales como ciertos colirios (atropina diluida) y lentes de contacto o gafas de desenfoque periférico."
      },
      {
        q: '¿Qué es la hipermetropía y cómo se trata?',
        a: "En la hipermetropía, el ojo suele ser más corto de lo normal, provocando que las imágenes se enfoquen por detrás de la retina. Genera fatiga visual y mala visión de cerca (y a veces también de lejos). Se trata con gafas, lentillas, cirugía láser o lentes intraoculares."
      },
      {
        q: '¿Qué es el astigmatismo?',
        a: "Es un defecto producido porque la córnea no es perfectamente esférica (tiene forma más ovalada, como un balón de rugby), lo que causa una visión distorsionada o borrosa a todas las distancias."
      },
      {
        q: 'Tengo astigmatismo, ¿me subirá con los años?',
        a: "El astigmatismo regular suele ser bastante estable a lo largo de la vida. Si un paciente nota un aumento rápido o irregular del astigmatismo, especialmente en la juventud, debe ser examinado para descartar enfermedades degenerativas de la córnea, como el <strong>Queratocono</strong>."
      },
      {
        q: '¿Cómo se trata el astigmatismo?',
        a: "Se corrige con gafas, lentillas tóricas, y quirúrgicamente de forma muy efectiva combinándolo con el tratamiento de la miopía/hipermetropía mediante láser Excimer o lentes intraoculares tóricas."
      }
    ]
  },
  {
    category: 'Oftalmología Pediátrica',
    items: [
      {
        q: '¿Qué es el ojo vago o ambliopía?',
        a: "La ambliopía ocurre cuando un ojo, anatómicamente normal, no alcanza el 100% de visión debido a que el cerebro no aprendió a ver correctamente con él durante la etapa de desarrollo visual (generalmente por diferencias de graduación entre los dos ojos o estrabismo)."
      },
      {
        q: '¿Cuál es el tratamiento para evitar que se haga el ojo vago?',
        a: "El tratamiento debe instaurarse precozmente (antes de los 8-9 años). Consiste en proporcionar la corrección óptica adecuada (gafas) y 'penalizar' al ojo bueno, típicamente mediante <strong>oclusión con parches oculares</strong>, para forzar al cerebro a utilizar y desarrollar la visión del ojo vago."
      },
      {
        q: '¿Qué es el estrabismo?',
        a: "Es la pérdida de paralelismo de los ojos, de manera que cada ojo apunta en una dirección diferente. Aparte del problema estético, en niños suele desencadenar ojo vago si no se corrige a tiempo."
      },
      {
        q: '¿Qué debo hacer si me parece que mi hijo desvía un ojo?',
        a: "Debe acudir <strong>inmediatamente</strong> al oftalmólogo pediátrico. Nunca asuma que 'ya se le pasará con el tiempo'. El estrabismo requiere valoración y tratamiento tempranos para garantizar un correcto desarrollo visual binocular."
      },
      {
        q: '¿Cuál es el tratamiento del estrabismo?',
        a: "Depende de la causa. En algunos casos, prescribir la graduación correcta (gafas) puede resolverlo totalmente. Si persiste el desvío anatómico, el tratamiento es quirúrgico, ajustando la tensión de los músculos extraoculares responsables del movimiento del ojo."
      },
      {
        q: '¿Cuándo debo llevar a mis hijos a una revisión oftalmológica?',
        a: "Recomendamos una primera exploración completa alrededor de los <strong>3 a 4 años de edad</strong>, incluso en ausencia de síntomas manifiestos, para detectar posibles defectos silentes. Si nota alteraciones previas (como desviación ocular o lagrimeo excesivo), la revisión debe ser inmediata."
      }
    ]
  },
  {
    category: 'Otras Consultas',
    items: [
      {
        q: 'Me lloran los ojos, ¿por qué?',
        a: "El lagrimeo continuo (epífora) suele deberse a dos causas principales: una irritación de la superficie ocular (el ojo lagrimea por reflejo frente al viento, alergias o sequedad ocular paradójica) o bien una <strong>obstrucción de la vía lagrimal</strong>, que impide el correcto drenaje de la lágrima hacia la nariz. Si la obstrucción es total, la solución requiere cirugía (dacriocistorrinostomía)."
      }
    ]
  }
];
