import { ShowsType, endpoints } from '../utils/endpoints';

import { axiosInstance } from '../utils/axiosInstance';

export const fetchListOfShows = async ({ pageParam = 0 }) => {
    const { data } = await axiosInstance.get(endpoints(pageParam).listOfShows);
    return data as ShowsType[];
};
