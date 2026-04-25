import { Timeline, TimelineItem } from '@/components/timeline';

const awardItems: TimelineItem[] = [
  {
    id: 'award-1',
    title: '"La Muestra" Participant - Systems and Computing Engineering',
    subtitle: 'Universidad de los Andes',
    date: 'Nov 2023',
    brief: 'Presented "BoGoPlan," a cultural events matchmaker app built using Machine Learning.',
    details: '"BoGoPlan" — Cultural Events matchmaker software built using Machine Learning.\n\nhttps://youtu.be/xXw-wnFHIf4',
  },
  {
    id: 'award-2',
    title: '"Expoandes" Winner - Systems and Computing Engineering',
    subtitle: 'Universidad de los Andes',
    date: 'May 2022',
    brief: 'Won for "Comunicarnos," an AI-powered sign language recognizer built with Python and TensorFlow.',
    details: '"Comunicarnos" — Sign Language recognizer built using artificial intelligence through Python and TensorFlow.\n\nhttps://youtu.be/96kEChyVPas',
  },
  {
    id: 'award-3',
    title: '11th Place - National Physics Olympiads',
    subtitle: 'Universidad Antonio Nariño',
    date: '2019',
    brief: '11th place overall in the National Physics Olympiads.',
    details: '11th place overall in the National Physics Olympiads at Universidad Antonio Nariño.',
  },
  {
    id: 'award-4',
    title: 'Best School Participant - National Mathematics Olympiads',
    subtitle: 'Universidad Antonio Nariño',
    date: '2019',
    brief: 'Best participant from Saint George\'s School in the National Mathematics Olympiads.',
    details: 'Saint George\'s School best participant in the National Mathematics Olympiads at Universidad Antonio Nariño.',
  },
  {
    id: 'award-5',
    title: '13th Place - National Science Olympiads',
    subtitle: 'Universidad Antonio Nariño',
    date: '2018',
    brief: '13th place overall in the National Science Olympiads.',
    details: '13th place overall in the National Science Olympiads at Universidad Antonio Nariño.',
  },
];

export default function Awards() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Awards</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Academic competitions and recognitions in engineering, physics, mathematics, and science.
        </p>
      </div>
      <Timeline items={awardItems} />
    </div>
  );
}
