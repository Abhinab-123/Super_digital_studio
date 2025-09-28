import { motion } from 'framer-motion';
import { Heart, Camera, Award, Users } from 'lucide-react';
import editorialImage from '@assets/generated_images/Editorial_fashion_shoot_80e14fc8.png';

const About = () => {
  const stats = [
    { icon: Heart, number: '500+', label: 'Happy Couples' },
    { icon: Camera, number: '1000+', label: 'Photo Sessions' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Users, number: '8+', label: 'Years Experience' },
  ];

  return (
    <section className="py-24 bg-card" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground mb-6">
                  Where Art Meets
                  <span className="text-primary block">Emotion</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Super Digital was born from a passion for capturing life's most precious moments 
                  through the lens of luxury and artistry. We believe every love story deserves to 
                  be told with elegance, sophistication, and timeless beauty.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our approach combines editorial finesse with intimate storytelling, creating 
                  visual narratives that transcend ordinary photography. We don't just capture 
                  moments—we craft heirlooms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-serif text-3xl font-light text-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={editorialImage}
                alt="Editorial Fashion Photography"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-background border border-border rounded-lg p-6 shadow-lg"
            >
              <div className="text-center">
                <div className="font-serif text-2xl font-light text-primary mb-1">
                  Premium
                </div>
                <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                  Quality Service
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;