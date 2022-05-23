export const endpoints = (q?: string | number) => ({
    listOfShows: `/shows?page=${q}`,
    search: `/search/shows?q=${q}`,
    showProfile: `/shows/${q}`,
});
