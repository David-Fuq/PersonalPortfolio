import { getTranslations } from 'next-intl/server';
import { Timeline, TimelineItem } from '@/components/timeline';

export default async function WorkExperience() {
  const t = await getTranslations('workExperience');

  const workItems: TimelineItem[] = [
    {
      id: 'work-1',
      title: t('items.work1.title'),
      subtitle: t('items.work1.subtitle'),
      date: t('items.work1.date'),
      brief: t('items.work1.brief'),
      details: t('items.work1.details'),
    },
    {
      id: 'work-2',
      title: t('items.work2.title'),
      subtitle: t('items.work2.subtitle'),
      date: t('items.work2.date'),
      brief: t('items.work2.brief'),
      details: t('items.work2.details'),
    },
    {
      id: 'work-3',
      title: t('items.work3.title'),
      subtitle: t('items.work3.subtitle'),
      date: t('items.work3.date'),
      brief: t('items.work3.brief'),
      details: t('items.work3.details'),
    },
    {
      id: 'work-4',
      title: t('items.work4.title'),
      subtitle: t('items.work4.subtitle'),
      date: t('items.work4.date'),
      brief: t('items.work4.brief'),
      details: t('items.work4.details'),
    },
    {
      id: 'work-5',
      title: t('items.work5.title'),
      subtitle: t('items.work5.subtitle'),
      date: t('items.work5.date'),
      brief: t('items.work5.brief'),
      details: t('items.work5.details'),
    },
    {
      id: 'work-6',
      title: t('items.work6.title'),
      subtitle: t('items.work6.subtitle'),
      date: t('items.work6.date'),
      brief: t('items.work6.brief'),
      details: t('items.work6.details'),
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
      <Timeline items={workItems} />
    </div>
  );
}
