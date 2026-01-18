export type Task = {
  id: string;
  title: string;
  stressBefore: number; // 0 - 100, 100 being the least stress
  stressAfter: number;  // 0 - 100
  deadline: number;
  completed: boolean;
  completedDate: number; //0 = not complete. otherwise, Monday to Sunday 1-7
};

export function checkSetGlobals() {
    if (typeof stressChanged === 'undefined') {
        console.log("go");
        setGlobals();
    }
}

export function setGlobals() {
    globalThis.stressChanged = true; //all flags set to TRUE so they generate new content on startup
    globalThis.stressLevel = 100;
    globalThis.reliefRecs = [];
    globalThis.tasksChanged = true;
    globalThis.tasksPriority = [];
    globalThis.userTasks = [
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
            { id: "15", title: "Part-time job", stressBefore: 53, stressAfter: 43, deadline: 5, completed: true, completedDate: 1 },
            { id: "16", title: "Visit a new cafe", stressBefore: 43, stressAfter: 58, deadline: 5, completed: true, completedDate: 1 },
        ],
        [
            { id: "17", title: "Math homework", stressBefore: 90, stressAfter: 75, deadline: 5, completed: true, completedDate: 1 },
            { id: "18", title: "Group Project", stressBefore: 75, stressAfter: 50, deadline: 5, completed: true, completedDate: 2 },
            { id: "19", title: "Work out", stressBefore: 50, stressAfter: 60, deadline: 5, completed: true, completedDate: 2 },
            { id: "20", title: "Listen to music", stressBefore: 60, stressAfter: 70, deadline: 5, completed: true, completedDate: 3 },
            { id: "21", title: "Reply to emails", stressBefore: 70, stressAfter: 65, deadline: 5, completed: true, completedDate: 3 },
            { id: "22", title: "Finish presentation slides", stressBefore: 65, stressAfter: 65, deadline: 5, completed: false, completedDate: 0 },
            { id: "23", title: "Online meeting", stressBefore: 50, stressAfter: 65, deadline: 65, completed: false, completedDate: 0 },
        ],
    ];
    globalThis.currentWeek = 2;
    globalThis.weekChanged = true;
    globalThis.weekSummary = "Based on the data you provided, here is an analysis of your stress trends over the last two weeks, along with suggestions for maintaining your current momentum (which aligns with your current \"75/100\" mood).\n" +
        "\n" +
        "### 1. Week 1 vs. Week 2: A Comparative Analysis\n" +
        "\n" +
        "**The Big Picture:**\n" +
        "While both weeks had significant stressors, **Week 2 was much better balanced.** You managed to increase your restorative activities significantly, which likely contributed to you feeling a \"75/100\" today.\n" +
        "\n" +
        "*   **Stress Load (The Drain):** surprisingly, your total \"drain\" was identical in both weeks (**-70** total stress points each week).\n" +
        "    *   *Week 1:* You dealt with a heavy English draft (-30) and Math (-20).\n" +
        "    *   *Week 2:* You dealt with a massive Physics exam (-40) and a job (-10).\n" +
        "*   **Recovery (The Charge):** This is where the major change happened.\n" +
        "    *   *Week 1:* You only generated **+20** points of restorative energy.\n" +
        "    *   *Week 2:* You generated **+48** points of restorative energy.\n" +
        "\n" +
        "**Conclusion:** You didn't reduce your workload in Week 2 (in fact, the Physics exam was your single most stressful event), but you **more than doubled** your self-care efforts to compensate. This prevented a crash.\n" +
        "\n" +
        "### 2. New Activities in Week 2 & Their Impact\n" +
        "\n" +
        "You introduced several new variables in Week 2. Here is how they affected you:\n" +
        "\n" +
        "*   **The \"Social & Novelty\" Buffer (New High-Yield Activities):**\n" +
        "    *   *Hang out with friends (+20)* and *Visit a new cafe (+15)* were massive wins.\n" +
        "    *   **Impact:** These two activities alone provided more relief (+35) than your entire recovery total in Week 1. This suggests that **social connection** and **change of scenery** are your most effective de-stressors right now.\n" +
        "*   **The \"Study\" Paradox:**\n" +
        "    *   You logged \"Study\" twice in Week 2: once as a drain (-5) and once as a gain (+3).\n" +
        "    *   **Impact:** This is a crucial insight. It proves that *how* or *where* you study changes how it feels. It is highly likely that the positive study session occurred in the \"New Cafe\" or with \"Friends,\" turning a chore into a net positive.\n" +
        "*   **Physical Activity Shift:**\n" +
        "    *   You swapped *Work out (+15)* in Week 1 for *Go on a walk (+10)* in Week 2.\n" +
        "    *   **Impact:** While the walk was positive, the workout was technically more effective for you. However, the walk might have been necessary due to time constraints from the Physics exam.\n" +
        "\n" +
        "### 3. Suggestions for Week 3\n" +
        "\n" +
        "To keep your mood at 75/100 or higher, here is a strategy based on your data:\n" +
        "\n" +
        "**A. Combine \"Study\" with \"Novelty\"**\n" +
        "Your data shows that \"Math Homework\" is consistently draining (-20, -15), but one of your \"Study\" sessions was actually positive (+3).\n" +
        "*   *Action:* Do not do your Math homework at your desk at home. Take it to that **New Cafe** or a library you haven't visited before. Try to turn the -15 drain into a neutral (0) or positive (+3) experience by changing the environment.\n" +
        "\n" +
        "**B. Re-introduce High-Intensity Movement**\n" +
        "\"Go on a walk\" (+10) was good, but \"Work out\" (+15) from Week 1 was better.\n" +
        "*   *Action:* If you have time this week, bring back the full workout. The higher physical exertion seems to give you a better dopamine return than a gentle walk.\n" +
        "\n" +
        "**C. Manage the \"Job\" Drain**\n" +
        "You listed \"Part-time job\" as a new stressor (-10).\n" +
        "*   *Action:* Since you know the job costs you -10 energy, schedule a +10 activity immediately after your shift. Based on your data, a \"Walk\" (+10) is the perfect mathematical offset to the job. Create a ritual where you walk home or take a 15-minute detour after work to reset to neutral.\n" +
        "\n" +
        "**D. The \"Physics Exam\" Hangover**\n" +
        "You just survived a -40 stress event. Even though you are feeling okay now, high-stress events often have a delayed fatigue effect.\n" +
        "*   *Action:* Keep the \"Hang out with friends\" (+20) in the schedule for this weekend. You need that high-value social charge to ensure you don't burn out post-exam.";
}

export function taskDateToDayOfWeek(task: Task) {
    const strings = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if (task.completed) {
        if (task.completedDate < strings.length && task.completedDate >= 0) {
            return strings[task.completedDate];
        }
    }
    return "";
}
export function taskStressChanges(tasks: Task[]) {
    return tasks.filter((t) => (
        t.completed
    )).map((t) => ({
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