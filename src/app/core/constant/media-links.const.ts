import { MediaLink } from '@core/interfaces/media-link.interface';

// Файл: src/app/core/constant/media-links.const.ts
export const MEDIA_LINKS: MediaLink[] = [
    {
        label: 'Instagram',
        icon: 'pi pi-instagram',
        translationKey: 'media.instagram',
        command: () => {
            window.open('https://www.instagram.com/johnny_void_13', '_blank');
        },
    },
    {
        label: 'Telegram',
        icon: 'pi pi-telegram',
        translationKey: 'media.telegram',
        command: () => {
            window.open('https://t.me/IvanCherkas', '_blank');
        },
    },
    {
        label: 'Apple',
        icon: 'pi pi-apple',
        translationKey: 'media.apple',
        command: () => {
            window.open('https://vk.com/cherkasss', '_blank');
        },
    },
    {
        label: 'GitHub',
        icon: 'pi pi-github',
        translationKey: 'media.github',
        command: () => {
            window.open('https://github.com/CherkasIvan', '_blank');
        },
    },
    {
        label: 'LinkedIn',
        icon: 'pi pi-linkedin',
        translationKey: 'media.linkedin',
        command: () => {
            window.open(
                'https://www.linkedin.com/in/ivan-cherkas-723b411a2',
                '_blank',
            );
        },
    },
    {
        label: 'Facebook',
        icon: 'pi pi-facebook',
        translationKey: 'media.facebook',
        command: () => {
            window.open('https://www.facebook.com/ivan.cherkas', '_blank');
        },
    },
    {
        label: 'Gmail',
        icon: 'pi pi-envelope',
        translationKey: 'media.gmail',
        command: () => {
            window.location.href = 'mailto:cherkas.ivan13@gmail.com';
        },
    },
];
