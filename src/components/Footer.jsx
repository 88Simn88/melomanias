

const Footer = () => {

  return (
    <footer className="bg-primary text-white p-4 pt-8 text-center flex md:justify-center flex-col gap-5">
      <div className="flex md:flex-row md:justify-center flex-col gap-10">

        <div className="flex justify-center"  >
          <img src="./img/melomaniaslogo.png"
            className="h-24 w-24 md:ml-5 rounded-full"
            alt="" />
        </div>

        <div className="flex flex-col gap-5 space-x-4 mt-2">
          <div className="flex justify-center md:pt-7 ">
            <p>&copy; 2024 MeloManías - Todos los derechos reservados.</p>
          </div>

         {/*  <div className="flex gap-3 justify-center ">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">YouTube</a>
          </div> */}

        </div>

      </div>

      <div className="border-t border-gray-300 my-2"></div>

      <div className=' flex justify-center gap-5 items-center m-0 p-0'>
        <p className=' text-white'>Copyright © 2024</p>

        <p className=' text-white'>Coded by <a className='font-bold text-lime-500' href="https://portfolio-simv3.netlify.app/" target='_blank'>Simn</a> </p>
      </div>

    </footer>
  )
}

export default Footer