import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GlassGradientService {
    // Сигнал для текущего градиента
    currentGradient = signal<string>('');

    // Цвета для генерации
    private colorPalettes = [
        ['#FFD700', '#FFA500', '#FF8C00', '#FF6347'], // золото-оранжевый
        ['#98FB98', '#90EE90', '#32CD32', '#228B22'], // зеленый
        ['#87CEEB', '#87CEFA', '#00BFFF', '#1E90FF'], // голубой
        ['#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF'], // фиолетовый
        ['#F08080', '#FA8072', '#E9967A', '#FFA07A'], // коралловый
        ['#FFB6C1', '#FF69B4', '#FF1493', '#C71585'], // розовый
    ];

    // Начальные цвета для плавного перехода
    private previousPalette: string[] = [];
    private currentPalette: string[] = [];
    private transitionProgress = 0;
    private animationFrame: any;
    private startTime: number = 0;
    private duration: number = 10000; // 10 секунд на переход

    constructor() {
        // Инициализируем случайной палитрой
        const randomIndex = Math.floor(
            Math.random() * this.colorPalettes.length,
        );
        this.currentPalette = [...this.colorPalettes[randomIndex]];
        this.previousPalette = [...this.currentPalette];
        this.startSmoothGradientAnimation();
    }

    // Функция для интерполяции цветов
    private interpolateColor(
        color1: string,
        color2: string,
        factor: number,
    ): string {
        // Парсим HEX в RGB
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);

        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);

        // Интерполируем
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    // Получение текущего интерполированного градиента
    private getCurrentGradient(): string {
        const factor = this.transitionProgress;

        // Интерполируем каждый цвет
        const colors = this.currentPalette.map((color, index) => {
            if (index < this.previousPalette.length) {
                return this.interpolateColor(
                    this.previousPalette[index],
                    color,
                    factor,
                );
            }
            return color;
        });

        // Генерируем углы
        const angle1 = Math.floor(Math.random() * 360);
        const angle2 = Math.floor(Math.random() * 360);

        // Случайные проценты для остановок градиента
        const stop1 = Math.floor(Math.random() * 30) + 10;
        const stop2 = Math.floor(Math.random() * 30) + 40;
        const stop3 = Math.floor(Math.random() * 30) + 70;

        // Создаем градиент с эффектом стекла
        return `
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%,
                ${colors[0]} 0%,
                ${colors[1]} ${stop1}%,
                ${colors[2]} ${stop2}%,
                ${colors[3]} ${stop3}%,
                transparent 100%
            ),
            linear-gradient(${angle1}deg,
                rgba(255,255,255,0.2) 0%,
                rgba(255,255,255,0) 30%,
                rgba(255,255,255,0.1) 70%,
                rgba(255,255,255,0) 100%
            ),
            linear-gradient(${angle2}deg,
                rgba(255,255,255,0.15) 0%,
                rgba(255,255,255,0) 40%,
                rgba(255,255,255,0.1) 80%,
                rgba(255,255,255,0) 100%
            )
        `;
    }

    // Плавная анимация градиента
    startSmoothGradientAnimation(): void {
        const animate = (currentTime: number) => {
            if (!this.startTime) {
                this.startTime = currentTime;
            }

            const elapsed = currentTime - this.startTime;

            // Обновляем прогресс (от 0 до 1)
            this.transitionProgress = Math.min(elapsed / this.duration, 1);

            // Обновляем градиент
            const gradient = this.getCurrentGradient();
            this.currentGradient.set(gradient);
            document.documentElement.style.setProperty(
                '--glass-gradient',
                gradient,
            );

            if (this.transitionProgress < 1) {
                // Продолжаем анимацию
                this.animationFrame = requestAnimationFrame(animate);
            } else {
                // Переходим к новой палитре
                this.previousPalette = [...this.currentPalette];

                // Выбираем новую палитру (не такую же как предыдущая)
                let newIndex;
                do {
                    newIndex = Math.floor(
                        Math.random() * this.colorPalettes.length,
                    );
                } while (this.colorPalettes[newIndex] === this.currentPalette);

                this.currentPalette = [...this.colorPalettes[newIndex]];
                this.transitionProgress = 0;
                this.startTime = currentTime;

                // Запускаем следующую анимацию
                this.animationFrame = requestAnimationFrame(animate);
            }
        };

        this.animationFrame = requestAnimationFrame(animate);
    }

    // Ручная смена палитры
    randomizePalette(): void {
        const newIndex = Math.floor(Math.random() * this.colorPalettes.length);
        this.previousPalette = [...this.currentPalette];
        this.currentPalette = [...this.colorPalettes[newIndex]];
        this.transitionProgress = 0;
        this.startTime = 0;
    }

    // Генерация случайного градиента (для ручного вызова)
    generateGlassGradient(): string {
        return this.getCurrentGradient();
    }
}
