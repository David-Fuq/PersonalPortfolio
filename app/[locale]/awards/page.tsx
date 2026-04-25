import { getTranslations } from 'next-intl/server';
import { Timeline, TimelineItem } from '@/components/timeline';

export default async function Awards() {
  const t = await getTranslations('awards');

  const awardItems: TimelineItem[] = [
    {
      id: 'award-1',
      title: t('items.award1.title'),
      subtitle: t('items.award1.subtitle'),
      date: t('items.award1.date'),
      brief: t('items.award1.brief'),
      details: t('items.award1.details'),
    },
    {
      id: 'award-2',
      title: t('items.award2.title'),
      subtitle: t('items.award2.subtitle'),
      date: t('items.award2.date'),
      brief: t('items.award2.brief'),
      details: t('items.award2.details'),
    },
    {
      id: 'award-3',
      title: t('items.award3.title'),
      subtitle: t('items.award3.subtitle'),
      date: t('items.award3.date'),
      brief: t('items.award3.brief'),
      details: t('items.award3.details'),
    },
    {
      id: 'award-4',
      title: t('items.award4.title'),
      subtitle: t('items.award4.subtitle'),
      date: t('items.award4.date'),
      brief: t('items.award4.brief'),
      details: t('items.award4.details'),
    },
    {
      id: 'award-5',
      title: t('items.award5.title'),
      subtitle: t('items.award5.subtitle'),
      date: t('items.award5.date'),
      brief: t('items.award5.brief'),
      details: t('items.award5.details'),
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
      <Timeline items={awardItems} />
    </div>
  );
}
