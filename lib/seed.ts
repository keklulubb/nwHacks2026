export type Task = {
  id: string;
  title: string;
  stressBefore: number; // 1-5, 1 being the least stress
  stressAfter: number;  // 1-5
  deadline: number;
  completed: boolean;
};


export const seedTasks: Task[] = [
  { id: "1", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
  { id: "2", title: "English essay draft", stressBefore: 3, stressAfter: 4, deadline: 8, completed: false },
  { id: "3", title: "Group project meeting", stressBefore: 4, stressAfter: 3, deadline: 5, completed: true },
  { id: "4", title: "Workout / walk", stressBefore: 3, stressAfter: 2, deadline: 6, completed: true },
  { id: "5", title: "Clean room", stressBefore: 2, stressAfter: 1, deadline: 5, completed: true },
  { id: "6", title: "Reply to emails/messages", stressBefore: 3, stressAfter: 4, deadline: 5, completed: false },
];

export const currentWeekIndex: number = 2;

export const seedWeeks: Task[][] = [
    [ //tasks we did the week before last
        { id: "1", title: "Math homework", stressBefore: 1, stressAfter: 2, deadline: 5, completed: true },
        { id: "2", title: "English essay", stressBefore: 2, stressAfter: 4, deadline: 5, completed: true },
        { id: "3", title: "Group project meeting", stressBefore: 3, stressAfter: 3, deadline: 5, completed: true },
        { id: "4", title: "Study", stressBefore: 4, stressAfter: 2, deadline: 3, completed: true },
        { id: "5", title: "Physics homework", stressBefore: 4, stressAfter: 4, deadline: 5, completed: true },
        { id: "6", title: "Work out", stressBefore: 4, stressAfter: 2, deadline: 5, completed: true },
        { id: "7", title: "Read a book", stressBefore: 5, stressAfter: 2, deadline: 5, completed: true },
    ],
    [
        { id: "8", title: "stress", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
        { id: "9", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
        { id: "10", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
        { id: "11", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
        { id: "12", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
        { id: "13", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
        { id: "14", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true },
    ],
    [
        //
    ],
];