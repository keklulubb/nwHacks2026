export type Task = {
  id: number;
  title: string;
  stressBefore: number; // 0 - 100, 100 being the least stress
  stressAfter: number;  // 0 - 100
  deadline: string;
  completed: boolean;
  completedDate: number; // 0 = not complete. otherwise, Monday to Sunday 1-7
  priority?: string;
};

// --- GLOBAL STATE VARIABLES ---
// We export these as 'let' so they can be modified by your functions
export let stressLevel: number = 65;
export let stressChanged: boolean = true;
export let tasksChanged: boolean = true;
export let weekChanged: boolean = true;
export let currentWeek: number = 2;
export let currentDay: number = 4;
export let reliefRecs: string[] = [];
export let tasksPriority: string[] = [];

export let userTasks: Task[][] = [
    [
        { id: 1, title: "Math homework", stressBefore: 100, stressAfter: 80, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 2, title: "Group project meeting", stressBefore: 80, stressAfter: 70, deadline: '2024-01-20', completed: true, completedDate: 2 },
        { id: 3, title: "Work out", stressBefore: 70, stressAfter: 85, deadline: '2024-01-20', completed: true, completedDate: 2 },
        { id: 4, title: "English essay draft", stressBefore: 85, stressAfter: 55, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 6, title: "Reply to emails", stressBefore: 55, stressAfter: 45, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 7, title: "Clean room", stressBefore: 45, stressAfter: 50, deadline: '2024-01-20', completed: true, completedDate: 1 },
    ],
    [
        { id: 9, title: "Math homework", stressBefore: 80, stressAfter: 65, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 10, title: "Study", stressBefore: 65, stressAfter: 60, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 11, title: "Hang out with friends", stressBefore: 60, stressAfter: 80, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 12, title: "Study", stressBefore: 80, stressAfter: 83, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 13, title: "Physics exam", stressBefore: 83, stressAfter: 43, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 14, title: "Go on a walk", stressBefore: 43, stressAfter: 53, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 15, title: "Part-time job", stressBefore: 53, stressAfter: 43, deadline: '2024-01-20', completed: true, completedDate: 1 },
        { id: 16, title: "Visit a new cafe", stressBefore: 43, stressAfter: 58, deadline: '2024-01-20', completed: true, completedDate: 1 },
    ],
    [
        { id: 17, title: "Math homework", stressBefore: 90, stressAfter: 75, deadline: '2024-01-20', completed: true, completedDate: 1, priority: 'Medium' },
        { id: 18, title: "Group Project", stressBefore: 75, stressAfter: 50, deadline: '2024-01-20', completed: true, completedDate: 2, priority: 'High' },
        { id: 19, title: "Work out", stressBefore: 50, stressAfter: 60, deadline: '2024-01-20', completed: true, completedDate: 2, priority: 'Medium' },
        { id: 20, title: "Listen to music", stressBefore: 60, stressAfter: 70, deadline: '2024-01-20', completed: true, completedDate: 3, priority: 'Medium' },
        { id: 21, title: "Reply to emails", stressBefore: 70, stressAfter: 65, deadline: '2024-01-20', completed: true, completedDate: 3, priority: 'Low' },
        { id: 22, title: "Finish presentation slides", stressBefore: 65, stressAfter: 65, deadline: '2024-01-20', completed: false, completedDate: 0, priority: 'High' },
        { id: 23, title: "Online meeting", stressBefore: 65, stressAfter: 65, deadline: '2024-01-20', completed: false, completedDate: 0, priority: 'High' },
    ],
];

export let weekSummary: string = "Based on the data provided, Week 2 showed a 48% increase in restorative energy compared to Week 1. Your 'POV Walking Tours' were a key driver in preventing biological bankruptcy.";

// --- DATA ACCESS FUNCTIONS ---

export function checkSetGlobals() {
    // Functions can now access the variables defined above directly
    console.log("Global state initialized");
}

export function getUnfinishedTasks() {
    return userTasks[currentWeek].filter((task) => !task.completed);
}

export function getFinishedTasksByDay(day: string) {
    const date = taskDayOfWeekToDate(day);
    return userTasks[currentWeek].filter((task) => {
        return task.completed && task.completedDate === date;
    });
}

export function addNewTask(task: Task) {
    userTasks[currentWeek].push(task);
    tasksChanged = true;
}

export function setFlag(action: string) {
    if (action === "finish") stressChanged = true;
    if (action === "add") tasksChanged = true;
    if (action === "time") weekChanged = true;
}

// --- HELPER FUNCTIONS ---

export function taskDayOfWeekToDate(day: string) {
    const strings = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const index = strings.indexOf(day);
    return index !== -1 ? index : 0;
}

export function taskDateToDayOfWeek(task: Task) {
    const strings = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if (task.completed && task.completedDate < strings.length) {
        return strings[task.completedDate];
    }
    return "";
}

export function taskStressChanges(tasks: Task[]) {
    return tasks
        .filter((t) => t.completed)
        .map((t) => ({
            ...t,
            delta: t.stressAfter - t.stressBefore,
        }));
}