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
      content: 'hello@superdigital.com',
      action: () => window.open('mailto:hello@superdigital.com', '_blank')
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
      href: 'https://instagram.com/superdigital',
      color: 'text-pink-500'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/superdigital',
      color: 'text-blue-500'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/superdigital',
      color: 'text-red-500'
    }
  ];

  const handleWhatsAppBooking = () => {
    const message = 'Hello! I would like to book your luxury wedding services. Could you please provide more information about packages and availability?';
    window.open(`https://wa.me/919861094038?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleQuickInquiry = (serviceType: string) => {
    const message = `Hello! I'm interested in your ${serviceType}. Could you please send me more details?`;
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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

          {/* Quick Service Inquiry */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-card-border bg-background">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-light text-foreground mb-6">
                  Quick Service Inquiry
                </h3>
                <p className="text-muted-foreground mb-8">
                  Select the service you're interested in for instant WhatsApp contact with 
                  relevant details and pricing information.
                </p>

                <div className="space-y-4">
                  {[
                    { service: 'Wedding Photography Package', price: 'Starting ₹1,50,000' },
                    { service: 'Cinematic Videography', price: 'Starting ₹2,00,000' },
                    { service: 'Bridal Styling Services', price: 'Starting ₹75,000' },
                    { service: 'Complete Event Management', price: 'Starting ₹3,00,000' },
                    { service: 'Editorial Photography', price: 'Starting ₹1,00,000' },
                    { service: 'Custom Package Consultation', price: 'Personalized Quote' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => handleQuickInquiry(item.service)}
                        className="w-full justify-between p-6 h-auto hover-elevate"
                        data-testid={`button-inquiry-${index}`}
                      >
                        <div className="text-left">
                          <div className="font-medium text-foreground">{item.service}</div>
                          <div className="text-sm text-muted-foreground">{item.price}</div>
                        </div>
                        <MessageCircle className="h-5 w-5 text-green-600" />
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-8 p-6 bg-card border border-card-border rounded-lg">
                  <h4 className="font-serif text-lg font-medium text-card-foreground mb-4">
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-card-foreground">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-card-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-card-foreground">By Appointment</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    WhatsApp inquiries responded to within 1 hour during business hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;