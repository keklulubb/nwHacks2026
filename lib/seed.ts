export type Task = {
  id: string;
  title: string;
  stressBefore: number; // 1-5
  stressAfter: number;  // 1-5
  completed: boolean;
};

export const seedTasks: Task[] = [
  { id: "1", title: "Math homework", stressBefore: 4, stressAfter: 5, completed: true },
  { id: "2", title: "English essay draft", stressBefore: 3, stressAfter: 4, completed: false },
  { id: "3", title: "Group project meeting", stressBefore: 4, stressAfter: 3, completed: true },
  { id: "4", title: "Workout / walk", stressBefore: 3, stressAfter: 2, completed: true },
  { id: "5", title: "Clean room", stressBefore: 2, stressAfter: 1, completed: true },
  { id: "6", title: "Reply to emails/messages", stressBefore: 3, stressAfter: 4, completed: false },
];
