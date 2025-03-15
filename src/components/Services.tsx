import React from "react";
import {
  Camera,
  Building2,
  Map,
  Video,
  Mountain,
  Factory,
  Ruler,
  Wind,
  Radio,
} from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: <Camera className='h-8 w-8' />,
    title: "Luft Fotografering",
    description:
      "Profesjonelle dronebilder for eiendom, eventer og markedsføring",
    price: "5000 NOK",
    features: [
      "Høy-oppløselige bilder",
      "Profesjonell redigering",
      "Rask leveranse",
      "Flere vinkler",
      "Digitale filer levert direkte",
    ],
  },
  {
    icon: <Video className='h-8 w-8' />,
    title: "Drone Video",
    description:
      "Cinematiske dronevideoer for kommersiell bruk og kreative prosjekter",
    price: "10.000 NOK",
    features: [
      "4K video",
      "Custom flyplan",
      "Profesjonell redigering",
      "Lisensierte musikkfiler",
      "RAW-filer inkludert",
    ],
  },
  {
    icon: <Building2 className='h-8 w-8' />,
    title: "Innspeksjon av infrastruktur",
    description: "Detaljert innspeksjon av bygninger og infrastruktur fra luft",
    price: "15.000 NOK",
    features: [
      "Termiske bilder",
      "Detaljerte rapporter",
      "3D-modellering",
      "Skadeforebygging og retting",
      "Vedlikeholdsplanlegging",
    ],
  },
  {
    icon: <Map className='h-8 w-8' />,
    title: "Kartleggingstjenester",
    description: "Presise kartlegginsgtjenester fra luft",
    price: "Fra 15.000 NOK",
    features: [
      "Topografisk kartlegging",
      "Volumkalkulasjoner",
      "GPS-koordiansjon",
      "Digital modellering",
    ],
  },
  {
    icon: <Mountain className='h-8 w-8' />,
    title: "Miljø monitorering",
    description: "Dronetjenester for miljøvurdering og monitorering",
    price: "Fra 20.000 NOK",
    features: [
      "Analyse av vegetasjon",
      "Monitorering av dyreliv",
      "Jevnlig monitorering",
      "Analyse av innsamlet data",
    ],
  },
  {
    icon: <Factory className='h-8 w-8' />,
    title: "Industriell innspeksjon",
    description: "Gjennomgående innspeksjon av industrielle byggeplasser",
    price: "Fra 15.000 NOK",
    features: [
      "Innspeksjon av sikkerhet",
      "Innspeksjon av utstyr i høyden",
      "Monitorering av fremgang",
      "Risikoanalyse",
    ],
  },
  {
    icon: <Ruler className='h-8 w-8' />,
    title: "Byggetrinnsinnspeksjon",
    description:
      "Jevnlig dokumentasjon av byggeprosjekter for fremgangsrapport",
    price: "Fra 50.000 NOK",
    features: [
      "Ukentlig oppdatering",
      "Fremgangsrapporter",
      "Dokumentasjon av anlegg",
      "Digitale Arkiver",
    ],
  },
  {
    icon: <Radio className='h-8 w-8' />,
    title: "Linjeinnspeksjon",
    description: "Luftinnspeksjon av telecom- og strømlinjer",
    price: "Fra 20.000 NOK",
    features: [
      "Innspeksjon av teleantenner",
      "Utstyrsanalyse",
      "Planlegging av vedlikehold",
      "Analyse av vegetasjon",
    ],
  },
];

function Services() {
  return (
    <div className='pt-16 min-h-screen bg-industrial-100'>
      {/* Header */}
      <div className='py-16 bg-industrial-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-white'>
              Våre <span className='text-energy-500'>Tjenester</span>
            </h1>
            <p className='mt-4 text-xl text-industrial-300'>
              Gjennomgående droneløsninger for enhver industripartner
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='card-industrial'>
              <div className='p-6'>
                <div className='flex items-center justify-between'>
                  <div className='text-energy-500'>{service.icon}</div>
                  <span className='text-2xl font-bold text-energy-500'>
                    {service.price}
                  </span>
                </div>
                <h3 className='mt-4 text-xl font-bold text-industrial-950'>
                  {service.title}
                </h3>
                <p className='mt-2 text-industrial-600'>
                  {service.description}
                </p>
                <ul className='mt-6 space-y-3'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-industrial-600'>
                      <div className='h-1.5 w-1.5 bg-energy-500 rounded-full mr-2' />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className='mt-8 w-full btn-primary'>Ta Kontakt</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
