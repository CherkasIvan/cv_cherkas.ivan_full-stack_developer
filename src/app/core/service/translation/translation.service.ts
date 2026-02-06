import {
    DestroyRef,
    Injectable,
    computed,
    inject,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
    AVAILABLE_LANGUAGES,
    TRANSLATION_CONFIG,
} from '@core/constant/language.const';
import { Language } from '@core/interfaces/language.interface';
import { MediaLink } from '@core/interfaces/media-link.interface';
import { NavigationItem } from '@core/interfaces/navigation-item.interface';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {}
