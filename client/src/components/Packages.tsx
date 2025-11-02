import { motion } from 'framer-motion';
import { Check, Sparkles, Star, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Packages = () => {
  const handleBookPackage = (packageName: string) => {
    const message = `Hello! I'm interested in your ${packageName}. Could you please provide more details?`;
    window.open(`https://wa.me/919861094038?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden" data-testid="packages-section">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Sparkles className="w-16 h-16 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Star className="w-20 h-20 text-primary animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 px-4"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-primary/60 text-white rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg shadow-primary/30">
              <Sparkles className="inline-block w-3 sm:w-4 h-3 sm:h-4 mr-2" />
              Our Packages
            </span>
          </motion.div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 drop-shadow-sm">
            Photography
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary block mt-2">
              Packages
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="h-full border-2 border-gray-300 bg-gradient-to-br from-card to-card/80 hover:shadow-2xl hover:shadow-gray-400/50 transition-all duration-300" data-testid="package-silver">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-gray-100 rounded-full mb-3">
                    <Star className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-3">Silver Package</h3>
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent mb-2">₹50,000</div>
                  <p className="text-sm text-muted-foreground">Essential Package</p>
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
            whileHover={{ y: -15, scale: 1.03 }}
          >
            <Card className="h-full border-4 border-primary bg-gradient-to-br from-primary/5 via-card to-primary/10 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 relative ring-4 ring-primary/20" data-testid="package-gold">
              <motion.div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-yellow-500 to-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Crown className="inline-block w-4 h-4 mr-1" />
                Most Popular
              </motion.div>
              <CardContent className="p-8 pt-10">
                <div className="text-center mb-6">
                  <motion.div 
                    className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-3 shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Crown className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-3">Gold Package</h3>
                  <div className="text-6xl font-extrabold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">₹1,00,000</div>
                  <p className="text-sm font-semibold text-primary">Premium Choice</p>
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
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="h-full border-2 border-cyan-300 bg-gradient-to-br from-cyan-50/50 via-card to-blue-50/50 hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300" data-testid="package-diamond">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <motion.div 
                    className="inline-block p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-3"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(34, 211, 238, 0.5)",
                        "0 0 40px rgba(34, 211, 238, 0.8)",
                        "0 0 20px rgba(34, 211, 238, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-3">Diamond Package</h3>
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent mb-2">₹1,50,000</div>
                  <p className="text-sm text-muted-foreground">Luxury Package</p>
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
