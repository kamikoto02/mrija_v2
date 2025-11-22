import React, { useRef, useEffect } from "react";
import styles from './PastEvents.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {pastEventsArray} from "./pastEventsArray";

// массив фоток (подставь свои пути)
const photos = [
    "/images/past1.jpg",
    "/images/past2.jpg",
    "/images/past3.jpg",
    "/images/past4.jpg",
    "/images/past5.jpg",
    "/images/past6.jpg",
];

const PastEvents = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className="main-p">Memories</p>
                <h2 className={styles.title}>Past Events</h2>
                <p className={styles.subtitle}>Take a look at our recent community gatherings</p>
                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={4}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            550: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {pastEventsArray.map((src, i) => (
                            <SwiperSlide key={i}>
                                <div className={styles.photoWrapper}>
                                    <img className={styles.photo} src={src.image} alt={`past-${i}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button ref={prevRef} className={styles.prevBtn}>❮</button>
                    <button ref={nextRef} className={styles.nextBtn}>❯</button>
                </div>
                <div className={styles.images}>
                    {pastEventsArray.slice(0, 4).map((src, i) => (
                        <div className={styles.photoWrapper}>
                            <img className={styles.photo} src={src.image} alt={`past-${i}`} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PastEvents;
