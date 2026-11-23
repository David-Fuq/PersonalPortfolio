import type { getTranslations } from 'next-intl/server';
import type { TimelineItem } from '@/components/timeline';
import { richLinks } from '@/lib/rich-links';

type Translator = Awaited<ReturnType<typeof getTranslations>>;

// Logos shown in the timeline's center dot (files in /public).
export const LOGOS = {
  uniandes: '/University_of_Los_Andes_logo.svg',
  cornell: '/Cornell_University_seal.svg.png',
  polimi: '/Logo_Politecnico_Milano-2.png',
  hku: '/University_of_Hong_Kong.svg.webp',
  canals: '/canals_ai_logo.png',
  precia: '/preciappv_logo.jpg',
};

/**
 * Builds timeline items from `<namespace>.items.<key>` messages.
 * `details` is rendered with `t.rich`, so it may contain the link tags defined in `richLinks`.
 */
export function buildTimelineItems(
  t: Translator,
  keys: readonly string[],
  images: Partial<Record<string, string>> = {},
): TimelineItem[] {
  return keys.map((key) => ({
    id: key,
    title: t(`items.${key}.title`),
    subtitle: t(`items.${key}.subtitle`),
    date: t(`items.${key}.date`),
    brief: t(`items.${key}.brief`),
    details: t.rich(`items.${key}.details`, richLinks),
    imageUrl: images[key],
  }));
}
