import SectionTitle from "../../../Shared/SectionTitle";
import earPin from "../../../assets/home/ear pin.jpg"
import earRing from "../../../assets/home/ear ring.jpg"
import nosePin from "../../../assets/home/nose pin.jpg"
import nothPin from "../../../assets/home/noth pin.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
const Category = () => {
    return (
        <div className="px-14  mb-10">
            <SectionTitle heading="categories" subHeading="every time purchase"></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={earRing} alt="" /></SwiperSlide>
                <SwiperSlide><img src={earPin} alt="" /></SwiperSlide>
                <SwiperSlide><img src={nosePin} alt="" /></SwiperSlide>
                <SwiperSlide><img src={nothPin} alt="" /></SwiperSlide>
                <SwiperSlide><img src={earRing} alt="" /></SwiperSlide>
                <SwiperSlide><img src={earPin} alt="" /></SwiperSlide>
                <SwiperSlide><img src={nosePin} alt="" /></SwiperSlide>
                <SwiperSlide><img src={nothPin} alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Category;