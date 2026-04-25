'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { Briefcase, GraduationCap, Trophy, BookOpen, FileText } from 'lucide-react';

const sections = [
  {
    title: 'Work Experience',
    description: 'Software engineering, research internships, and robotics projects at Canals, Cornell University, and Precia PPV.',
    icon: Briefcase,
    href: '/work-experience',
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  },
  {
    title: 'Education',
    description: 'B.E. in Systems and Computing Engineering from Universidad de los Andes, with international studies at Politecnico di Milano.',
    icon: GraduationCap,
    href: '/education',
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  },
  {
    title: 'Awards',
    description: 'Recognitions including Expoandes winner for an AI-powered sign language recognizer and national olympiad placements.',
    icon: Trophy,
    href: '/awards',
    color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  },
  {
    title: 'Teaching',
    description: 'From Python tutor to Adjunct Lecturer, with experience managing 40+ tutors and teaching 1500+ students at Uniandes.',
    icon: BookOpen,
    href: '/teaching',
    color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  },
  {
    title: 'Publications',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    icon: FileText,
    href: '/publications',
    color: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-4xl mb-24"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/20 rounded-full blur-2xl opacity-50 animate-pulse" />
          <Image
            src="https://picsum.photos/seed/portrait/400/400"
            alt="Profile Picture"
            fill
            className="rounded-full object-cover border-4 border-background relative z-10 shadow-xl"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">David Alejandro Fuquen Flórez</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Software Engineer at Canals, Adjunct Lecturer at Universidad de los Andes, and member of Cornell Cup Robotics. B.E. in Systems and Computing Engineering with a minor in Physics. Passionate about software development, robotics, and education.
          </p>
        </div>
      </motion.section>

      {/* Grid Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sections.map((section) => (
          <Link key={section.title} href={section.href}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`h-full p-6 rounded-3xl border bg-card hover:shadow-lg transition-all duration-300 flex flex-col gap-4 group cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${section.color}`}>
                <section.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.section>
    </div>
  );
}
