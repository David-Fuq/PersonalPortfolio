import { Timeline, TimelineItem } from '@/components/timeline';

const educationItems: TimelineItem[] = [
  {
    id: 'edu-1',
    title: 'Bachelor of Engineering - Systems and Computing Engineering',
    subtitle: 'Universidad de los Andes',
    date: 'Aug 2020 - Apr 2026',
    brief: 'B.E. with a minor in Physics from one of Latin America\'s top universities.',
    details: 'Bachelor of Engineering in Systems and Computing Engineering with a minor in Physics.',
  },
  {
    id: 'edu-2',
    title: 'International Studies Program',
    subtitle: 'Politecnico di Milano',
    date: 'Feb 2024 - Jul 2024',
    brief: 'International exchange with coursework in Machine Learning, IoT, and Robotics.',
    details: 'International Studies Program at Politecnico di Milano.\n\nRelevant Coursework:\n- Machine Learning\n- Internet of Things\n- Robotics',
  },
  {
    id: 'edu-3',
    title: 'High School Diploma',
    subtitle: 'Colegio San Jorge de Inglaterra - Saint George\'s School',
    date: 'Graduated Jun 2020',
    brief: 'Salutatorian — student with the second highest overall GPA of the graduating class.',
    details: 'Salutatorian, student with the second highest overall GPA of the graduating class 2020.\n\nActivities:\n- Prefect (2020-2021)\n- Committee President COP in Bogotá & SGSMUN (2018-2019)\n- Second Cello in the Symphonic Orchestra (2008-2020)\n- Athletics Team Captain (2020)\n- Basketball Team (2010-2020)',
  },
];

export default function Education() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Education</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Systems and Computing Engineering from Universidad de los Andes, with international studies at Politecnico di Milano.
        </p>
      </div>
      <Timeline items={educationItems} />
    </div>
  );
}
