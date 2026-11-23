import { getTranslations } from 'next-intl/server';
import { Timeline } from '@/components/timeline';
import { buildTimelineItems, LOGOS } from '@/lib/timeline-items';

export default async function Research() {
  const t = await getTranslations('research');
  const researchItems = buildTimelineItems(t, ['res1', 'res2', 'res3', 'res4', 'res5'], {
    res1: LOGOS.cornell,
    res2: LOGOS.cornell,
    res3: LOGOS.cornell,
    res4: LOGOS.uniandes,
    res5: LOGOS.uniandes,
  });

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t('pageTitle')}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('pageSubtitle')}
        </p>
      </div>
      <Timeline items={researchItems} />
    </div>
  );
}
