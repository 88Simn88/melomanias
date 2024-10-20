import React from 'react';

const Proyecto = () => {
  return (
    <section className="bg-white p-8 pt-24">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Concierto Didáctico de Música Lírica
        </h2>

        {/* Objective */}
        <p className="text-lg text-gray-700 mb-6">
        <strong>Objetivo:</strong> El principal objetivo de este proyecto es fomentar el interés por la ópera y la música clásica en los estudiantes de primaria y secundaria. A través de un concierto interactivo, buscamos crear un espacio donde los jóvenes puedan descubrir y disfrutar de estas formas musicales, que muchas veces están alejadas de su entorno cotidiano. Con interpretaciones en vivo y explicaciones didácticas, pretendemos despertar la curiosidad, desarrollar habilidades auditivas y apreciativas, y ofrecer una experiencia educativa que inspire el amor por la música en las nuevas generaciones. La música lírica, como patrimonio cultural, es una herramienta poderosa para enriquecer la formación artística y cultural de los estudiantes.
        </p>

        {/* Activities */}
        <p className="text-lg text-gray-700 mb-6">
          <strong>Actividades:</strong>
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>Charlas Introductorias: Breves talleres sobre historia de la música lírica.</li>
          <li>Concierto Didáctico: Interpretación en vivo de arias y duetos con interacción para los estudiantes.</li>
        </ul>

        {/* Audience */}
        <p className="text-lg text-gray-700 mb-6">
          <strong>Público Objetivo:</strong> Estudiantes de primaria y secundaria (6-18 años).
        </p>

        {/* Resources */}
        <p className="text-lg text-gray-700 mb-6">
          <strong>Recursos Necesarios:</strong> Espacios adecuados, equipo de sonido, piano, material didáctico.
        </p>

        {/* Artists */}
        <p className="text-lg text-gray-700 mb-6">
          <strong>Artistas Participantes:</strong> Cantantes líricos profesionales y un pianista.
        </p>
      </div>
    </section>
  );
};

export default Proyecto;
