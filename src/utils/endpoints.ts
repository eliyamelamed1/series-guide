export const endpoints = (q?: string | number) => ({
    listOfShows: `/shows?page=1`,
    search: `/search/shows?q=${q}`,
    showProfile: `/shows/${q}`,
});

export type SearchType = {
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

export type ListOfShowsType = {
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
