export const endpoints = (q?: string | number) => ({
    popularShows: `/shows?page=1`,
    multipleSearch: `/search/shows?q=:${q}`,
    showProfile: `/shows/:${q}`,
});

export type MultipleSearchType = {
    score: number;
    show: {
        id: number;
        url: string;
        name: string;
        type: string;
        language: string;
        genres: string[];
        status: string;
        runtime: 30;
        averageRuntime: 30;
        premiered: string;
        ended: string;
        officialSite: null;
        schedule: {
            time: string;
            days: string[];
        };
        rating: {
            average: null;
        };
        weight: number;
        network: {
            id: number;
            name: string;
            country: {
                name: string;
                code: string;
                timezone: string;
            };
            officialSite: string;
        };
        webChannel: null;
        dvdCountry: null;
        externals: {
            tvrage: number;
            thetvdb: number;
            imdb: string;
        };
        image: {
            medium: string;
            original: string;
        };
        summary: string;
        updated: number;
        _links: {
            self: {
                href: string;
            };
            previousepisode: {
                href: string;
            };
        };
    };
};

export type PopularShowsType = {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: null;
    schedule: {
        time: string;
        days: string[];
    };
    rating: {
        average: null;
    };
    weight: number;
    network: {
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
            timezone: string;
        };
        officialSite: string;
    };
    webChannel: null;
    dvdCountry: null;
    externals: {
        tvrage: number;
        thetvdb: number;
        imdb: string;
    };
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    updated: number;
    _links: {
        self: {
            href: string;
        };
        previousepisode: {
            href: string;
        };
    };
};
