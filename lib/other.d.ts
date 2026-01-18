declare global {
    var stressChanged: Boolean;
    var stressLevel: number;
    var reliefRecs: string[];
    var tasksChanged: Boolean;
    var tasksPriority: string[];
    var userTasks: Task[][];
    var currentWeek: number;
    var currentDay: number;
    var weekChanged: Boolean;
    var weekSummary: string;
}

export {};