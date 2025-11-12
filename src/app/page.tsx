import Image from "next/image"

         /* <img src="/images/profile.JPEG" alt="Foto de Eduardo Solano" className="w-full h-full object-cover" /> */

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4">
      {/* Overlays oscuros */}
      <div className="absolute inset-0 bg-background-dark opacity-90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-0" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Eduardo Solano
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Frontend Developer — Creating interactive and performance-driven websites
          </p>
          <button className="mt-8 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide transition-transform hover:scale-105">
            <span>See my work</span>
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary">

         { <Image src="/images/profile.JPEG"
          alt="Photo of Eduardo Solano"
         className="w-full h-full object-cover"  // Siempre se muestra la imagen
         // className="hidden md:block"  // Para movil no se muestra a partir de 768px hacia abajo
          height={760}
          width={1000}/>}


         { /* <Image src="/images/profile.JPEG"
          alt="Photo of Eduardo Solano"
          className="hidden md:block"  // Para movil no se muestra a partir de 768px hacia abajo
          height={760}
          width={1000}/> */}

          { /*<Image src="/images/profile.JPEG"
          alt="Photo of Eduardo Solano"
          className="block md:hidden"  // Para movil no se muestra a partir de 768px hacia abajo
          height={760}
          width={1000}/> */}

          </div>
        </div>
      </div>
    </div>
  )
}
