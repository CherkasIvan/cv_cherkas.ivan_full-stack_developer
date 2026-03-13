export interface WorkExperienceItem {
    id: string;
    company: string;
    positionStart: string;
    positionEnd: string;
    dateStart: Date;
    dateEnd: Date;
    description?: string;
    logo: string;
    order: number;
    technologies?: string[];
    achievements?: string[];
}
