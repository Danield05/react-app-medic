import React from 'react';
import { Navbar } from '../components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-9/12 h-1/2"> {/* Limita el ancho del carrusel */}
        <Carousel
          showThumbs={false} // Oculta los botones de navegación
          showStatus={false} // Oculta el estado del carrusel
          infiniteLoop={true} // Habilita el bucle infinito
          autoPlay={true} // Inicia la reproducción automática
          interval={4000} // Cambia la imagen cada 4 segundos (ajusta según tus necesidades)
        >
          <div>
            <img
              src="https://saludvip.com/wp-content/uploads/2022/06/differences-medical-02-1080x675.jpg"
              alt="Imagen 1"
              className="mx-auto w-64 h-64" // Ancho y alto fijo para todas las imágenes
            />
          </div>
          <div>
            <img
              src="https://empresasecooperativas.com.br/wp-content/uploads/2019/04/clinica-médica-1024x535.jpg"
              alt="Imagen 2"
              className="mx-auto w-64 h-64" // Ancho y alto fijo para todas las imágenes
            />
          </div>
          <div>
            <img
              src="https://grupoptm.com/wp-content/uploads/2022/11/historia-clinica.jpg"
              alt="Imagen 3"
              className="mx-auto w-64 h-64" // Ancho y alto fijo para todas las imágenes
            />
          </div>
        </Carousel>
      </div>
      <div className='p-4'>
        <div className='bg-orange-50 rounded-lg shadow-lg p-6'>
          <h1 className='text-3xl font-bold mb-4 text-blue-700'>Acerca de Medic App</h1>
          <p className='text-lg'>
            ¡Hola! Bienvenidos a Medic App, tu solución para agendar citas médicas de manera fácil y segura.
          </p>
          <p className='text-lg mt-4'>
            En Medic App, te conectamos con los mejores doctores de la ciudad. Nuestro equipo de médicos altamente calificados está comprometido en brindarte la mejor atención médica.
          </p>
          <p className='text-lg mt-4'>
            A través de nuestra plataforma, podrás acceder a una amplia gama de servicios médicos ofrecidos por nuestra clínica. Además, ofrecemos consultas médicas en línea para tu comodidad.
          </p>
          <p className='text-lg mt-4'>
            Como clínica, nos enorgullece servir a la comunidad y estamos comprometidos con la excelencia en el cuidado de la salud. Si tienes alguna pregunta o deseas programar una cita, no dudes en utilizar Medic App para contactarnos.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage;
