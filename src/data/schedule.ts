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

export interface ClassItem {
  time: string;
  subject: string;
  classroom: string;
  type: 'lecture' | 'practice';
  lecturer: string;
}

export interface DaySchedule {
  day: string;
  classes: ClassItem[];
}

export interface ScheduleData {
  schedule: DaySchedule[];
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

export const scheduleData: ScheduleData = {
  "schedule": [
    {
      "day": "Monday",
      "classes": [
        {
          "time": "11:00-11:50",
          "subject": "Operating Systems",
          "classroom": "online",
          "type": "practice",
          "lecturer": "Kulbayeva Laura"
        },
        {
          "time": "16:00-16:50",
          "subject": "WEB Technologies 1 (Front End)",
          "classroom": "C1.358K",
          "type": "practice",
          "lecturer": "Aruhan Ali"
        },
        {
          "time": "17:00-17:50",
          "subject": "WEB Technologies 1 (Front End)",
          "classroom": "C1.358K",
          "type": "practice",
          "lecturer": "Aruhan Ali"
        },
        {
          "time": "18:00-18:50",
          "subject": "Design and Analysis of Algorithms",
          "classroom": "C1.237L",
          "type": "lecture",
          "lecturer": "Khamidulin Nursultan"
        },
        {
          "time": "19:00-19:50",
          "subject": "Design and Analysis of Algorithms",
          "classroom": "C1.237L",
          "type": "lecture",
          "lecturer": "Khamidulin Nursultan"
        },
        {
          "time": "20:00-20:50",
          "subject": "Russian Language 1",
          "classroom": "online",
          "type": "practice",
          "lecturer": "Sabira Sapina / Amarzholova Zhemma / Kaniyeva Gulmira / Akhmetvalieva I."
        },
        {
          "time": "21:00-21:50",
          "subject": "Russian Language 1",
          "classroom": "online",
          "type": "practice",
          "lecturer": "Sabira Sapina / Amarzholova Zhemma / Kaniyeva Gulmira / Akhmetvalieva I."
        }
      ]
    },
    {
      "day": "Tuesday",
      "classes": [
        {
          "time": "08:00-08:50",
          "subject": "WEB Technologies 1 (Front End)",
          "classroom": "online",
          "type": "lecture",
          "lecturer": "Aruhan Ali"
        },
        {
          "time": "09:00-09:50",
          "subject": "WEB Technologies 1 (Front End)",
          "classroom": "online",
          "type": "lecture",
          "lecturer": "Aruhan Ali"
        },
        {
          "time": "14:00-14:50",
          "subject": "Russian Language 1",
          "classroom": "C1.223P / C1.226P / C1.227P",
          "type": "practice",
          "lecturer": "Sabira Sapina / Kaniyeva Gulmira / Akhmetvalieva I."
        },
        {
          "time": "15:00-15:50",
          "subject": "Russian Language 1",
          "classroom": "C1.223P / C1.226P",
          "type": "practice",
          "lecturer": "Sabira Sapina / Kaniyeva Gulmira"
        },
        {
          "time": "16:00-16:50",
          "subject": "Russian Language 1",
          "classroom": "C1.223P",
          "type": "practice",
          "lecturer": "Amarzhoulova Zhemma"
        },
        {
          "time": "17:00-17:50",
          "subject": "Russian Language 1",
          "classroom": "C1.233P",
          "type": "practice",
          "lecturer": "Amarzhoulova Zhemma"
        },
        {
          "time": "19:00-19:50",
          "subject": "Software Design Patterns",
          "classroom": "C1.134L",
          "type": "lecture",
          "lecturer": "Temirgaly Dimmuhammed"
        }
      ]
    },
    {
      "day": "Wednesday",
      "classes": [
        {
          "time": "14:00-14:50",
          "subject": "Software Design Patterns",
          "classroom": "C1.134L",
          "type": "lecture",
          "lecturer": "Almas Ospanov"
        },
        {
          "time": "15:00-15:50",
          "subject": "Software Design Patterns",
          "classroom": "C1.134L",
          "type": "lecture",
          "lecturer": "Almas Ospanov"
        }
      ]
    },
    {
      "day": "Thursday",
      "classes": [
        {
          "time": "12:00-12:50",
          "subject": "Software Design Patterns",
          "classroom": "1C (C1.239K)",
          "type": "practice",
          "lecturer": "Temirgaliev Dilmukhhamed"
        },
        {
          "time": "13:05-13:55",
          "subject": "Software Design Patterns",
          "classroom": "1C (C1.239K)",
          "type": "practice",
          "lecturer": "Temirgaliev Dilmukhhamed"
        },
        {
          "time": "15:00-15:50",
          "subject": "Design and Analysis of Algorithms",
          "classroom": "C1.244K",
          "type": "practice",
          "lecturer": "Abay Rakhman"
        },
        {
          "time": "16:00-16:50",
          "subject": "Design and Analysis of Algorithms",
          "classroom": "C1.244K",
          "type": "practice",
          "lecturer": "Abay Rakhman"
        }
      ]
    },
    {
      "day": "Friday",
      "classes": [
        {
          "time": "10:00-10:50",
          "subject": "Operating Systems",
          "classroom": "online",
          "type": "lecture",
          "lecturer": "Kulbayeva Laura"
        },
        {
          "time": "11:00-11:50",
          "subject": "Operating Systems",
          "classroom": "online",
          "type": "lecture",
          "lecturer": "Kulbayeva Laura"
        },
        {
          "time": "16:00-16:50",
          "subject": "Design and Analysis of Algorithms",
          "classroom": "C1.244K",
          "type": "practice",
          "lecturer": "Abay Rakhman"
        },
        {
          "time": "17:00-17:50",
          "subject": "WEB Technologies 1 (Front End)",
          "classroom": "C1.358K",
          "type": "practice",
          "lecturer": "Aruhan Ali"
        }
      ]
    }
  ]
};