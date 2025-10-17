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
      icon: Palette,
      title: 'Bridal Styling',
      description: 'Complete bridal styling services to ensure you look absolutely stunning on your wedding day.',
      features: ['Personal consultation', 'Makeup & hair', 'Outfit coordination', 'Accessories selection', 'Trial sessions'],
      startingPrice: '₹75,000'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'End-to-end wedding planning and coordination for a seamless and stress-free celebration.',
      features: ['Vendor coordination', 'Timeline management', 'Venue decoration', 'Guest management', 'Day-of coordination'],
      startingPrice: '₹3,00,000'
    },
    {
      icon: Video,
      title: 'Editorial Shoots',
      description: 'High-fashion editorial photography for brands, models, and personal portfolio development.',
      features: ['Concept development', 'Location scouting', 'Professional styling', 'Retouching', 'Commercial licensing'],
      startingPrice: '₹1,00,000'
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

        {/* Photography Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Packages
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-6">
              Photography
              <span className="text-primary block">Packages</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect package for your special day. Each package is carefully crafted to deliver exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-card-border bg-card hover-elevate" data-testid="package-silver">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-light text-card-foreground mb-2">Silver Package</h3>
                    <div className="text-4xl font-bold text-primary mb-4">₹50,000</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>1 Traditional photo and video shoot</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>2 Days photo and video shoot</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>20 Page wedding photo book (Premium quality)</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>Wedding Invitation Included</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleBookService('Silver Package')}
                    data-testid="button-book-silver"
                  >
                    Book Silver Package
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Gold Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary bg-card hover-elevate relative" data-testid="package-gold">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-light text-card-foreground mb-2">Gold Package</h3>
                    <div className="text-4xl font-bold text-primary mb-4">₹1,00,000</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>1 Videograph (Traditional and Cinematic video shoot)</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>2 Days traditional photoshoot</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>30 Page wedding photo book (Premium quality)</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>Wedding Invitation Included</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => handleBookService('Gold Package')}
                    data-testid="button-book-gold"
                  >
                    Book Gold Package
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Diamond Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-card-border bg-card hover-elevate" data-testid="package-diamond">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-light text-card-foreground mb-2">Diamond Package</h3>
                    <div className="text-4xl font-bold text-primary mb-4">₹1,50,000</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>2 Days cinematic video shoot</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>2 Days shoot</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>50 Page photo book + Mini photo book + Calendar</span>
                    </li>
                    <li className="flex items-start text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>Wedding Invitation Included</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleBookService('Diamond Package')}
                    data-testid="button-book-diamond"
                  >
                    Book Diamond Package
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

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
              Ready to Create Something Beautiful?
            </h3>
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