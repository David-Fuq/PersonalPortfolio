import { getTranslations } from 'next-intl/server';
import { Timeline } from '@/components/timeline';
import { buildTimelineItems, LOGOS } from '@/lib/timeline-items';

export default async function Education() {
  const t = await getTranslations('education');
  const educationItems = buildTimelineItems(t, ['edu1', 'edu2'], {
    edu1: LOGOS.uniandes,
  });

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
