import { createContext, useContext, ReactElement } from 'react';

export type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('light');

export function ThemeProvider(props: {
    theme: Theme;
    children: ReactElement;
}) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(ThemeContext);
    return theme;
}