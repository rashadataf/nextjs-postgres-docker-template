// ENUMS
export enum THEME {
    DARK = 'dark',
    LIGHT = 'light'
}

export enum Role {
    User = 'user',
    Admin = 'admin',
}

// Types
export type ThemeContextType = {
    theme: THEME,
    toggleTheme: () => void;
}

export type CredentialsType = {
    email: string;
    password: string;
}