import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/SD LOGO PSD    ___JPG_1759046741867.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Wedding Photography', href: '#services' },
    { label: 'Cinematic Videography', href: '#services' },
    { label: 'Bridal Styling', href: '#services' },
    { label: 'Event Management', href: '#services' },
    { label: 'Editorial Shoots', href: '#services' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/superdigitalstudioctc?utm_source=qr&igsh=MTBkdzZqN3d5ZnRlNg%3D%3D',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      label: 'Facebook', 
      href: 'https://www.facebook.com/share/1A5nF9Ysua/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@superdigitalstudio9332?feature=shared',
      color: 'hover:text-red-500'
    }
  ];

  const handleNavClick = (href: string) => {
    console.log(`Navigating to ${href}`);
    // TODO: Implement smooth scroll navigation
  };

  return (
    <footer className="bg-foreground text-background" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="Super Digital Logo" 
                className="h-10 w-10 rounded-full object-cover"
                data-testid="footer-logo"
              />
              <div>
                <h3 className="font-serif text-xl font-semibold">Super Digital</h3>
                <p className="text-sm text-background/70">Editorial & Wedding Agency</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Crafting timeless editorial and wedding experiences with luxury photography, 
              cinematic videography, and premium event management services.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(social.href, '_blank')}
                  className={`text-background/70 hover:bg-background/10 ${social.color} transition-colors`}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-left"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-medium mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(service.href)}
                    className="text-background/70 hover:text-background transition-colors text-left"
                    data-testid={`footer-service-${service.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif text-lg font-medium mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm">+91 98610 94038</p>
                  <p className="text-background/80 text-sm">+91 93374 21992</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:superdigitalctc@gmail.com"
                  className="text-background/80 text-sm hover:text-background transition-colors"
                  data-testid="footer-email-link"
                >
                  superdigitalctc@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-background/80 text-sm">
                  Bhubaneswar, Odisha<br />India
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button 
              onClick={() => window.open('https://wa.me/919861094038', '_blank')}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
              data-testid="footer-whatsapp-button"
            >
              WhatsApp Us
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-background/20 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              © {currentYear} Super Digital. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-background/70 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for beautiful memories</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <button 
                className="text-background/70 hover:text-background transition-colors"
                onClick={() => console.log('Privacy Policy clicked')}
                data-testid="footer-privacy-link"
              >
                Privacy Policy
              </button>
              <button 
                className="text-background/70 hover:text-background transition-colors"
                onClick={() => console.log('Terms of Service clicked')}
                data-testid="footer-terms-link"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;