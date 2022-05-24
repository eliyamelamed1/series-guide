export const routes = (q?: number | string) => {
    return {
        home: '/',
        search: `/search/${q}`,
        showProfile: `/${q}`,
    };
};
