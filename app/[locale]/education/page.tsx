import { getTranslations } from 'next-intl/server';
import { Timeline, TimelineItem } from '@/components/timeline';

export default async function Education() {
  const t = await getTranslations('education');

  const educationItems: TimelineItem[] = [
    {
      id: 'edu-1',
      title: t('items.edu1.title'),
      subtitle: t('items.edu1.subtitle'),
      date: t('items.edu1.date'),
      brief: t('items.edu1.brief'),
      details: t('items.edu1.details'),
    },
    {
      id: 'edu-2',
      title: t('items.edu2.title'),
      subtitle: t('items.edu2.subtitle'),
      date: t('items.edu2.date'),
      brief: t('items.edu2.brief'),
      details: t('items.edu2.details'),
    },
    {
      id: 'edu-3',
      title: t('items.edu3.title'),
      subtitle: t('items.edu3.subtitle'),
      date: t('items.edu3.date'),
      brief: t('items.edu3.brief'),
      details: t('items.edu3.details'),
    },
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('pageTitle')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('pageSubtitle')}
        </p>
      </div>
      <Timeline items={educationItems} />
    </div>
  );
}
