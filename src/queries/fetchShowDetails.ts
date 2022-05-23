import { ShowType } from './fetchListOfShows';
import { axiosInstance } from '../utils/axiosInstance';
import { endpoints } from '../utils/endpoints';
import { toast } from 'react-toastify';

export const fetchShowDetails = async (showId: string) => {
    try {
        const { data } = await axiosInstance.get(endpoints(showId).showProfile);
        return data as ShowType;
    } catch (err) {
        toast.error('Something went wrong please try again later');
    }
};
