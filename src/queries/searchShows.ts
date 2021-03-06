import { axiosInstance } from '../utils/axiosInstance';
import { endpoints } from '../utils/endpoints';

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

export const searchShows = async (q: string) => {
    const { data } = await axiosInstance.get(endpoints(q).search);
    return data as SearchType[];
};
