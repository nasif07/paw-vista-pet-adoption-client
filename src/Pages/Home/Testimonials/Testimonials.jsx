/* eslint-disable react/no-unescaped-entities */
import Container from "../../../Components/Container";
import avator1 from "../../../assets/avator1.png"
import avator2 from "../../../assets/avator2.png"
import Title from "../../../Components/Title";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {

    return (
        <Container>
            <Title subHeading={"Testimonials"} heading={"Our Happy Clients"}></Title>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-6 items-center pb-12 max-w-6xl mx-auto bg-base-200 p-12 rounded-3xl">
                        <img className="rounded-full border-8 border-[#FF4880]" src={avator2} alt="" />
                        <div>
                            <p className="text-xl">"Our experience with "Paw Vista" has been nothing short of heartwarming and inspiring. The dedication and compassion exhibited by the team behind this pet adoption site are truly commendable. The attention to detail in the pet profiles, including photos, stories, and even personality traits, made the decision-making process feel personal and meaningful."</p>
                            <div className="rating rating-md pt-6">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold pt-5 text-right text-[#FF4880]">-Fabiha Mehbub</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 items-center pb-12 max-w-6xl mx-auto bg-base-200 p-12 rounded-3xl">
                        <img className="rounded-full border-8 border-[#FF4880]" src={avator1} alt="" />
                        <div>
                            <p className="text-xl">"What sets this site apart is its commitment to responsible pet ownership. The resources provided, from adoption guides to ongoing support for pet parents, reflect a genuine concern for the well-being of both the animals and their new families. The adoption process was straightforward, and the staff ensured that we were well-prepared for our new family member."</p>
                            <div className="rating rating-md pt-6">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold pt-5 text-right text-[#FF4880]">-Fahim Adnan</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-6 items-center pb-12 max-w-6xl mx-auto bg-base-200 p-12 rounded-3xl">
                        <img className="rounded-full border-8 border-[#FF4880]" src={avator2} alt="" />
                        <div>
                            <p className="text-xl">"The sense of community fostered by "Our Pet Haven" is remarkable. The forums and shared stories create a network of support that goes beyond the initial adoption. It's evident that this platform is driven by a passion for animals and a desire to make a positive impact on their lives."</p>
                            <div className="rating rating-md pt-6">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold pt-5 text-right text-[#FF4880]">-Fabiha Mehbub</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Testimonials;