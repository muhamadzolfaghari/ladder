import LearningPathWeekDaysResponse from "@/types/LearningPathWeekDaysResponse";
import { useMutation } from "@tanstack/react-query";

async function DailyRoutinCreate(): Promise<LearningPathWeekDaysResponse>{
    const response = await fetch("/api/daily-routines/create",{
        method:'Post',
        headers: {
            'Content-Type': 'application/json',
          },

    })
    return response.json();

}

export function useDailyRoutinCreate(){
    return useMutation<LearningPathWeekDaysResponse>({
        mutationFn:DailyRoutinCreate
    })
}