import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export function Services() {
  const services = [
    {
      title: 'General Supplies',
      description: 'Providing a broad catalog of essential items for everyday business operations, including office supplies, stationery, branding services, promotional items, and other consumables.',
      image: 'https://images.unsplash.com/photo-1616964666162-31f61986d9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Personal Protective Gear (PPE)',
      description: 'Supplying a comprehensive range of safety equipment and apparel, including masks, gloves, hard hats, safety vests, and footwear, to ensure workplace safety and compliance.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Furniture',
      description: 'Providing high-quality office, commercial, and residential furniture solutions that are both functional and aesthetically pleasing.',
      image: 'https://images.unsplash.com/photo-1595847902982-f20169d4ddad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Plumbing',
      description: 'Delivering professional plumbing services and supplying a full line of plumbing materials, fixtures, and equipment for commercial and residential use.',
      image: 'https://images.unsplash.com/photo-1568868053799-0728ed208ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Cleaning',
      description: 'Providing professional cleaning services for office, commercial, and residential spaces with high-quality products and equipment.',
      image: 'https://images.unsplash.com/photo-1774978612572-9ad8abb3027f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Electricals',
      description: 'Supplying a variety of electrical products and offering expert electrical installation and maintenance services.',
      image: 'https://images.unsplash.com/photo-1553873002-785d775854c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Products & Services</h2>
          <div className="w-24 h-1 bg-[#2563eb] dark:bg-[#3b82f6] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Keita Holdings Limited offers a diverse range of products and services, carefully curated to support the operational and safety needs of various organizations.
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all h-full">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
