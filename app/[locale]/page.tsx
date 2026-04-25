'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion, Variants } from 'motion/react';
import { Briefcase, GraduationCap, Trophy, BookOpen, FileText } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations();

  const sections = [
    {
      title: t('sections.workExperience.title'),
      description: t('sections.workExperience.description'),
      icon: Briefcase,
      href: '/work-experience',
      color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    },
    {
      title: t('sections.education.title'),
      description: t('sections.education.description'),
      icon: GraduationCap,
      href: '/education',
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    },
    {
      title: t('sections.awards.title'),
      description: t('sections.awards.description'),
      icon: Trophy,
      href: '/awards',
      color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    },
    {
      title: t('sections.teaching.title'),
      description: t('sections.teaching.description'),
      icon: BookOpen,
      href: '/teaching',
      color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    },
    {
      title: t('sections.publications.title'),
      description: t('sections.publications.description'),
      icon: FileText,
      href: '/publications',
      color: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    },
  ];

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
            alt={t('hero.profileAlt')}
            fill
            className="rounded-full object-cover border-4 border-background relative z-10 shadow-xl"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t('hero.greeting')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
              {t('hero.name')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            {t('hero.bio')}
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
