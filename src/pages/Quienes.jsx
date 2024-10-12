import React from "react";
import { useMediaQuery } from "react-responsive";



const teamMembers = [
  {
    name: 'Daniela Pazzano',
    title: 'Soprano Lírica',
    description1: `Su camino en el arte comenzó a muy temprana edad, lo que la llevó a estudiar distintos tipos de danza, piano, teatro y canto. Una vez terminado el secundario continuó su formación musical en el Conservatorio de Música Alberto Ginastera de Morón. `,
    description2: `Estudia técnica vocal con la Mtra. Virginia Lia Molina; entre sus maestros de repertorio se encuentran el Mtro. Lionel Fischer, la Mtra. Gabriela Battipede y la Mtra. Rozita Zozulia.
    Ha participado de cursos y masterclasses dictados por los maestros Lizzie Waisse (actuación para cantantes líricos), Guillermo Ópitz (Fundación Música de Cámara) y André Dos Santos (repertorio francés).`,
    description3: `En el año 2016 protagonizó una adaptación de “Lo que me costó el amor de Laura” de Alejandro Dolina, con el grupo teatral “En mangas de camisa”, perteneciente al Colegio Don Bosco de Ramos Mejía.
    En los últimos años formó parte de producciones independientes, en los siguientes roles: Amore (Orfeo ed Euridice, C. W. Gluck) con la compañía Trama d’Arte; Papagena (Die Zauberflöte, W. A. Mozart) con la compañía Celebrarte Música; Kate Pinkerton (Madama Butterfly, G. Puccini), Erste Dame y Pamina (Die Zauberflöte, W. A. Mozart) con la compañía Exsultate Lyrica.`,
    description4: `Participó en conciertos solistas en la parroquia San Pedro Apóstol en Villa Devoto, la parroquia Santa Teresita en Saénz Peña, en el Cine Teatro Ocean y en la Catedral de Morón.
    Actualmente se encuentra participando en la Clínica de la Voz en el Teatro Argentino de La Plata, dictada por la soprano Paula Almerares.`,
    imageUrl: '/img/dani2.jpeg', // Ruta de la imagen de María
    igUrl: "",
    youtubeUrl: "",
    youtubeIcon: "",
  },
  {
    name: 'Franco Sapir',
    title: 'Tenor Lírico',
    description1: `Tenor argentino. Comenzó sus estudios de técnica vocal con la Maestra Virginia Lía Molina,
    en el año 2010, a la edad 16 años. Posteriormente, en el año 2013, formalizó sus estudios en el Conservatorio 
    de Música de San Martín “Alfredo Luis Schiuma”. En la actualidad se encuentra trabajando, en el área de 
    técnica vocal, con la Mtra. Alejandra Malvino. Ha trabajado Repertorio Operístico y 
    Camarístico con los Maestros Martha Fornella y Lionel Fischer. `,
    description2: `En 2019 trabajó técnicas de la actuación con la Maestra Lizzie Waisse en Bayreuth Porteño Ópera Estudio.` ,
    description3: `Ha participado de diversas Master Class, en calidad de oyente y como participante activo, dictadas por 
    Maestros de gran renombre y trayectoria. Tales como Lizzie Waisse, Graciela de Gyldenfeldt, Juan Diego Flórez.`,
    description4: `Ha formado parte del elenco de diversas producciones en calidad de solista y como coreuta,
    tales como Orfeo ed Euridice de Glück, Dido & Aeneas de Purcell, L’Elisir D’Amore de Donizetti,
    Carmen de Bizet, Turandot de Puccini, entre otras.` ,
    imageUrl: '/img/franco1.jpeg', // Ruta de la imagen de Jorge
    igUrl: "",
    youtubeUrl: "",
    youtubeIcon: "",
  },
  { 
    name: 'Simón Sánchez',
    title: 'Pianista y Compositor',
    description1: `Comenzó sus estudios musicales con los maestros Gabriel Goldenberg y Marcos Puente Olivera en Piano y con los maestros Marcelo Di Matthaeis, Claudio Schulkin, Jorge Sad y Eduardo Gramegna en Composición`,
    description2: `En el año 2008 fue becado por el Fondo Nacional De las Artes (FNA) para publicar el libro Introducción a la obra y al pensamiento
    de Juan Carlos Paz y para grabar el Cd Introducción a la obra pianística de juan Carlos Paz.
    En el año 2015 es becado por el FNA y por el Centro Cultural Kirchner para participar del IV
    encuentro nacional de improvisación y composición musical`,
    description3: `Como Compositor ha estrenado obras en Argentina y en Alemania para conjuntos vocales e instrumentales.
    En Julio de 2017 estrena su primer Ópera para niños Vulgarcita en el Teatro Marienheim.`,
    description4: `Como pianista preparador y director musical trabajó en las producciones de Dido y Eneas (2017),
    Gianni Scchichi(2017), El Empresario Teatral(2017) y Suor Angelica(2018-2019-2020 y 2023).
    Ha realizado dos giras de conciertos como pianista y organista en Obernhof, Lahnstein, Dausenau(2018),
    Giessen, Nassau y Frankfurt Am Main(2019) en Alemania. `,
    imageUrl: '/img/simon2.jpg', // Ruta de la imagen de Simón
    igUrl: "https://www.instagram.com/simn_sanchez?igsh=OHNpaWJ2YW0waW41",
    youtubeUrl: "https://www.youtube.com/@_simonsanchez",
    youtubeIcon: "./img/youtsf1.jpg",
  },
];

const QuienesSomos = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });

  return (

    <div className="space-y-12 py-28">
      <h2
      className="text-center font-bold text-4xl md:text-7xl text-primary"
      >Nuestro Staff</h2>
    {teamMembers.map((person, index) => (
      <div key={index} className="flex flex-col md:flex-row md:w-4/5 m-auto items-center space-y-4 md:space-y-0 md:space-x-6">
        <img src={person.imageUrl} alt={person.name} className="w-1/3  object-cover rounded-lg shadow-md" />
        <div>
          <h2 className="text-3xl font-bold font-serif text-center">{person.name}</h2>
          <h3 className="text-xl p-5 text-center text-primary">{person.title}</h3>
        { isMobile ? (
          <p 
          className="mt-2 p-2 max-h-52 overflow-y-auto w-4/5 m-auto"
          >
          {person.description1} 
          {person.description2} 
          {person.description3} 
          {person.description4}
          </p>
          ): (
          <>
           <p className="text-gray-700 mt-2">{person.description1}</p>
          <p className="text-gray-700 mt-2">{person.description2}</p>
          <p className="text-gray-700 mt-2">{person.description3}</p>
          <p className="text-gray-700 mt-2">{person.description4}</p> 
          </>
          )}
          <div className="md:h-20 h-16 flex pt-5 gap-5 justify-center">
           <a href={person.igUrl}
           target="_blank"
           >
            <img 
            className="h-full w-full rounded-xl shadow shadow-white"
            src="./img/instasf2.jpg" alt="" />
            </a> 
            <a href={person.youtubeUrl}
            target="_blank"
            >
              {(person.youtubeUrl)?
              <img src={person.youtubeIcon}
              className="h-full w-full rounded-xl shadow shadow-white"
              alt="" />
              : <></>
              
            }
            </a>
          </div>
          <div className="border-t border-gray-300 my-10"></div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default QuienesSomos