import {
    GoogleGenAI,
} from '@google/genai';

import {Task} from "@/lib/seed";

export async function prioritizeTasks(tasks: Task[]) {
    let taskList = "";

    for (const task of tasks) {
        taskList += task.title + ", "
    }

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    const tools = [
        {
            googleSearch: {
            }
        },
    ];

    //const model = 'gemini-3-pro-preview';
    const model = 'gemini-3-flash-preview';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: `This week, I need to finish these tasks: ${taskList}. Can you tell me which three tasks are my top priority? If there are less than three tasks, list them all.`,
                },
            ],
        },
    ];

    const contentsShort = [
        {
            role: 'user',
            parts: [
                {
                    text: `This week, I need to finish these tasks: ${taskList}. Can you tell me which three tasks are my top priority? If there are less than three tasks, list them all. Please format the output as a single string, delimited by commas only, no spaces between items.`,
                },
            ],
        },
    ];

    const response = ai.models.generateContent({
        model,
        //config,
        contents,
    });

    const responseShort = ai.models.generateContent({
        model,
        //config,
        contents: contentsShort,
    });

    const [recommend, actions] = await Promise.all([response, responseShort]);

    let array: string[] = [];

    let split = actions.text?.split(",");
    if (split) {
        array = array.concat(split);
    }

    if (recommend.text) {
        array.push(recommend.text);
    }

    console.log(array);
    return array
}