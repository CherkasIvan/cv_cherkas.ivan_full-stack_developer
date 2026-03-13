import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
    selector: 'cv-projects-page',
    templateUrl: './projects-page.component.html',
    styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
    private route = inject(ActivatedRoute);

    projectType: string = 'public'; // public, private, all
    projects$: any; // ваш Observable с проектами

    ngOnInit() {
        // Получаем параметр из URL
        this.route.params.subscribe((params) => {
            this.projectType = params['type'] || 'all';
            this.loadProjects(this.projectType);
        });

        // Альтернатива с использованием параметров родительского маршрута
        // если используете вложенные маршруты
        this.route.parent?.params.subscribe((params) => {
            console.log('Parent params:', params);
        });
    }

    private loadProjects(type: string) {
        console.log(`Загрузка проектов типа: ${type}`);

        // Здесь будет логика загрузки проектов в зависимости от типа
        switch (type) {
            case 'public':
                // загрузить публичные проекты
                break;
            case 'private':
                // загрузить приватные проекты
                break;
            case 'all':
            default:
                // загрузить все проекты
                break;
        }
    }
}
