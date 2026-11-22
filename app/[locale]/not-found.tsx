import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center gap-4">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="text-lg text-muted-foreground">{t('description')}</p>
      <Link
        href="/"
        className="rounded-full border border-border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
      >
        {t('home')}
      </Link>
    </div>
  );
}
