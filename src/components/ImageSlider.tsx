import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ListOfShowsType } from '../utils/endpoints';
import React from 'react';
import ShowCard from './ShowCard';
import styles from '../styles/components/ImageSlider.module.scss';

const ImageSlider: React.FC<{ shows: ListOfShowsType[] }> = ({ shows }) => {
    return (
        <div className={styles.container}>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={7} navigation>
                {shows.map((show: ListOfShowsType) => {
                    return (
                        <SwiperSlide>
                            <button
                                onClick={() => {
                                    console.log('132123');
                                }}
                            >
                                <ShowCard show={show} key={show.id} />;
                            </button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
