import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component/language-switcher.component';

import { NavigationChildLink } from '@core/interfaces/navigation/navigation-child-link.interface';
import { NavigationLink } from '@core/interfaces/navigation/navigation-link.interface';
import { FirebaseNavigationService } from '@core/service/firebase-navigation/firebase-navigation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'cv-navigation-side-bar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        MatExpansionModule,
        TranslateModule,
        LanguageSwitcherComponent,
    ],
    templateUrl: './navigation-side-bar.component.html',
    styleUrls: ['./navigation-side-bar.component.scss'],
})
export class NavigationSideBarComponent implements OnInit {
    public readonly navigate = output<void>();

    private readonly navigationService = inject(FirebaseNavigationService);
    private readonly router = inject(Router);
    private readonly translate = inject(TranslateService);

    public readonly navigationLinks = this.navigationService.navigationLinks;

    public expandedPanels = new Set<string>();

    public ngOnInit(): void {
        this.translate.onLangChange.subscribe(() => {
            // при смене языка можно обновить заголовки, если нужно
        });

        // Автоматически открываем панели, если дочерний роут активен
        setTimeout(() => {
            this.navigationLinks().forEach((link) => {
                if (link.hasChildren) {
                    const children = this.getChildren(link.id);
                    if (this.hasActiveChild(children, link.path)) {
                        this.expandedPanels.add(link.id);
                    }
                }
            });
        }, 500);
    }

    public onNavigate(): void {
        this.navigate.emit();
    }

    public togglePanel(linkId: string): void {
        this.expandedPanels.has(linkId)
            ? this.expandedPanels.delete(linkId)
            : this.expandedPanels.add(linkId);
    }

    public isPanelExpanded(linkId: string): boolean {
        return this.expandedPanels.has(linkId);
    }

    public hasActiveChild(
        children: NavigationChildLink[],
        parentPath: string,
    ): boolean {
        const currentUrl = this.router.url;
        return children.some((child) => {
            const fullPath = `/${parentPath}/${child.path}`.replace(
                /\/+/g,
                '/',
            );
            return (
                currentUrl === fullPath ||
                currentUrl.startsWith(fullPath + '/') ||
                currentUrl.startsWith(fullPath + '?')
            );
        });
    }

    public getChildren(linkId: string): NavigationChildLink[] {
        return this.navigationService.getChildrenForParent(linkId);
    }
}
