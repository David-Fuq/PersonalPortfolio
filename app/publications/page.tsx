import { Timeline, TimelineItem } from '@/components/timeline';

const publicationItems: TimelineItem[] = [
  {
    id: 'pub-1',
    title: 'A Novel Approach to Machine Learning',
    subtitle: 'Journal of Artificial Intelligence',
    date: '2023',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://picsum.photos/seed/pub1/100/100',
  },
  {
    id: 'pub-2',
    title: 'Optimizing Web Performance in React',
    subtitle: 'International Web Conference',
    date: '2021',
    brief: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://picsum.photos/seed/pub2/100/100',
  },
  {
    id: 'pub-3',
    title: 'The Future of Frontend Frameworks',
    subtitle: 'Tech Insights Magazine',
    date: '2019',
    brief: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://picsum.photos/seed/pub3/100/100',
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
