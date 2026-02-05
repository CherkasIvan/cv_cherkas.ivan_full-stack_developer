import { TestBed } from '@angular/core/testing';

import { TranslateLoaderCreatorService } from './translate-loader-creator.service';

describe('TranslateLoaderCreatorService', () => {
    let service: TranslateLoaderCreatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TranslateLoaderCreatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
