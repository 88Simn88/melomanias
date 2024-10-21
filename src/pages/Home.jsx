import { Link } from "react-router-dom"

const Home = () => {

  const handleScrollToTop = () => {
    window.scrollTo(0,0)
}

    return (
        <>
      {/* Hero Section */}
      <section className="relative md:bg-cover md:bg-center bg-cover h-screen" 
    /*   md:bg-[url('./img/fondoselfie3.jpeg')] bg-[url('./img/fondovertical.png')]" */
       style={{ backgroundImage: 'url("./img/fondoselfie3.jpeg")' }} >

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center pb-20 text-white">
          <h1 className="text-5xl font-bold text-center mb-4">Viví la Música Lírica de Cerca</h1>
          <p className="text-xl text-center mb-8 px-5">Conciertos Educativos para las nuevas generaciones</p>
        </div>
           <div className="absolute top-[580px] md:top-[500px] left-[120px] md:left-[150px]">
{/*             <Link href="#concerts" className="bg-accent hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-2">Ver Próximos Conciertos</Link> */}
            <Link to={"/contacto"}
            onClick={handleScrollToTop}
            className="bg-highlight hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mx-2">Contactanos</Link>
          </div> 
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">¿Qué es MeloManías?</h2>
        <p className="text-lg mb-6 text-neutral-dark">
          MeloManías es un proyecto que lleva la magia de la música lírica a las escuelas, a través de conciertos didácticos diseñados para enseñar a los niños y jóvenes sobre la historia, el impacto y la belleza de la música clásica. Nuestros espectáculos interactivos permiten que los estudiantes participen y descubran el poder transformador de la música en su entorno educativo.
        </p>
      </section>

      {/* Impact Section */}
      <section  className="p-8 bg-neutralLight text-center">
        <h2 className="text-4xl font-bold mb-6 text-highlight">Impacto de MeloManías en las Escuelas</h2>
        <p className="text-lg mb-8 text-neutral-dark">Una experiencia que va más allá del aula</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Tarjeta 1*/}
          <div className="max-w-xs p-4 bg-white border border-neutralDark rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-highlight mb-2">Educación Musical</h3>
            <p className="text-neutral-dark">Promovemos el conocimiento de la música clásica y la ópera, así como su relevancia cultural.</p>
          </div>

           {/* Tarjeta 2*/}
          <div className="max-w-xs p-4 bg-white border border-neutralDark rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-highlight mb-2">Desarrollo Cognitivo</h3>
            <p className="text-neutral-dark">Estimula la creatividad, la concentración y el pensamiento crítico en los estudiantes.</p>
          </div>

           {/* Tarjeta 3*/}
          <div className="max-w-xs p-4 bg-white border border-neutralDark rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-2 text-highlight">Valores y Comunidad</h3>
            <p className="text-netural-dark">Fomentamos el trabajo en equipo, el respeto y el aprecio por el arte en la comunidad educativa.</p>
          </div>
        </div>
      </section>

     {/*  {/* Testimonials Section 
      <section id="testimonials" className="p-8 ">
        <h2 className=" text-4xl font-bold text-center mb-6">Lo que Dicen los Maestros y Alumnos</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="max-w-md p-4 bg-white rounded-lg shadow-md">
            <p className="italic mb-2">"Ver la reacción de mis alumnos ante la música fue increíble, una experiencia inolvidable para todos."</p>
            <p className="font-bold">Profe. Juan López, Escuela Primaria San Martín</p>
          </div>
          <div className="max-w-md p-4 bg-white rounded-lg shadow-md">
            <p className="italic mb-2">"No sabía que la música clásica podía ser tan emocionante. ¡Quiero aprender más!"</p>
            <p className="font-bold">Sofía, alumna de 5º grado</p>
          </div>
        </div>
      </section>

      {/* Concerts Section 
      <section id="concerts" className="p-8 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Nuestros Próximos Conciertos Didácticos</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold">Concierto 1</h3>
            <p>Fecha: 10 de octubre | Ubicación: Escuela Nº 123</p>
            <a href="#" className="text-blue-500 hover:underline">Ver más</a>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold">Concierto 2</h3>
            <p>Fecha: 20 de noviembre | Ubicación: Escuela Nº 456</p>
            <a href="#" className="text-blue-500 hover:underline">Ver más</a>
          </div>
        </div>
      </section>
 */}
    

        </>
    )
}

export default Home