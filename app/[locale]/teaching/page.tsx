import { getTranslations } from 'next-intl/server';
import { Timeline, TimelineItem } from '@/components/timeline';

export default async function Teaching() {
  const t = await getTranslations('teaching');

  const teachingItems: TimelineItem[] = [
    {
      id: 'teaching-1',
      title: t('items.teaching1.title'),
      subtitle: t('items.teaching1.subtitle'),
      date: t('items.teaching1.date'),
      brief: t('items.teaching1.brief'),
      details: t('items.teaching1.details'),
    },
    {
      id: 'teaching-2',
      title: t('items.teaching2.title'),
      subtitle: t('items.teaching2.subtitle'),
      date: t('items.teaching2.date'),
      brief: t('items.teaching2.brief'),
      details: t('items.teaching2.details'),
    },
    {
      id: 'teaching-3',
      title: t('items.teaching3.title'),
      subtitle: t('items.teaching3.subtitle'),
      date: t('items.teaching3.date'),
      brief: t('items.teaching3.brief'),
      details: t('items.teaching3.details'),
    },
    {
      id: 'teaching-4',
      title: t('items.teaching4.title'),
      subtitle: t('items.teaching4.subtitle'),
      date: t('items.teaching4.date'),
      brief: t('items.teaching4.brief'),
      details: t('items.teaching4.details'),
    },
    {
      id: 'teaching-5',
      title: t('items.teaching5.title'),
      subtitle: t('items.teaching5.subtitle'),
      date: t('items.teaching5.date'),
      brief: t('items.teaching5.brief'),
      details: t('items.teaching5.details'),
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
      <Timeline items={teachingItems} />
    </div>
  );
}
