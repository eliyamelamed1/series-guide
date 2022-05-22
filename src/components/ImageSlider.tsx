import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import React from 'react';
import ShowCard from './ShowCard';
import { ShowsType } from '../utils/endpoints';
import styles from '../styles/components/ImageSlider.module.scss';

const ImageSlider: React.FC<{ shows: ShowsType[] }> = ({ shows }) => {
    return (
        <div className={styles.container}>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={7} navigation>
                {shows.map((show: ShowsType) => {
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
