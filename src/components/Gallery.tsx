import React, { useState } from "react";
import { Play, X } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  url: string;
  thumbnail: string;
  title: string;
  description: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    url: "https://unsplash.com/photos/8-xwWFnlEnU",
    thumbnail: "https://unsplash.com/photos/8-xwWFnlEnU",
    title: "Aerial City View",
    description: "Stunning aerial view of a modern cityscape at sunset",
  },
  {
    type: "video",
    url: "https://youtu.be/yoMC0xvCaDk?si=uWPlaC1Zoxz2CaN4",
    thumbnail:
      "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Coastal Drone Flight",
    description: "Beautiful drone footage of coastal landscapes",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Mountain Range",
    description: "Aerial view of snow-capped mountain ranges",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Agricultural Fields",
    description: "Geometric patterns of agricultural landscapes from above",
  },
  {
    type: "video",
    url: "https://player.vimeo.com/video/517935167",
    thumbnail:
      "https://images.unsplash.com/photo-1552163298-c2efc45b5acc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Urban Exploration",
    description: "Dynamic aerial footage of urban landscapes",
  },
  {
    type: "image",
    url: "https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1494894194458-0174142560c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    title: "Beach Sunset",
    description: "Breathtaking aerial view of a tropical beach at sunset",
  },
];

function Gallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

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
              Ta en titt på bilder og videoer fra tidligere jobber vi har
              utført.
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
                      src={selectedItem.url}
                      allow='autoplay; fullscreen; picture-in-picture'
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
