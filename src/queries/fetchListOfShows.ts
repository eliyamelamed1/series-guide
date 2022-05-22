import { axiosInstance } from '../utils/axiosInstance';
import { endpoints } from '../utils/endpoints';

export const fetchListOfShows = async ({ pageParam = 1 }) => {
    return await axiosInstance.get(endpoints(pageParam).listOfShows);
};
