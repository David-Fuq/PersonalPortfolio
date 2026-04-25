import { Timeline, TimelineItem } from '@/components/timeline';

const workItems: TimelineItem[] = [
  {
    id: 'work-1',
    title: 'Software Engineer',
    subtitle: 'Canals',
    date: 'Jan 2026 - Present',
    brief: 'Software Engineer for the Accounts Payables team.',
    details: 'Software Engineer for the Accounts Payables team.',
    imageUrl: '/canals_ai_logo.jpg',
  },
  {
    id: 'work-2',
    title: 'Adjunct Lecturer - Introduction to Programming with Python',
    subtitle: 'Universidad de los Andes',
    date: 'Jan 2026 - Present',
    brief: 'Principal instructor for a 25-student course, a role typically reserved for graduate-level faculty.',
    details: 'Principal Instructor for Introduction to Programming with Python.\n\nLead instruction for a 25-student course covering foundational programming concepts using Python.\n\nSelected for a principal instructional role typically reserved for graduate-level faculty.\n\nDeliver lectures, design exams and programming assignments, and coordinate weekly lab sessions with two teaching assistants.',
    imageUrl: '/University_of_Los_Andes_logo.svg',
  },
  {
    id: 'work-3',
    title: 'Cornell Cup Robotics Team Member',
    subtitle: 'Cornell University',
    date: 'Aug 2025 - Present',
    brief: 'Working on the ISS microMimic project, an XRP variant receiving real-time telemetry from the International Space Station.',
    details: 'Currently working with Cornell on the ISS microMimic project: an XRP variant that receives real-time telemetry from the International Space Station. Our work was recently shown at the MIT museum.',
    imageUrl: '/Cornell_University_seal.svg.png',
  },
  {
    id: 'work-4',
    title: 'Summer Research Intern - SURF',
    subtitle: 'Cornell University',
    date: 'Jun 2025 - Aug 2025',
    brief: 'Developed XRP robotic features and educational guides for courses recognized by INCOSE as a knowledge exam equivalent.',
    details: 'Developed XRP robotic features and an educational guide for Cornell SYSEN5920 & 5100, the first experience in the world recognized by INCOSE as a knowledge exam equivalent.\n\nHelped create components of the XRP robotic education system, now being used in 180+ countries with support from partners such as FIRST, Raspberry Pi, SparkFun, Lockheed Martin, NASA, Boeing, and many others.\n\nDesigned and implemented a GUI for the AgXRP, an open-source autonomous platform for exploring automation, robotics, and precision agriculture. Built both the communication protocol and a fully functional web application enabling USB-based serial control of the system.\n\nOur work was featured at the National Governors Association meeting in February 2026, presented to all 50 U.S. Governors and the U.S. Secretary of Education.',
    imageUrl: '/Cornell_University_seal.svg.png',
  },
  {
    id: 'work-5',
    title: 'Systems and Computer Engineering Intern',
    subtitle: 'Precia PPV S.A.',
    date: 'Jan 2025 - May 2025',
    brief: 'Optimized AWS services and developed Power BI dashboards for Colombian Stock Exchange data analysis.',
    details: 'Optimized existing code within AWS services such as Lambda and Glue, improving performance and efficiency.\n\nHelped develop interactive Power BI dashboards to analyze and visualize data from the Colombian Stock Exchange.\n\nPlayed a key role in the technology team, contributing to industry-leading pricing solutions for valuation in Colombia.',
    imageUrl: '/preciappv_logo.jpg',
  },
  {
    id: 'work-6',
    title: 'Undergraduate Research Assistant - Enterprise Architecture',
    subtitle: 'Universidad de los Andes',
    date: 'Aug 2024 - Jan 2025',
    brief: 'Research assistant under Professor Jorge Villalobos, Ph.D., creating exams and conducting research on Enterprise Architecture.',
    details: 'Research assistant under Professor Jorge Villalobos, Ph.D.\n\nResponsible for the creation of exams for the new course "Arquitectura Empresarial" of the Master\'s Degree "MAIT - Maestría en Gerencia de Tecnologías de Información" of the Universidad de los Andes.\n\nConducted theoretical research regarding Enterprise Architecture.',
    imageUrl: '/University_of_Los_Andes_logo.svg',
  },
];

export default function WorkExperience() {
  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Work Experience</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional roles in software engineering, research, and robotics across industry and academia.
        </p>
      </div>
      <Timeline items={workItems} />
    </div>
  );
}
