export const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1024,
    LARGE: 1280,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const GRID_COLUMNS: Record<Breakpoint, number> = {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
    LARGE: 3,
};

export const ROW_HEIGHTS: Record<Breakpoint, string> = {
    MOBILE: '450px',
    TABLET: '480px',
    DESKTOP: '500px',
    LARGE: '520px',
};

export interface BreakpointConfig {
    breakpoint: number;
    columns: number;
    rowHeight: string;
}

export const BREAKPOINT_CONFIGS: BreakpointConfig[] = [
    { breakpoint: 0, columns: 1, rowHeight: ROW_HEIGHTS.MOBILE },
    {
        breakpoint: BREAKPOINTS.MOBILE + 1,
        columns: 2,
        rowHeight: ROW_HEIGHTS.TABLET,
    },
    {
        breakpoint: BREAKPOINTS.TABLET + 1,
        columns: 3,
        rowHeight: ROW_HEIGHTS.DESKTOP,
    },
    {
        breakpoint: BREAKPOINTS.DESKTOP + 1,
        columns: 3,
        rowHeight: ROW_HEIGHTS.LARGE,
    },
];
