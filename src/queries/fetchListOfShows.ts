import { axiosInstance } from '../utils/axiosInstance';
import { endpoints } from '../utils/endpoints';
import { toast } from 'react-toastify';

export type ShowType = {
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
    officialSite: string | null;
    schedule: {
        time: string;
        days: string[];
    };
    rating: {
        average: number | null;
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

export const fetchListOfShows = async ({ pageParam = 0 }) => {
    try {
        const { data } = await axiosInstance.get(endpoints(pageParam).listOfShows);
        return data as ShowType[];
    } catch (err) {
        toast.error('Something went wrong please try again later');
    }
};
