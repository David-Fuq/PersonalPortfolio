'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { Moon, Sun, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './theme-provider';
import { motion } from 'motion/react';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const t = useTranslations('nav');
  const tHeader = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();

  const tabs = [
    { name: t('home'), path: '/' },
    { name: t('workExperience'), path: '/work-experience' },
    { name: t('education'), path: '/education' },
    { name: t('awards'), path: '/awards' },
    { name: t('teaching'), path: '/teaching' },
    { name: t('publications'), path: '/publications' },
  ];

  const toggleLocale = () => {
    router.replace(pathname, { locale: locale === 'en' ? 'es' : 'en' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className={`transition-colors hover:text-foreground/80 relative ${
                pathname === tab.path ? 'text-foreground' : 'text-foreground/60'
              }`}
            >
              {tab.name}
              {pathname === tab.path && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-foreground"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden font-semibold">{t('portfolio')}</div>

        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/david-fuquen"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">{tHeader('linkedin')}</span>
          </Link>
          <Link
            href="mailto:fuquendavid@gmail.com"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">{tHeader('contact')}</span>
          </Link>
          <button
            onClick={toggleLocale}
            className="inline-flex items-center justify-center rounded-md px-2 py-1 text-sm font-medium hover:bg-muted transition-colors"
            aria-label={tHeader('toggleLanguage')}
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-muted transition-colors"
            aria-label={tHeader('toggleTheme')}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
