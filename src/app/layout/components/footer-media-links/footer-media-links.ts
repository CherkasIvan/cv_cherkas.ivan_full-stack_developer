import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'cv-footer-media-links',
    standalone: true,
    imports: [SpeedDialModule, ToastModule, ButtonModule],
    providers: [MessageService],
    templateUrl: './footer-media-links.html',
    styleUrl: './footer-media-links.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMediaLinks {
    [x: string]: { [klass: string]: any } | null | undefined;
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
