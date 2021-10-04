import React, { useEffect, useReducer } from "react";
import Products from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


import SwiperCore, {
    Pagination,
    Navigation,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper";
SwiperCore.use([Pagination, Navigation, Mousewheel, Keyboard, Autoplay]);

export default function Swiper2() {
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((stream) => stream.json())
            .then((data) => {
                dispatch({ type: "fetchPro", payload: data });
            });
    }, []);
    const initialProducts = {
        products: [],
    };
    function reducer(state, action) {
        switch (action.type) {
            case "fetchPro":
                return {
                    ...state,
                    products: action.payload,
                };

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialProducts);

    return state.products.length > 0 ? (
        <div className="swiper2">
            <Swiper
                className="mySwiper"
                slidesPerView={5}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="mySwiper2"
            >
                {state.products.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Products data={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    ) : null;
}
