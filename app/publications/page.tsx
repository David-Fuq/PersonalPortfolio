import { Timeline, TimelineItem } from '@/components/timeline';

const publicationItems: TimelineItem[] = [
  {
    id: 'pub-1',
    title: 'Recreating the V-JEPA 2-AC Architecture for Self-Supervised Video Models',
    subtitle: 'Séneca Repositorio Institucional - Universidad de los Andes',
    date: 'Jan 2026',
    brief: 'Undergraduate Thesis',
    details: (
      <>
        Available{' '}
        <a
          href="https://hdl.handle.net/1992/77925"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          here
        </a>
        .
        <br />
        <br />
        This project recreates the V-JEPA 2-AC architecture to better understand its self-supervised video learning and action-conditioned prediction capabilities. By analyzing the official Meta implementation, a fully functional local reproduction of both the pretraining and post-training stages was developed, along with a simplified variant of the post-training predictor.
        <br />
        <br />
        Using a curated 206-video robotic dataset, all architectures were evaluated on their ability to infer plausible next actions from an initial and a goal frame. The results illustrate the feasibility of reproducing V-JEPA 2-AC locally, highlight the trade-offs introduced by simplification, and provide insight into how energy-based prediction landscapes guide robotic action selection.
      </>
    ),
    imageUrl: '/University_of_Los_Andes_logo.svg',
  },
  
];

export default function Publications() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Publications</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Timeline items={publicationItems} />
    </div>
  );
}
