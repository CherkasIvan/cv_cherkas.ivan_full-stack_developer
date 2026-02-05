import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { TooltipModule } from 'primeng/tooltip';

import { MEDIA_LINKS } from '@core/constant/media-links.const';
import { MediaLink } from '@core/interfaces/media-link.interface';

@Component({
    selector: 'cv-footer-media-links',
    standalone: true,
    imports: [CommonModule, SpeedDialModule, ButtonModule, TooltipModule],
    providers: [MessageService],
    templateUrl: './footer-media-links.component.html',
    styleUrl: './footer-media-links.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterMediaLinksComponent {
    readonly menuItems = signal<MenuItem[]>(
        MEDIA_LINKS.map((link: MediaLink) => {
            const iconName = link.icon.replace('pi pi-', '');
            return {
                label: link.label,
                icon: link.icon,
                styleClass: iconName,
                command: () => {
                    if (link.command) {
                        link.command();
                    } else if (link.url) {
                        window.open(link.url, '_blank');
                    }
                },
            };
        }),
    );
}
