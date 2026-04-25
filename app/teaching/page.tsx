import { Timeline, TimelineItem } from '@/components/timeline';

const teachingItems: TimelineItem[] = [
  {
    id: 'teaching-1',
    title: 'Adjunct Lecturer - Introduction to Programming with Python',
    subtitle: 'Universidad de los Andes',
    date: 'Jan 2026 - Present',
    brief: 'Principal instructor for a 25-student course, a role typically reserved for graduate-level faculty.',
    details: 'Principal Instructor for Introduction to Programming with Python.\n\nLead instruction for a 25-student course covering foundational programming concepts using Python.\n\nSelected for a principal instructional role typically reserved for graduate-level faculty.\n\nDeliver lectures, design exams and programming assignments, and coordinate weekly lab sessions with two teaching assistants.',
  },
  {
    id: 'teaching-2',
    title: 'Undergraduate Research Assistant - CupiTaller',
    subtitle: 'Universidad de los Andes',
    date: 'Aug 2024 - Feb 2026',
    brief: 'Managed the programming support center, coordinating 40 tutors and 70 TAs serving 1500+ students.',
    details: 'Member of the 7-person team responsible for the management and operational oversight of CupiTaller, the University of the Andes\' programming support center, under Professor Eduardo Rosales, Ph.D.\n\nManaged the "Programming in Python" and "Introduction to Object Oriented Programming in Java" courses offered publicly by the University of the Andes on Coursera.\n\nResponsible for managing the schedules of approximately 40 tutors and 70 teaching assistants, overseeing and coordinating a system that allowed over 1500 students to schedule tutoring sessions.\n\nCreated programming problem sets and automated solution verification for Senecode, the University\'s coding problems webpage.\n\nConducted interviews to assess potential candidates for tutor positions.\n\nMaintained a Discord bot (written in TypeScript) to facilitate remote tutoring sessions.\n\nPart of the team that led the design, development, and maintenance of CupiMonitores, a web application (backend: NestJS, frontend: Next.js) that provides all necessary endpoints for managing teaching assistants, including querying their information, grading them, and handling access control for different user roles.',
  },
  {
    id: 'teaching-3',
    title: 'Undergraduate Teaching Assistant - IT for Organizations',
    subtitle: 'Universidad de los Andes',
    date: 'Aug 2023 - Dec 2023',
    brief: 'TA for IT in the Organizations, grading assessments and conducting monthly lectures.',
    details: 'Undergraduate teaching assistant for IT in the Organizations.\n\nCorrected and graded worksheets and assessments.\n\nConducted monthly lectures regarding key concepts of the subject.',
  },
  {
    id: 'teaching-4',
    title: 'Teaching Assistant - Introduction to Programming',
    subtitle: 'Universidad de los Andes',
    date: 'Jan 2021 - Dec 2023',
    brief: 'TA for Introduction to Programming, supporting ~40 students per lab and grading programming projects.',
    details: 'Undergraduate teaching assistant for Introduction to Programming under multiple professors.\n\nProvided support to the professor during programming teaching laboratories, assisting approximately 40 students.\n\nCorrected and graded basic programming projects.',
  },
  {
    id: 'teaching-5',
    title: 'Tutor - CupiTaller',
    subtitle: 'Universidad de los Andes',
    date: 'Feb 2023 - Jun 2023',
    brief: 'Python tutor at the University\'s programming support center, assisting 80+ students.',
    details: 'Python Tutor at CupiTaller, the University of the Andes\' programming support center designed for students in their first or second programming course.\n\nConducted daily tutoring sessions.\n\nAssisted more than 80 students in honing fundamental Python coding skills.',
  },
];

export default function Teaching() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Teaching</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          From tutor to lecturer — teaching programming and technology at Universidad de los Andes.
        </p>
      </div>
      <Timeline items={teachingItems} />
    </div>
  );
}
