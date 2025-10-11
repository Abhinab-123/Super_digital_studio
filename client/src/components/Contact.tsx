import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98610 94038, +91 93374 21992',
      action: () => window.open('tel:+919861094038', '_blank')
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'superdigitalctc@gmail.com',
      action: () => window.open('mailto:superdigitalctc@gmail.com', '_blank')
    },
    {
      icon: MapPin,
      title: 'Studio Location',
      content: 'Bhubaneswar, Odisha, India',
      action: () => console.log('Opening map location')
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/superdigitalstudioctc?utm_source=qr&igsh=MTBkdzZqN3d5ZnRlNg%3D%3D',
      color: 'text-pink-500'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1A5nF9Ysua/',
      color: 'text-blue-500'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@superdigitalstudio9332?feature=shared',
      color: 'text-red-500'
    }
  ];

  const handleWhatsAppBooking = () => {
    const message = 'Hello! I would like to book your luxury wedding services. Could you please provide more information about packages and availability?';
    window.open(`https://wa.me/919861094038?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 bg-card" data-testid="contact-section">
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
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-card-foreground mb-6">
            Let's Create
            <span className="text-primary block">Something Beautiful</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Reach out to us and let's discuss 
            how we can make your special day absolutely unforgettable.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Primary WhatsApp CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-light text-card-foreground mb-4">
                Book Your Service Instantly
              </h3>
              <p className="text-muted-foreground mb-6">
                Get instant responses and personalized quotes through WhatsApp
              </p>
              <Button 
                size="lg"
                onClick={handleWhatsAppBooking}
                className="bg-green-600 hover:bg-green-700 text-white font-sans"
                data-testid="button-whatsapp-booking"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </Button>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-elevate border-card-border bg-background cursor-pointer" onClick={item.action}>
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-medium text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-serif text-xl font-medium text-card-foreground mb-4">
                Follow Our Work
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(social.href, '_blank')}
                    className="hover-elevate"
                    data-testid={`button-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className={`h-5 w-5 ${social.color}`} />
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;