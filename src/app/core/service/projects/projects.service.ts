import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, map, of } from 'rxjs';

import { Project } from '@core/interfaces/project/project.interface';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    private http = inject(HttpClient);

    getProjectsByType(type: string): Observable<Project[]> {
        // Здесь будет реальный запрос к GitHub API
        // Например: this.http.get(`https://api.github.com/users/username/repos?type=${type}`)

        // Пока вернем заглушку
        return of<Project[]>([
            {
                id: '1',
                name: 'Project 1',
                description: 'Description 1',
                type: 'public',
                githubUrl: '...',
            },
            {
                id: '2',
                name: 'Project 2',
                description: 'Description 2',
                type: 'private',
                githubUrl: '...',
            },
        ]).pipe(
            map((projects) =>
                projects.filter((p) =>
                    type === 'all' ? true : p.type === type,
                ),
            ),
        );
    }
}
