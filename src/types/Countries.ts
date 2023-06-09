export interface CountriesT {
    name: {
        common: string;
        official: string;
        nativeName?: { [key: string]: {
            official: string;
            common: string;
        } };
    };
    region: string;
    languages: { [key: string]: string };
    population: number;
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
}

export interface CurrenciesT {
    XPF?: AedT;
    USD?: AedT;
    PLN?: AedT;
    TTD?: AedT;
    NOK?: AedT;
    BWP?: AedT;
    HTG?: AedT;
    LSL?: AedT;
    ZAR?: AedT;
    DZD?: AedT;
    EUR?: AedT;
    STN?: AedT;
    XCD?: AedT;
    TJS?: AedT;
    XAF?: AedT;
    SCR?: AedT;
    GMD?: AedT;
    AED?: AedT;
    XOF?: AedT;
    AWG?: AedT;
    DOP?: AedT;
    ALL?: AedT;
    VND?: AedT;
    UGX?: AedT;
    AFN?: AedT;
    CAD?: AedT;
    IDR?: AedT;
    AUD?: AedT;
    BYN?: AedT;
    ANG?: AedT;
    BBD?: AedT;
    KID?: AedT;
    KES?: AedT;
    SBD?: AedT;
    AOA?: AedT;
    NPR?: AedT;
    RSD?: AedT;
    LRD?: AedT;
    UZS?: AedT;
    HKD?: AedT;
    MUR?: AedT;
    WST?: AedT;
    DKK?: AedT;
    QAR?: AedT;
    ERN?: AedT;
    GEL?: AedT;
    BGN?: AedT;
    MKD?: AedT;
    BOB?: AedT;
    MAD?: AedT;
    MRU?: AedT;
    BND?: AedT;
    SGD?: AedT;
    MXN?: AedT;
    KZT?: AedT;
    BAM?: {
        name: string;
    };
    PYG?: AedT;
    SRD?: AedT;
    JOD?: AedT;
    SOS?: AedT;
    NGN?: AedT;
    GTQ?: AedT;
    GYD?: AedT;
    LKR?: AedT;
    NAD?: AedT;
    MZN?: AedT;
    LYD?: AedT;
    KPW?: AedT;
    SZL?: AedT;
    COP?: AedT;
    ISK?: AedT;
    CKD?: AedT;
    NZD?: AedT;
    TRY?: AedT;
    ZMW?: AedT;
    YER?: AedT;
    MMK?: AedT;
    BDT?: AedT;
    PGK?: AedT;
    AMD?: AedT;
    MYR?: AedT;
    GBP?: AedT;
    GGP?: AedT;
    HUF?: AedT;
    SDG?: {
        name: string;
    };
    MOP?: AedT;
    MWK?: AedT;
    EGP?: AedT;
    ILS?: AedT;
    ZWL?: AedT;
    SLL?: AedT;
    FOK?: AedT;
    KMF?: AedT;
    SHP?: AedT;
    VES?: AedT;
    MGA?: AedT;
    CHF?: AedT;
    CLP?: AedT;
    TZS?: AedT;
    JPY?: AedT;
    CDF?: AedT;
    BSD?: AedT;
    INR?: AedT;
    SYP?: AedT;
    PAB?: AedT;
    ARS?: AedT;
    PHP?: AedT;
    PKR?: AedT;
    BIF?: AedT;
    PEN?: AedT;
    RWF?: AedT;
    LBP?: AedT;
    JEP?: AedT;
    MDL?: AedT;
    CRC?: AedT;
    AZN?: AedT;
    GHS?: AedT;
    FJD?: AedT;
    CZK?: AedT;
    OMR?: AedT;
    KGS?: AedT;
    THB?: AedT;
    CNY?: AedT;
    GNF?: AedT;
    VUV?: AedT;
    RUB?: AedT;
    ETB?: AedT;
    SAR?: AedT;
    KHR?: AedT;
    KWD?: AedT;
    IMP?: AedT;
    TVD?: AedT;
    IQD?: AedT;
    RON?: AedT;
    SSP?: AedT;
    GIP?: AedT;
    HNL?: AedT;
    UAH?: AedT;
    MNT?: AedT;
    BRL?: AedT;
    BTN?: AedT;
    CVE?: AedT;
    TOP?: AedT;
    IRR?: AedT;
    UYU?: AedT;
    KRW?: AedT;
    TWD?: AedT;
    CUC?: AedT;
    CUP?: AedT;
    MVR?: AedT;
    TND?: AedT;
    BHD?: AedT;
    LAK?: AedT;
    KYD?: AedT;
    JMD?: AedT;
    NIO?: AedT;
    TMT?: AedT;
    BZD?: AedT;
    BMD?: AedT;
    FKP?: AedT;
    SEK?: AedT;
    DJF?: AedT;
}

export interface AedT {
    name:   string;
    symbol: string;
}

export interface CountriesState {
    countries: CountriesT[];
    regionSearch: CountriesT[];
    countrySearch: CountriesT[];
    favoriteCountries: CountriesT[];
    isFavorite: boolean;
    isLoading: boolean;
    isError: boolean;
    message: string;
}