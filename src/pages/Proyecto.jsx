import React from 'react';

const Proyecto = () => {
  return (
    <section className="bg-white p-8 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-900 mb-4 ">Concierto Didáctico de Música Lírica</h2>
        
        {/* General Objective */}
        <h3 className="text-2xl font-semibold text-black mb-3">Objetivo General</h3>
        <p className="text-lg text-gray-700 mb-6">
          Fomentar el interés por la música clásica y la ópera entre los estudiantes, proporcionando una experiencia educativa interactiva y entretenida.
        </p>

        {/* Section 1: Introduction */}
        <h3 className="text-2xl font-semibold text-black mb-3">1. Introducción</h3>
        <p className="text-lg text-gray-700 mb-6">
          La música lírica es un importante patrimonio cultural que puede enriquecer la educación de los jóvenes. Este proyecto propone la realización de un concierto didáctico que permita a los estudiantes descubrir el mundo de la ópera y la música clásica a través de interpretaciones en vivo y explicaciones didácticas.
        </p>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 2: Justification */}
        <h3 className="text-2xl font-semibold text-black mb-3">2. Justificación</h3>
        <p className="text-lg text-gray-700 mb-2">La integración de la música lírica en la educación puede:</p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Desarrollar habilidades auditivas y apreciativas.</li>
          <li>Fomentar la creatividad y la expresión artística.</li>
          <li>Ampliar el horizonte cultural de los estudiantes.</li>
        </ul>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 3: Target Audience */}
        <h3 className="text-2xl font-semibold text-black mb-3">3. Público Objetivo</h3>
        <p className="text-lg text-gray-700 mb-6">
          Estudiantes de educación primaria y secundaria (de 6 a 18 años), así como sus docentes.
        </p>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 4: Methodology */}
        <h3 className="text-2xl font-semibold text-black mb-3">4. Metodología</h3>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">4.1 Actividades Previas</h4>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Charlas Introductorias: Talleres en el aula sobre historia de la música lírica y sus principales exponentes.</li>
          <li>Material Didáctico: Entrega de folletos informativos sobre las obras y compositores que se interpretarán.</li>
        </ul>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">4.2 Concierto Didáctico</h4>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
       {/*    <li>Fecha: [Especificar fecha]</li>
          <li>Lugar: [Indicar lugar, preferiblemente en la escuela o un auditorio cercano]</li>
          <li>Duración: Aproximadamente 1 hora.</li> */}
          <li>Contenido:
            <ul className="list-disc list-inside ml-6">
              <li>Interpretación de arias y duetos.</li>
              <li>Explicaciones breves sobre cada pieza, su contexto y significado.</li>
              <li>Interacción con el público: preguntas y respuestas.</li>
            </ul>
          </li>
        </ul>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 5: Participating Artists */}
        <h3 className="text-2xl font-semibold text-black mb-3">5. Artistas Participantes</h3>
        <p className="text-lg text-gray-700 mb-6">
          Mínimo 2 cantantes líricos profesionales de distinto registro y un pianista.
        </p>
        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 6: Required Resources */}
        <h3 className="text-2xl font-semibold text-black mb-3">6. Recursos Necesarios</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Espacio: Auditorios o aulas adecuadas.</li>
          <li>Equipo: Sonido (micrófonos, altavoces), iluminación, piano o teclado.</li>
          <li>Material Didáctico: Folletos y guías para los estudiantes.</li>
        </ul>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 7: Budget */}
        <h3 className="text-2xl font-semibold text-black mb-3">7. Presupuesto</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Honorarios para los artistas.</li>
          <li>Alquiler de equipo técnico.</li>
          <li>Materiales impresos.</li>
          <li>Costos de promoción y difusión del evento.</li>
        </ul>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 8: Evaluation */}
        <h3 className="text-2xl font-semibold text-black mb-3">8. Evaluación</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Encuestas a los estudiantes y docentes sobre su experiencia.</li>
          <li>Análisis de la participación y el interés suscitado.</li>
        </ul>

        <div className="border-t border-gray-300 my-10"></div>

        {/* Section 9: Conclusion */}
        <h3 className="text-2xl font-semibold text-black mb-3">9. Conclusión</h3>
        <p className="text-lg text-gray-700 mb-6">
          El concierto didáctico de música lírica es una oportunidad única para que los estudiantes se sumerjan en la belleza de la ópera y la música clásica. Con su implementación, buscamos no solo educar, sino también inspirar a la próxima generación de amantes de la música.
        </p>
      </div>
    </section>
  );
};

export default Proyecto;
