export type CourseLevelType = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ICourse {
  title: string;
  description: string;
  level: CourseLevelType;
  image: string;
  category: string;
  id: number;
}
