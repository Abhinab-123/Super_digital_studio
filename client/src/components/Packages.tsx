import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Packages = () => {
  const handleBookPackage = (packageName: string) => {
    const message = `Hello! I'm interested in your ${packageName}. Could you please provide more details?`;
    window.open(`https://wa.me/919861094038?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 bg-muted/30" data-testid="packages-section">
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
            Our Packages
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-6">
            Photography
            <span className="text-primary block">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your special day. Each package is carefully crafted to deliver exceptional value.
          </p>
        </motion.div>

        {/* Packages Grid */}
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
                <ul className="space-y-4 mb-6">
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
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>2 Hour video output</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic mb-6">
                  *Consultant available for extra day shoot
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleBookPackage('Silver Package')}
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
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>1 Videograph (Traditional and Cinematic video shoot)</span>
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>1 Candid photoshoot</span>
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
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>1 LED and Drone for Reception</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic mb-6">
                  *Consultant available for extra day shoot
                </p>
                <Button 
                  className="w-full"
                  onClick={() => handleBookPackage('Gold Package')}
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
                <ul className="space-y-4 mb-6">
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
                    <span>50 Page photo book + Mini photo book + Calendar (Premium quality)</span>
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Wedding Invitation Included</span>
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>2 LED and Drone for Reception and Wedding</span>
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>Treasure + Highlight</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic mb-6">
                  *Consultant available for extra day shoot
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleBookPackage('Diamond Package')}
                  data-testid="button-book-diamond"
                >
                  Book Diamond Package
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
