export interface Project {
    id: string;
    name: string;
    description: string;
    type: 'public' | 'private' | 'all';
    githubUrl: string;
}
