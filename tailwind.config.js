/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
       {
        primary: "#0070f3", // azul brillante 
        secondary: "#ff6600", // naranja cálido 
        accent: "#4caf50",  //verde acento 
        neutralDark: "#333333", // gris oscuro 
        neutralLight: "#f4f4f4", // gris claro 
        white: "#ffffff", // blanco 
        highlight: "#7e57c2", // púrpura suave para resaltar elementos 
      }, 
    /*    {
      
        primary: '#91A4FC', // Azul pastel
        secondary: '#FF9AA2', // Rosa coral suave
        accent: '#A8E6CF', // Verde menta claro
        neutralDark: '#4A4A4A', // Gris pizarra
        neutralLight: '#F5F5DC', // Crema suave
        white: '#FFFFFF', // Blanco
      },  */
      // Tema Moderno Oscuro
   /*    {
        primary: '#00B8D9', // Cian brillante
        secondary: '#D81B60', // Magenta oscuro
        accent: '#39FF14', // Verde neón
        neutralDark: '#212121', // Gris carbón
        neutralLight: '#B0BEC5', // Gris humo
        white: '#FFFFFF', // Blanco
      },  */
      // Tema Natural Terroso
   /*   {
        primary: '#556B2F', // Verde oliva
        secondary: '#A0522D', // Marrón cálido
        accent: '#FFD700', // Mostaza
        neutralDark: '#2F4F4F', // Gris pizarra
        neutralLight: '#F5F5DC', // Beige claro
        white: '#FFFFFF', // Blanco
      },   */

      

  
  },

  plugins: [],
}
}
