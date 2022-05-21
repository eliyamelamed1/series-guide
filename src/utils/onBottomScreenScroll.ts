interface PropTypes {
    fetchNextPage: () => void;
    hasNextPage: boolean | undefined;
}

export const onBottomScreenScroll = ({ fetchNextPage, hasNextPage }: PropTypes): (() => void) => {
    const onScroll = function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (hasNextPage) fetchNextPage();
        }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
};
