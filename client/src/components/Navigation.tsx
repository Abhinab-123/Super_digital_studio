import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/SD LOGO PSD    ___JPG_1759046741867.jpg';

interface NavigationProps {
  activeSection?: string;
}

const Navigation = ({ activeSection = 'home' }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to ${sectionId} section`);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            data-testid="logo-container"
          >
            <img 
              src={logoImage} 
              alt="Super Digital Logo" 
              className="h-8 w-8 lg:h-10 lg:w-10 rounded-full object-cover"
              data-testid="logo-image"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg lg:text-xl font-semibold text-foreground">
                Super Digital
              </span>
              <span className="font-sans text-xs text-muted-foreground hidden sm:block">
                Editorial & Wedding Agency
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-testid="desktop-navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-sm transition-colors hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-primary font-medium' 
                    : 'text-foreground/80'
                }`}
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button 
              variant="default"
              onClick={() => window.open('https://wa.me/919861094038', '_blank')}
              className="font-sans"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md"
            data-testid="mobile-navigation"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-sans text-base transition-colors hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-foreground'
                  }`}
                  data-testid={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="default"
                className="w-full mt-4 font-sans"
                onClick={() => window.open('https://wa.me/919861094038', '_blank')}
                data-testid="button-mobile-book-now"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navigation;