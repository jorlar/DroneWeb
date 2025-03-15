import React from "react";
import { Shield, Target, Clock, ChevronRight, Zap, Cloud } from "lucide-react";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className='relative bg-industrial-950 pt-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
                Ta ditt <span className='text-energy-500'>perspektiv </span>til
                nye høyder
              </h1>
              <p className='mt-6 text-xl text-industrial-300'>
                Profesjonelle droneløsninger for luftfotografi, video og
                innspeksjon
              </p>
              <div className='mt-8'>
                <a
                  href='/contact'
                  className='btn-primary inline-flex items-center'>
                  Start her
                  <ChevronRight className='ml-2 h-5 w-5' />
                </a>
              </div>
            </div>
            <div className='relative h-64 md:h-96'>
              <img
                src='https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
                alt='Drone flying in sunset'
                className='rounded-lg object-cover w-full h-full border-2 border-industrial-950 shadow-harsh'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id='features' className='py-24 bg-industrial-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-industrial-950'>
              Hvorfor velge oss
            </h2>
            <p className='mt-4 text-lg text-industrial-600'>
              Industriledende dronetjenester med nyeste teknologi
            </p>
          </div>
          <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='card-industrial p-6'>
              <Shield className='h-12 w-12 text-energy-500' />
              <h3 className='mt-4 text-xl font-bold text-industrial-950'>
                Sikkerhet først
              </h3>
              <p className='mt-2 text-industrial-600'>
                Sertifiserte piloter og sertifisert utstyr for sikre
                opperasjoner
              </p>
            </div>
            <div className='card-industrial p-6'>
              <Target className='h-12 w-12 text-energy-500' />
              <h3 className='mt-4 text-xl font-bold text-industrial-950'>
                Presisjon
              </h3>
              <p className='mt-2 text-industrial-600'>
                Nøyaktig datainnsamling og detaljerte analyser
              </p>
            </div>
            <div className='card-industrial p-6'>
              <Clock className='h-12 w-12 text-energy-500' />
              <h3 className='mt-4 text-xl font-bold text-industrial-950'>
                Rask respons
              </h3>
              <p className='mt-2 text-industrial-600'>
                Rask flåtestyring og effektiv prosjektgjennomføring
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div id='services' className='py-24 bg-industrial-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center text-white'>
            Våre Tjenester
          </h2>
          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ServiceCard
              icon={<Cloud className='h-8 w-8' />}
              title='Luft Fotografering'
              description='Høyoppløselige bilder og video for bygningsmasser, eventer, og markedsføring'
            />
            <ServiceCard
              icon={<Target className='h-8 w-8' />}
              title='Kartlegging'
              description='Presis topografisk kartlegging og 3D-modellering for konstruksjon og utvikling'
            />
            <ServiceCard
              icon={<Zap className='h-8 w-8' />}
              title='Innspeksjon av infrastruktur'
              description='Detaljert innspeksjon av bygninger, broer og fasiliteter'
            />
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className='card-industrial bg-white p-6'>
      <div className='text-energy-500'>{icon}</div>
      <h3 className='mt-4 text-xl font-bold text-industrial-950'>{title}</h3>
      <p className='mt-2 text-industrial-600'>{description}</p>
    </div>
  );
}

export default HomePage;
