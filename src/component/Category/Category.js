import React, { useEffect, useReducer } from "react";
import "./Category.css"
export default function Category() {
    const initialState = {
        cat: {},
    };
    function reducer(state, action) {
        switch (action.type) {
            case "fetchCat":
                return {
                    ...state,
                    cat: {
                        ...state.cat,
                        [action.payload[0]]: action.payload[1],
                    },
                };

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                for (let item of json) {
                    fetch(`https://fakestoreapi.com/products/category/${item}`)
                        .then((res) => res.json())
                        .then((json) =>
                            dispatch({
                                type: "fetchCat",
                                payload: [item.replace("'", "").replace(/\s/g, ""), json],
                            })
                        );
                }
            });
    }, []);
    return state.cat.jewelery &&
        state.cat.electronics &&
        state.cat.mensclothing &&
        state.cat.womensclothing ? (
        <section className="cat-img cat-img2 category d-flex flex-row flex-wrap px-1 px-lg-5 mt-3 mt-lg-5">
            <div className="col-lg-5 px-0">
                <div className="col-12 px-0 py-1 long-cat">
                    <div className="px-1 h-100">
                        <img className="w-100" src={state.cat.jewelery[0].image} alt="" />
                    </div>
                </div>
                <div className="col-12 px-0 d-flex flex-row-reverse py-1 short-cat">
                    <div className="col-6 px-1">
                        <img
                            className="w-100"
                            src={state.cat.electronics[3].image}
                            alt=""
                        />
                    </div>

                    <div className="col-6 px-1">
                        <img
                            className="w-100"
                            src={state.cat.mensclothing[2].image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-7 px-0">
                <div className="col-12 px-0 d-flex flex-row-reverse py-1 ">
                    <div className="col-4 px-1">
                        <img
                            // style={{ height: "100%", objectFit: "cover" }}
                            className="w-100"
                            src={state.cat.electronics[5].image}
                            alt=""
                        />
                    </div>

                    <div className="col-8 px-1">
                        <img
                            className="w-100"
                            src={state.cat.womensclothing[0].image}
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className="col-12 px-0 d-flex flex-row-reverse py-1 long-cat"
                // style={{ height: "60%" }}
                >
                    <div className="col-6 px-1">
                        <img
                            // style={{ height: "100%", objectFit: "cover" }}
                            className="w-100"
                            src={state.cat.jewelery[2].image}
                            alt=""
                        />
                    </div>

                    <div className="col-6 px-1">
                        <img
                            // style={{ height: "100%", objectFit: "cover" }}
                            className="w-100"
                            src={state.cat.electronics[1].image}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    ) : null;
}
