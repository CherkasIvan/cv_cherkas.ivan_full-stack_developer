/**
 * Angular Service Worker (ngsw-worker.js)
 * Версия: 1.0
 * Последнее обновление: 2024
 * Работает на localhost при использовании Angular CLI (ng serve)
 */

// Версия кэша - меняйте при обновлении файлов
const CACHE_VERSION = 'v1.0';
const STATIC_CACHE_NAME = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `dynamic-${CACHE_VERSION}`;
const CACHE_WHITELIST = [STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME];

// Статические ресурсы для предварительного кэширования
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/manifest.json',
    // Основные скрипты Angular
    '/runtime.js',
    '/polyfills.js',
    '/main.js',
    '/styles.css',
    // Добавьте другие статические ресурсы вашего приложения
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png',
];

// ========== УСТАНОВКА SERVICE WORKER ==========
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Установка...');

    event.waitUntil(
        caches
            .open(STATIC_CACHE_NAME)
            .then((cache) => {
                console.log(
                    '[Service Worker] Кэширование статических ресурсов',
                );
                // Кэшируем основные ресурсы, игнорируем ошибки для отдельных файлов
                return cache.addAll(STATIC_ASSETS).catch((err) => {
                    console.warn(
                        '[Service Worker] Некоторые ресурсы не закэшированы:',
                        err,
                    );
                });
            })
            .then(() => {
                // Активируем worker сразу после установки
                return self.skipWaiting();
            }),
    );
});

// ========== АКТИВАЦИЯ SERVICE WORKER ==========
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Активация...');

    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        // Удаляем старые кэши, не входящие в белый список
                        if (!CACHE_WHITELIST.includes(cacheName)) {
                            console.log(
                                '[Service Worker] Удаление старого кэша:',
                                cacheName,
                            );
                            return caches.delete(cacheName);
                        }
                    }),
                );
            })
            .then(() => {
                // Устанавливаем контроль над всеми клиентами
                return self.clients.claim();
            }),
    );
});

// ========== ПЕРЕХВАТ СЕТЕВЫХ ЗАПРОСОВ ==========
self.addEventListener('fetch', (event) => {
    const request = event.request;

    // Пропускаем не-GET запросы и chrome-extension
    if (
        request.method !== 'GET' ||
        request.url.startsWith('chrome-extension://')
    ) {
        return;
    }

    // Для API запросов используем стратегию "Network first"
    if (request.url.includes('/api/') || request.url.includes('/graphql')) {
        event.respondWith(networkFirstStrategy(request));
        return;
    }

    // Для статических ресурсов используем стратегию "Cache first"
    event.respondWith(cacheFirstStrategy(request));
});

// ========== СТРАТЕГИИ КЭШИРОВАНИЯ ==========

// Стратегия "Cache First" для статических ресурсов
async function cacheFirstStrategy(request) {
    try {
        // Пытаемся получить из кэша
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            // Обновляем кэш в фоне (stale-while-revalidate)
            event.waitUntil(updateCache(request));
            return cachedResponse;
        }

        // Если нет в кэше, идем в сеть
        const networkResponse = await fetch(request);

        // Кэшируем новый ресурс (если это успешный ответ)
        if (networkResponse.ok && isCacheable(request)) {
            const cache = await caches.open(DYNAMIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.error('[Service Worker] Ошибка cacheFirstStrategy:', error);

        // Fallback для основных страниц
        if (request.mode === 'navigate') {
            return caches.match('/index.html');
        }

        // Fallback для изображений
        if (request.destination === 'image') {
            return caches.match('/icons/icon-192x192.png');
        }

        return new Response('Нет подключения к интернету', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
}

// Стратегия "Network First" для API запросов
async function networkFirstStrategy(request) {
    try {
        // Сначала пробуем сеть
        const networkResponse = await fetch(request);

        // Кэшируем успешные ответы API
        if (networkResponse.ok) {
            const cache = await caches.open(DYNAMIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log(
            '[Service Worker] Нет сети, пробуем кэш для API:',
            request.url,
        );

        // Если сеть недоступна, ищем в кэше
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        // Fallback для API
        return new Response(
            JSON.stringify({ error: 'Нет подключения', offline: true }),
            {
                status: 503,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    }
}

// Фоновая проверка обновлений кэша
async function updateCache(request) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok && isCacheable(request)) {
            const cache = await caches.open(DYNAMIC_CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
    } catch (error) {
        // Ошибка сети - оставляем старую версию в кэше
        console.log('[Service Worker] Не удалось обновить кэш:', request.url);
    }
}

// Проверка, можно ли кэшировать ресурс
function isCacheable(request) {
    const url = new URL(request.url);

    // Не кэшируем данные, чувствительные к актуальности
    if (
        url.pathname.includes('/auth/') ||
        url.pathname.includes('/logout') ||
        url.search.includes('nocache=true')
    ) {
        return false;
    }

    // Кэшируем только успешные ответы и определенные типы
    return (
        request.destination === 'document' ||
        request.destination === 'style' ||
        request.destination === 'script' ||
        request.destination === 'image' ||
        request.destination === 'font'
    );
}

// ========== ПУШ-УВЕДОМЛЕНИЯ ==========
self.addEventListener('push', (event) => {
    console.log('[Service Worker] Push-уведомление получено');

    const options = {
        body: event.data ? event.data.text() : 'Новое уведомление',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-96x96.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
        },
        actions: [
            {
                action: 'open',
                title: 'Открыть приложение',
            },
            {
                action: 'close',
                title: 'Закрыть',
            },
        ],
    };

    event.waitUntil(
        self.registration.showNotification('Мое PWA Приложение', options),
    );
});

self.addEventListener('notificationclick', (event) => {
    console.log('[Service Worker] Клик по уведомлению');

    event.notification.close();

    if (event.action === 'open') {
        event.waitUntil(clients.openWindow('/'));
    }
});

// ========== СИНХРОНИЗАЦИЯ В ФОНЕ ==========
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-data') {
        console.log('[Service Worker] Фоновая синхронизация');
        event.waitUntil(syncData());
    }
});

async function syncData() {
    // Реализация фоновой синхронизации данных
    // Например, отправка накопленных данных на сервер
    try {
        const cache = await caches.open(DYNAMIC_CACHE_NAME);
        const keys = await cache.keys();

        const pendingRequests = keys.filter(
            (key) => key.url.includes('/api/') && key.method === 'POST',
        );

        for (const request of pendingRequests) {
            const response = await cache.match(request);
            const body = await response.json();

            // Отправка данных на сервер
            const result = await fetch(request.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (result.ok) {
                await cache.delete(request);
            }
        }
    } catch (error) {
        console.error('[Service Worker] Ошибка синхронизации:', error);
    }
}

// ========== СООБЩЕНИЯ ОТ КЛИЕНТА ==========
self.addEventListener('message', (event) => {
    console.log('[Service Worker] Получено сообщение:', event.data);

    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_CACHE_STATUS') {
        event.ports[0].postMessage({
            staticCache: STATIC_CACHE_NAME,
            dynamicCache: DYNAMIC_CACHE_NAME,
            version: CACHE_VERSION,
        });
    }
});

console.log('[Service Worker] Загружен и готов к работе');
