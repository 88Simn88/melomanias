import '@fortawesome/fontawesome-free/css/all.min.css';


import React from 'react';

const Contacto = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('./img/fondocontacto.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-8">Contactanos</h2>
        <p className='text-white text-3xl pb-10 text-center font-serif px-5'>
            En nuestras redes para llevar una bella experiencia a tu escuela!
        </p>
        <div className="flex space-x-6">
          {/* WhatsApp */}
          <a href="https://wa.me/+541130307196" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp text-5xl hover:text-green-500"></i>
          </a>
          {/* Redes sociales */}
         {/*  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-5xl hover:text-blue-500"></i>
          </a> */}
          <a href="https://www.instagram.com/melomanias.cd" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-5xl hover:text-pink-500"></i>
          </a>
        </div>
        <a className='p-5 text-xl text-white' href='mailto:melomanias.cd@gmail.com'>✉ melomanias.cd@gmail.com</a>
      </div>
    </div>
  );
}

export default Contacto;
