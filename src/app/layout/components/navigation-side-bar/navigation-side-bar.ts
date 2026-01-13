import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'cv-navigation-side-bar',
    imports: [SpeedDialModule, ToastModule, ButtonModule],
    providers: [MessageService],
    templateUrl: './navigation-side-bar.html',
    styleUrl: './navigation-side-bar.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationSideBar {
    items: MenuItem[] | undefined;

    constructor(
        private messageService: MessageService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.messageService.add({
                        severity: 'info',
                        summary: 'Add',
                        detail: 'Data Added',
                    });
                },
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Update',
                        detail: 'Data Updated',
                    });
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Delete',
                        detail: 'Data Deleted',
                    });
                },
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.router.navigate(['/fileupload']);
                },
            },
            {
                label: 'Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.open('https://angular.io/', '_blank');
                },
            },
        ];
    }
}
