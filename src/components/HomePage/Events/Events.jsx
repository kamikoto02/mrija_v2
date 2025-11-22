import React, { useRef, useEffect } from "react";
import styles from './Events.module.css';
import eventsArray from './eventsArray';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Events = () => {
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
                <p className="main-p">Community Events</p>
                <h2 className={styles.title}>Upcoming Events</h2>
                <p className={styles.subtitle}>
                    Connect with fellow Ukrainians and build lasting friendships
                </p>
                <div className={styles.swiperWrapper}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={2}
                        loop={true}
                        spaceBetween={20}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1280: { slidesPerView: 2 },
                        }}
                    >
                        {eventsArray.map((event, i) => (
                            <SwiperSlide key={i}>
                                <div className={styles.card}>
                                    <div className={styles.image_wrapper}>
                                        <img
                                            className={styles.image}
                                            src={event.image}
                                            alt="event"
                                        />
                                    </div>

                                    <div className={styles.card_content}>
                                        <div className={styles.duration}>
                                            <span className={styles.day}>{event.day}</span>
                                            <span className={styles.time}>{event.time}</span>
                                        </div>

                                        <h3 className={styles.name}>{event.name}</h3>
                                        <p className={styles.description}>{event.description}</p>

                                        <button className={styles.btn}>Register Now</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button ref={prevRef} className={styles.prevBtn}>
                        ❮
                    </button>
                    <button ref={nextRef} className={styles.nextBtn}>
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;