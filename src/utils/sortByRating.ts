export const sortByRating = (a: any, b: any) => {
    if (a.rating.average > b.rating.average) return -1;
    if (a.rating.average < b.rating.average) return 1;
    return 0;
};
