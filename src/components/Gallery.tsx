import React, { useState } from "react";
import { Play, X } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  videoType?: "youtube" | "vimeo";
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1742045500931-442b168b12e4?q=80&w=3161&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1742045500931-442b168b12e4?q=80&w=3161&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "M/B Bitihorn by winter",
    description:
      "Norges høyestseilende passasjerbåt i vinteropplag ved innsjøen Bygdin",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/yoMC0xvCaDk?si=ZGwQB85OAw5z-Qxo",
    thumbnail:
      "https://images.unsplash.com/photo-1742054985592-ab30f8ec4023?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Showcase - Slidreåsen og Stølsvidda",
    description:
      "Herlig dronevideo med footage fra Stølsvidda og Slidreåsen i Valdres",
    videoType: "youtube",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1742055350278-9b594483a26e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1742055350278-9b594483a26e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Bygdin - 2025",
    description: "Bilde fra innspeksjon av vassdraget i mars 2025",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1742118454773-7062de10ff13?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1742118454773-7062de10ff13?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Takinnspeksjon - 2024",
    description: "Bilde tatt under takinnspeksjon på skifertak i Slidre, 2024",
  },
  // {
  //   type: "video",
  //   url: "https://www.youtube.com/embed/LXb3EKWsInQ",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1552163298-c2efc45b5acc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //   title: "Industrial Inspection",
  //   description: "Professional drone inspection of industrial facilities",
  //   videoType: "youtube",
  // },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1742055931859-77f65b68a939?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1742055931859-77f65b68a939?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kujakt - Slidre",
    description: "Bistand ved sanking av kyr i Valdres 2024",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1743196809417-cf5b20acc06b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1743196809417-cf5b20acc06b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Takinspeksjon - Røn 2025",
    description: "Inspeksjon av tak på Røn Samfunnshus mars 2025",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1744399099412-a3e8ed922f1b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1744399099412-a3e8ed922f1b?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Inspesksjon av solceller",
    description: "Inspeksjon av solceller i Valdres, 2025",
  },
  // {
  //   type: "video",
  //   url: "https://www.youtube.com/embed/yoMC0xvCaDk?si=ZGwQB85OAw5z-Qxo",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //   title: "Cinematic Drone Reel",
  //   description: "Showcase of our cinematic drone capabilities",
  //   videoType: "youtube",
  // },
];

function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const getVideoEmbedUrl = (item: MediaItem) => {
    if (item.videoType === "youtube") {
      // Add additional YouTube parameters for better embedding
      return `${item.url}?autoplay=1&rel=0&modestbranding=1`;
    }
    return item.url;
  };

  return (
    <div className='pt-16 min-h-screen bg-industrial-100'>
      {/* Header */}
      <div className='py-16 bg-industrial-950'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-white'>
              Vårt <span className='text-energy-500'>Galleri</span>
            </h1>
            <p className='mt-4 text-xl text-industrial-300'>
              Her finner du en samling av tidligere jobber og oppdrag vi har
              hatt.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className='group cursor-pointer'
              onClick={() => setSelectedItem(item)}>
              <div className='card-industrial overflow-hidden'>
                <div className='aspect-w-16 aspect-h-9 relative'>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='w-full h-full object-cover'
                  />
                  {item.type === "video" && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='bg-energy-500 rounded-full p-3 border-2 border-industrial-950'>
                        <Play className='h-8 w-8 text-industrial-950' />
                      </div>
                    </div>
                  )}
                </div>
                <div className='p-4'>
                  <h3 className='text-lg font-bold text-industrial-950'>
                    {item.title}
                  </h3>
                  <p className='mt-1 text-sm text-industrial-600'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className='fixed inset-0 z-50 overflow-y-auto bg-industrial-950/90'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'>
          <div className='flex items-center justify-center min-h-screen p-4'>
            <div className='card-industrial bg-white max-w-4xl w-full mx-auto relative'>
              <button
                onClick={() => setSelectedItem(null)}
                className='absolute -top-4 -right-4 bg-energy-500 text-industrial-950 rounded-full p-2 border-2 border-industrial-950 hover:scale-110 transition-transform'>
                <X className='h-6 w-6' />
              </button>

              <div className='p-6'>
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className='w-full h-auto rounded-lg border-2 border-industrial-950'
                  />
                ) : (
                  <div className='aspect-w-16 aspect-h-9'>
                    <iframe
                      src={getVideoEmbedUrl(selectedItem)}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='w-full h-full rounded-lg border-2 border-industrial-950'></iframe>
                  </div>
                )}
                <div className='mt-4'>
                  <h3 className='text-xl font-bold text-industrial-950'>
                    {selectedItem.title}
                  </h3>
                  <p className='mt-2 text-industrial-600'>
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
