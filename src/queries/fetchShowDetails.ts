import { ShowType } from './fetchListOfShows';
import { axiosInstance } from '../utils/axiosInstance';
import { endpoints } from '../utils/endpoints';

export const fetchShowDetails = async (showId: string) => {
    const { data } = await axiosInstance.get(endpoints(showId).showProfile);
    return data as ShowType;
};
