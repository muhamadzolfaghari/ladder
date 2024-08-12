import { Generated } from "kysely";

export interface LadderTable {
  id: Generated<number>;
  user_id: string;
  field_of_study: string;
  goal: string;
  current_level: string;
  time_commitment: string;
  preferred_learning_style: string;
  learning_pace: string;
  resources_available: string;
  preferred_tools_and_platforms: string;
  language: string;
}

export interface LearningPathTable {
  id: Generated<number>;
  ladder_id: number;
  phase: string;
  duration: string;
}

export interface DailyRoutineTable {
  id: Generated<number>;
  learning_path_id: number;
  task: string;
  resource: string;
  time: string;
}

export interface DailyRoutineWeekDaysTable {
  id: Generated<number>;
  daily_routine_id: number;
  week_number: number;
  week_day: number;
}

export interface VisitorStatusTable {
  id: Generated<number>;
  user_id: string;
  is_first_visit: boolean;
}

export interface LearningPathWeekDaysTable {
  id: Generated<number>;
  learning_path_id: number;
  week_number: number;
  week_day: number;
}

export interface Database {
  ladders: LadderTable;
  learning_path_week_days: LearningPathWeekDaysTable;
  learning_paths: LearningPathTable;
  daily_routines: DailyRoutineTable;
  visitor_status: VisitorStatusTable;
  daily_routine_week_days: DailyRoutineWeekDaysTable;
}
