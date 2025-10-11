import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import pradeepImage from '@assets/Proprietor___1760172148551.png';
import dilliImage from '@assets/IMG_20250517_201115_1760172152511.jpg';
import balaramImage from '@assets/IMG_20250831_185841_1760172159569.jpg';
import sujitImage from '@assets/WhatsApp Image 2025-10-11 at 13.38.30_c7e988f6_1760172163097.jpg';

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
      name: 'Pradeep Kumar Sukla',
      role: 'Proprietor',
      bio: 'Leading Super Digital with vision and dedication to capture your most precious moments.',
      image: pradeepImage,
      specialties: ['Leadership', 'Creative Vision', 'Client Relations'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'pradeep@superdigital.com'
      }
    },
    {
      name: 'Dilli Kumar Jena',
      role: 'Managing Director',
      bio: 'Managing operations and ensuring excellence in every project we deliver.',
      image: dilliImage,
      specialties: ['Operations', 'Management', 'Quality Control'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'dilli@superdigital.com'
      }
    },
    {
      name: 'Balaram Mandal',
      role: 'Cinematographer',
      bio: 'Crafting cinematic stories that bring your special moments to life.',
      image: balaramImage,
      specialties: ['Cinematography', 'Video Editing', 'Storytelling'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'balaram@superdigital.com'
      }
    },
    {
      name: 'Sujit Kumar Sahoo',
      role: 'Photographer',
      bio: 'Capturing timeless moments with artistic precision and creative excellence.',
      image: sujitImage,
      specialties: ['Photography', 'Portrait Photography', 'Wedding Photography'],
      socials: {
        instagram: '#',
        linkedin: '#',
        email: 'sujit@superdigital.com'
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

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* First 2 Members - Full Detail, One Per Row */}
          {teamMembers.slice(0, 2).map((member, index) => (
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

          {/* Last 2 Members - Compact Cubic Cards Side by Side */}
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.slice(2, 4).map((member, index) => {
              const actualIndex = index + 2;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  data-testid={`team-member-${actualIndex}`}
                >
                  <Card className="overflow-hidden group hover-elevate border-card-border bg-background">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                        data-testid={`team-image-${actualIndex}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Name and Role Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="font-serif text-sm font-medium text-white mb-0.5 leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium text-xs">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block space-y-8">
          {/* First 2 Members - Full Detail Row */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.slice(0, 2).map((member, index) => (
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

          {/* Last 2 Members - Compact Cubic Cards */}
          <div className="flex justify-center gap-6">
            {teamMembers.slice(2, 4).map((member, index) => {
              const actualIndex = index + 2;
              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  data-testid={`team-member-${actualIndex}`}
                  className="w-64"
                >
                  <Card className="overflow-hidden group hover-elevate border-card-border bg-background">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        data-testid={`team-image-${actualIndex}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Name and Role Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-serif text-lg font-medium text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;