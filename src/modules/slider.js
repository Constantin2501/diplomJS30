import Swiper from 'swiper/bundle';

export const slider = () => {
    const swiper = new Swiper('.top-slider', {
        loop: true,
        autoplay: {
            delay: 2000
        },
    });
}