import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import creativeDirectorImage from '@assets/generated_images/Creative_director_headshot_fbb5fa81.png';
import photographerImage from '@assets/generated_images/Photographer_headshot_de97b6e4.png';
import stylistImage from '@assets/generated_images/Stylist_headshot_07364acc.png';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  socials: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Priya Sharma',
      role: 'Creative Director & Founder',
      bio: 'With over 8 years of experience in luxury wedding photography, Priya brings an artistic vision that transforms moments into timeless memories.',
      image: creativeDirectorImage,
      specialties: ['Wedding Photography', 'Creative Direction', 'Brand Strategy'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'priya@superdigital.com'
      }
    },
    {
      name: 'Arjun Gupta',
      role: 'Lead Photographer',
      bio: 'A master of capturing emotions and candid moments, Arjun specializes in editorial and documentary-style wedding photography.',
      image: photographerImage,
      specialties: ['Editorial Photography', 'Candid Shots', 'Portrait Photography'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'arjun@superdigital.com'
      }
    },
    {
      name: 'Kavya Patel',
      role: 'Lead Stylist & Art Director',
      bio: 'Kavya brings fashion-forward styling and artistic direction to every shoot, ensuring each couple looks and feels absolutely stunning.',
      image: stylistImage,
      specialties: ['Bridal Styling', 'Art Direction', 'Fashion Coordination'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'kavya@superdigital.com'
      }
    }
  ];

  const handleContactTeamMember = (memberName: string, email: string) => {
    const message = `Hello ${memberName}, I would like to discuss working with you for my upcoming project.`;
    window.open(`mailto:${email}?subject=Project Inquiry&body=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-24 bg-card" data-testid="team-section">
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
            Our Team
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-card-foreground mb-6">
            Meet the
            <span className="text-primary block">Creative Minds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our passionate team of artists, photographers, and stylists work together to bring 
            your vision to life with unmatched creativity and expertise.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`team-member-${index}`}
            >
              <Card className="overflow-hidden group hover-elevate border-card-border bg-background">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    data-testid={`team-image-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center space-x-3">
                      {member.socials.instagram && (
                        <Button 
                          size="icon" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                          onClick={() => window.open(member.socials.instagram, '_blank')}
                          data-testid={`button-instagram-${index}`}
                        >
                          <Instagram className="h-4 w-4 text-white" />
                        </Button>
                      )}
                      {member.socials.linkedin && (
                        <Button 
                          size="icon" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                          onClick={() => window.open(member.socials.linkedin, '_blank')}
                          data-testid={`button-linkedin-${index}`}
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </Button>
                      )}
                      {member.socials.email && (
                        <Button 
                          size="icon" 
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                          onClick={() => handleContactTeamMember(member.name, member.socials.email!)}
                          data-testid={`button-email-${index}`}
                        >
                          <Mail className="h-4 w-4 text-white" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <span 
                          key={specialtyIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          data-testid={`specialty-${index}-${specialtyIndex}`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-background border border-border rounded-lg p-8 lg:p-12">
            <h3 className="font-serif text-3xl font-light text-foreground mb-4">
              Want to Work with Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our talented team is ready to bring your vision to life. Get in touch to discuss 
              your project and see how we can create something extraordinary together.
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/919861094038?text=Hello! I would like to work with your team for my upcoming project.', '_blank')}
              data-testid="button-contact-team"
            >
              Contact Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;