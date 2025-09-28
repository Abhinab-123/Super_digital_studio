import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Luxury_wedding_hero_image_8e770950.png';

const Hero = () => {
  const handleBookService = () => {
    window.open('https://wa.me/919861094038?text=Hello! I would like to book your luxury wedding services.', '_blank');
  };

  const handleViewPortfolio = () => {
    console.log('Scrolling to gallery section');
    // TODO: Implement smooth scroll to gallery section
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury Wedding Photography"
          className="w-full h-full object-cover"
          data-testid="hero-background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-headline"
          >
            Crafting Timeless
            <br />
            <span className="text-primary font-normal">Editorial & Wedding</span>
            <br />
            Experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="font-sans text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-subtitle"
          >
            Where luxury meets artistry. We capture your most precious moments with 
            unparalleled elegance and sophistication.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={handleBookService}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-base px-8 py-3 group"
              data-testid="button-book-service"
            >
              Book Your Service
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              variant="outline"
              size="lg"
              onClick={handleViewPortfolio}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm font-sans text-base px-8 py-3 group"
              data-testid="button-view-portfolio"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-16 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            data-testid="trust-indicators"
          >
            <div className="text-center">
              <div className="font-serif text-2xl lg:text-3xl font-light text-primary mb-1">500+</div>
              <div className="font-sans text-sm uppercase tracking-wider">Weddings Captured</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl lg:text-3xl font-light text-primary mb-1">8+</div>
              <div className="font-sans text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl lg:text-3xl font-light text-primary mb-1">50+</div>
              <div className="font-sans text-sm uppercase tracking-wider">Award-Winning Photos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;