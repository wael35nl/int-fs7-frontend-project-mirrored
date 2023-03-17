export interface CountriesT {
    name:         NameT;
    region:       string;
    languages:   { [key: string]: string };
    flag:         string;
    population:   number;
    flags:        FlagsT;
}

export interface NameT {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: TranslationT };
}

export interface TranslationT {
    official: string;
    common:   string;
}

export interface FlagsT {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface CountriesState {
    countries: CountriesT[];
    favoriteCountries: CountriesT[];
    isFavorite: boolean;
    isLoading: boolean;
    error:     boolean;
    message:   string;
}