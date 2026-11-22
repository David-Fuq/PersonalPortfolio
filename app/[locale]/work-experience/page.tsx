import { getTranslations } from 'next-intl/server';
import { Timeline } from '@/components/timeline';
import { buildTimelineItems } from '@/lib/timeline-items';

export default async function WorkExperience() {
  const t = await getTranslations('workExperience');
  const workItems = buildTimelineItems(t, ['work1', 'work2']);

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
