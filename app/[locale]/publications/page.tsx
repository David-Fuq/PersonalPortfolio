import { getTranslations } from 'next-intl/server';
import { Timeline, TimelineItem } from '@/components/timeline';

export default async function Publications() {
  const t = await getTranslations('publications');

  const publicationItems: TimelineItem[] = [
    {
      id: 'pub-1',
      title: t('items.pub1.title'),
      subtitle: t('items.pub1.subtitle'),
      date: t('items.pub1.date'),
      brief: t('items.pub1.brief'),
      details: (
        <>
          {t('items.pub1.details.availableText')}{' '}
          <a
            href="https://hdl.handle.net/1992/77925"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            {t('items.pub1.details.linkText')}
          </a>
          .
          <br />
          <br />
          {t('items.pub1.details.body')}
        </>
      ),
      imageUrl: '/University_of_Los_Andes_logo.svg',
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
      <Timeline items={publicationItems} />
    </div>
  );
}
