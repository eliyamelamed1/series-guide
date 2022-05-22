export const routes = (id?: number) => {
    return {
        home: '/',
        search: '/search',
        showProfile: `/${id}`,
    };
};
