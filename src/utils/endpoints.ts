export const endpoints = (q?: string | number) => ({
    listOfShows: `/shows?page=0`,
    search: `/search/shows?q=${q}`,
    showProfile: `/shows/${q}`,
});
