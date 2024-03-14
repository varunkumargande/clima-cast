export interface Metadata {
  title: string;
  description: string;
  url: string;
  author: string;
  language: string;
  canonical: string;
  type: string;
  image: {
    url: string;
    width: number;
    height: number;
    type: string;
  };
  card: string;
  site: string;
  creator: string;
  keywords: string;
}

export interface ButtonProps<T, U> {
  theme: boolean;
  children: T;
  onClick?: (event: U) => void;
}

export interface LocationProps {
  name: string,
  lat: string,
  lon: string,
}

export interface WeatherProps {
  location: LocationProps | null;
}

export type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps<T> {
  children: T;
}

export interface SvgIcons {
  [key: string]: string;
}