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

export async function suggestDeStress(stressLevel: number) {
    const prompt = `Currently, I'm feeling ${stressLevel} out of 100 in terms of stress, with 100 being great and 0 being extremely stressed. Can you suggest three activities for me to do to take care of myself and de-stress?  The first activity could be a genre or style of music for me to listen to, the second should be a style of video I might be interested in right now, and the third can be anything.`;

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    //const model = 'gemini-3-pro-preview';
    const model = 'gemini-3-flash-preview';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: prompt,
                },
            ],
        },
    ];

    const response = ai.models.generateContent({
        model,
        contents,
    });

    const recommendation = await response;

    if (recommendation.text) {
        const shortPrompt = `Please extract the music style, video style, and activity from the following text into short suggestions, formatting the output as a single string delimited by commas only.` + `\n` + recommendation.text;

        const contentsShort = [
            {
                role: 'user',
                parts: [
                    {
                        text: shortPrompt,
                    },
                ],
            },
        ];
        const responseShort = ai.models.generateContent({
            model,
            contents: contentsShort,
        });
        const actions = await responseShort;

        let array: string[] = [];

        let split = actions.text?.split(",");
        if (split) {
            array = array.concat(split);
        }

        array.push(recommendation.text);

        console.log(array);
        return array;
    }

    return [];
}