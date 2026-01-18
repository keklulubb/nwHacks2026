export type Task = {
  id: string;
  title: string;
  stressBefore: number; // 0 - 100, 100 being the least stress
  stressAfter: number;  // 0 - 100
  deadline: number;
  completed: boolean;
  completedDate: number; //0 = not complete. otherwise, Monday to Sunday 1-7
};

globalThis.stressChanged = true;
globalThis.stressLevel = 100;
globalThis.reliefRecs = [];

export function taskDateToDayOfWeek(task: Task) {
    const strings = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (task.completed) {
        if (task.completedDate < strings.length && task.completedDate >= 0) {
            return strings[task.completedDate];
        }
    }
    return "";
}

export function taskStressChanges(tasks: Task[]) {
    return tasks.map((t) => ({
        ...t,
        delta: t.stressAfter - t.stressBefore,
    }));
}

export const seedTasks: Task[] = [
  { id: "1", title: "Math homework", stressBefore: 4, stressAfter: 5, deadline: 5, completed: true, completedDate: 1 },
  { id: "2", title: "English essay draft", stressBefore: 3, stressAfter: 4, deadline: 8, completed: false, completedDate: 1 },
  { id: "3", title: "Group project meeting", stressBefore: 4, stressAfter: 3, deadline: 5, completed: true, completedDate: 1 },
  { id: "4", title: "Workout / walk", stressBefore: 3, stressAfter: 2, deadline: 6, completed: true, completedDate: 1 },
  { id: "5", title: "Clean room", stressBefore: 2, stressAfter: 1, deadline: 5, completed: true, completedDate: 1 },
  { id: "6", title: "Reply to emails/messages", stressBefore: 3, stressAfter: 4, deadline: 5, completed: false, completedDate: 1 },
];

export const currentWeekIndex: number = 2;

export const seedWeeks: Task[][] = [
    [
        { id: "1", title: "Math homework", stressBefore: 100, stressAfter: 80, deadline: 5, completed: true, completedDate: 1 },
        { id: "2", title: "Group project meeting", stressBefore: 80, stressAfter: 70, deadline: 5, completed: true, completedDate: 2 },
        { id: "3", title: "Work out", stressBefore: 70, stressAfter: 85, deadline: 5, completed: true, completedDate: 2 },
        { id: "4", title: "English essay draft", stressBefore: 85, stressAfter: 55, deadline: 3, completed: true, completedDate: 1 },
        { id: "6", title: "Reply to emails", stressBefore: 55, stressAfter: 45, deadline: 5, completed: true, completedDate: 1 },
        { id: "7", title: "Clean room", stressBefore: 45, stressAfter: 50, deadline: 5, completed: true, completedDate: 1 },
    ],
    [
        { id: "9", title: "Math homework", stressBefore: 80, stressAfter: 65, deadline: 5, completed: true, completedDate: 1 },
        { id: "10", title: "Study", stressBefore: 65, stressAfter: 60, deadline: 5, completed: true, completedDate: 1 },
        { id: "11", title: "Hang out with friends", stressBefore: 60, stressAfter: 80, deadline: 5, completed: true, completedDate: 1 },
        { id: "12", title: "Study", stressBefore: 80, stressAfter: 83, deadline: 5, completed: true, completedDate: 1 },
        { id: "13", title: "Physics exam", stressBefore: 83, stressAfter: 43, deadline: 5, completed: true, completedDate: 1 },
        { id: "14", title: "Go on a walk", stressBefore: 43, stressAfter: 53, deadline: 5, completed: true, completedDate: 1 },
        { id: "14", title: "Part-time job", stressBefore: 53, stressAfter: 43, deadline: 5, completed: true, completedDate: 1 },
        { id: "14", title: "Visit a new cafe", stressBefore: 43, stressAfter: 58, deadline: 5, completed: true, completedDate: 1 },
    ],
    [
        //
    ],
];

export const seedDayLevels: Number[][] = [
    [80, 70, 85, 55, 45, 50, 70],
    [65, 60, 80, 43, 53, 43, 58],
    [],
]