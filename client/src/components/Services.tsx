import { motion } from 'framer-motion';
import { Camera, Video, Palette, Calendar, Film, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  startingPrice: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: Camera,
      title: 'Luxury Wedding Photography',
      description: 'Timeless wedding photography that captures the essence of your love story with artistic elegance.',
      features: ['Pre-wedding consultation', 'Full day coverage', 'Professional editing', 'Online gallery', 'Print package'],
      startingPrice: '₹1,50,000'
    },
    {
      icon: Film,
      title: 'Cinematic Videography',
      description: 'Cinematic wedding films that transform your special day into a breathtaking visual narrative.',
      features: ['4K video production', 'Drone coverage', 'Same-day highlights', 'Full ceremony recording', 'Custom music'],
      startingPrice: '₹2,00,000'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'End-to-end wedding planning and coordination for a seamless and stress-free celebration.',
      features: ['Vendor coordination', 'Timeline management', 'Venue decoration', 'Guest management', 'Day-of coordination'],
      startingPrice: '₹3,00,000'
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hello! I'm interested in your ${serviceName} service. Could you please provide more details?`;
    window.open(`https://wa.me/919861094038?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 bg-background" data-testid="services-section">
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
            Our Services
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-6">
            Premium
            <span className="text-primary block">Wedding Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate ceremonies to grand celebrations, we offer comprehensive luxury services 
            that transform your vision into an extraordinary reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`service-card-${index}`}
            >
              <Card className="h-full group hover-elevate border-card-border bg-card">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-2xl font-light text-card-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="border-t border-border pt-6 mt-auto">
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => handleBookService(service.title)}
                      data-testid={`button-book-${index}`}
                    >
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card border border-card-border rounded-lg p-8 lg:p-12">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom package that perfectly matches your needs and budget.
            </p>
            <Button 
              size="lg"
              onClick={() => handleBookService('Custom Package')}
              data-testid="button-custom-package"
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;