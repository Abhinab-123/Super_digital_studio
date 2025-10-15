import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'wedding' | 'editorial' | 'portrait';
  title: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://i.pinimg.com/736x/6d/93/32/6d9332810c8fda1687a715046be474c3.jpg',
      alt: 'Pre-Wedding photos of a couple in a temple during golden hour',
      category: 'wedding',
      title: 'Temple Romance'
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/736x/b4/be/41/b4be41a7f80f4f7ceeb9e6af90ae24a4.jpg',
      alt: 'South Indian look pre-wedding photoshoot',
      category: 'wedding',
      title: 'South Indian Elegance'
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/99/98/17/9998175e84df270a5c67fb25a5d42122.jpg',
      alt: 'Outdoor pre-wedding couple photography',
      category: 'wedding',
      title: 'Forever Always'
    },
    {
      id: 4,
      src: 'https://i.pinimg.com/736x/4e/02/8e/4e028e06759ec55a6f44f27f0e437088.jpg',
      alt: 'Playful pre-wedding couple moment',
      category: 'wedding',
      title: 'Joyful Moments'
    },
    {
      id: 5,
      src: 'https://i.pinimg.com/736x/50/51/2e/50512e3a7547f47699d45acc6a56ae32.jpg',
      alt: 'Elegant couple walking on steps',
      category: 'wedding',
      title: 'Traditional Grace'
    },
    {
      id: 6,
      src: 'https://i.pinimg.com/736x/cb/6f/8b/cb6f8bbfe5e8eae2e54ef637a1b33268.jpg',
      alt: 'Maharashtrian wedding couple photography',
      category: 'wedding',
      title: 'Cultural Beauty'
    },
    {
      id: 7,
      src: 'https://i.pinimg.com/736x/3e/0b/86/3e0b8669fe8d068484ad8967594cbf87.jpg',
      alt: 'Couple picnic pre-wedding photoshoot',
      category: 'wedding',
      title: 'Casual Romance'
    },
  ];


  const filteredImages = galleryImages;

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-background" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-6">
            Timeless
            <span className="text-primary block">Moments Captured</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our collection of luxury weddings, editorial shoots, and intimate portraits 
            that showcase our commitment to artistic excellence.
          </p>
        </motion.div>


        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(image)}
                data-testid={`gallery-image-${image.id}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-serif text-lg font-medium mb-1">{image.title}</h3>
                      <p className="text-sm text-white/80 capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
              data-testid="lightbox-overlay"
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                data-testid="button-prev-image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                data-testid="button-next-image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                  data-testid="lightbox-image"
                />
              </motion.div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="font-serif text-2xl font-light mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 capitalize">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-card-border rounded-lg p-8 lg:p-12">
            <h3 className="font-serif text-3xl font-light text-card-foreground mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's capture your special moments with the same artistry and elegance showcased in our portfolio.
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/919861094038?text=Hello! I would like to book a photography session after seeing your amazing portfolio.', '_blank')}
              data-testid="button-book-session"
            >
              Book Your Session
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;