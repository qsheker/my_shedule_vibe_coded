export interface Subject {
  id: string;
  name: string;
  code: string;
  lectures: number;
  practicalWork: number;
  tutorIndependent: number;
  studentIndependent: number;
  color: 'lecture' | 'practical' | 'independent';
}

export interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  subject: Subject;
  room: string;
  type: 'lecture' | 'practical' | 'independent';
  teacher: string;
}

export const subjects: Subject[] = [
  {
    id: '1',
    name: 'Operating Systems',
    code: 'OS 2207',
    lectures: 20,
    practicalWork: 30,
    tutorIndependent: 10,
    studentIndependent: 90,
    color: 'lecture'
  },
  {
    id: '2',
    name: 'Design and Analysis of Algorithms',
    code: 'RiAA 2310',
    lectures: 20,
    practicalWork: 30,
    tutorIndependent: 10,
    studentIndependent: 90,
    color: 'practical'
  },
  {
    id: '3',
    name: 'Software Design Patterns',
    code: 'ShP 2216',
    lectures: 20,
    practicalWork: 30,
    tutorIndependent: 10,
    studentIndependent: 90,
    color: 'independent'
  },
  {
    id: '4',
    name: 'WEB Technologies 1 (Front End)',
    code: 'WT 1207',
    lectures: 20,
    practicalWork: 30,
    tutorIndependent: 10,
    studentIndependent: 90,
    color: 'lecture'
  },
  {
    id: '5',
    name: 'Physical Education',
    code: 'Fiz 2116',
    lectures: 0,
    practicalWork: 20,
    tutorIndependent: 10,
    studentIndependent: 30,
    color: 'practical'
  },
  {
    id: '6',
    name: 'Russian Language 1',
    code: 'RL 2202',
    lectures: 20,
    practicalWork: 20,
    tutorIndependent: 10,
    studentIndependent: 40,
    color: 'independent'
  }
];

export const scheduleData: ScheduleItem[] = [
  // Monday
  {
    id: '1',
    day: 'Monday',
    time: '09:00',
    subject: subjects[0],
    room: 'A-201',
    type: 'lecture',
    teacher: 'Prof. Smith'
  },
  {
    id: '2',
    day: 'Monday',
    time: '11:00',
    subject: subjects[1],
    room: 'B-305',
    type: 'practical',
    teacher: 'Dr. Johnson'
  },
  {
    id: '3',
    day: 'Monday',
    time: '13:00',
    subject: subjects[2],
    room: 'C-102',
    type: 'lecture',
    teacher: 'Prof. Brown'
  },
  
  // Tuesday
  {
    id: '4',
    day: 'Tuesday',
    time: '09:00',
    subject: subjects[3],
    room: 'D-401',
    type: 'practical',
    teacher: 'Ms. Davis'
  },
  {
    id: '5',
    day: 'Tuesday',
    time: '11:00',
    subject: subjects[0],
    room: 'A-201',
    type: 'practical',
    teacher: 'Prof. Smith'
  },
  {
    id: '6',
    day: 'Tuesday',
    time: '15:00',
    subject: subjects[4],
    room: 'Gym-1',
    type: 'practical',
    teacher: 'Coach Wilson'
  },
  
  // Wednesday
  {
    id: '7',
    day: 'Wednesday',
    time: '10:00',
    subject: subjects[5],
    room: 'E-203',
    type: 'lecture',
    teacher: 'Dr. Petrov'
  },
  {
    id: '8',
    day: 'Wednesday',
    time: '12:00',
    subject: subjects[1],
    room: 'B-305',
    type: 'lecture',
    teacher: 'Dr. Johnson'
  },
  {
    id: '9',
    day: 'Wednesday',
    time: '14:00',
    subject: subjects[2],
    room: 'C-102',
    type: 'practical',
    teacher: 'Prof. Brown'
  },
  
  // Thursday
  {
    id: '10',
    day: 'Thursday',
    time: '09:00',
    subject: subjects[3],
    room: 'D-401',
    type: 'lecture',
    teacher: 'Ms. Davis'
  },
  {
    id: '11',
    day: 'Thursday',
    time: '11:00',
    subject: subjects[0],
    room: 'A-201',
    type: 'independent',
    teacher: 'Self Study'
  },
  {
    id: '12',
    day: 'Thursday',
    time: '13:00',
    subject: subjects[5],
    room: 'E-203',
    type: 'practical',
    teacher: 'Dr. Petrov'
  },
  
  // Friday
  {
    id: '13',
    day: 'Friday',
    time: '10:00',
    subject: subjects[1],
    room: 'B-305',
    type: 'practical',
    teacher: 'Dr. Johnson'
  },
  {
    id: '14',
    day: 'Friday',
    time: '12:00',
    subject: subjects[2],
    room: 'C-102',
    type: 'independent',
    teacher: 'Self Study'
  },
  {
    id: '15',
    day: 'Friday',
    time: '14:00',
    subject: subjects[4],
    room: 'Gym-1',
    type: 'practical',
    teacher: 'Coach Wilson'
  }
];

export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
export const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];