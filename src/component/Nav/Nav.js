import React, { useEffect, useReducer } from "react";
import Logo from "../Images/logo.png"
import "./Nav.css"
import Card from "../Images/cart.svg"
import axios from "axios";
import MobileMenu from "../MobileMenu/MobileMenu";







function LogoImage() {


    return (
        <img className="logoImg" src={Logo} />
    )

}

export { LogoImage }




export default function Nav() {
    useEffect(() => {


        axios.get('https://fakestoreapi.com/products')
            .then((json) =>
                dispatch({
                    type: "fetchPro",
                    payload: json,
                })
            );
    }, []);
    const initialObject = {
        products: [],
        resultSearch: [],
        active: 0
    };

    // console.log(state.initialObject);


    function reducer(state, action) {
        switch (action.type) {
            case "fetchPro":
                return {
                    ...state,
                    products: action.payload,
                };
            case "fetchRes":
                return {
                    ...state,
                    resultSearch: action.payload,
                };
            case "keyup":
                return {
                    ...state,
                    active: action.payload
                }

            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialObject);

    const changeHandler = (data) => {
        if (data) {
            if (state.products.length > 0) {
                const res = state.products.filter((item) => item.title.includes(data));
                dispatch({
                    type: "fetchRes",
                    payload: res,
                });
            }
        } else {
            dispatch({
                type: "fetchRes",
                payload: [],
            });
        }
    };

    const keyHandler = (e) => {
        console.log(state.active);

        if (e.keyCode == 38) {

            dispatch({
                type: "keyup",
                payload: state.active-1
            }
            )
        }
        if (e.keyCode == 40) {

            dispatch({
                type: "keyup",
                payload: state.active+1
            })
        }

    }


    return (
        <>

            <div className="nav col-12">
                <MobileMenu  menuData={state}/>
                <div className="logo col-5">
                    <LogoImage />
                </div>
                <div type="text" className="search form-control  search-header">
                    <input
                        onKeyUp={(e) => keyHandler(e)}
                        onChange={(e) => changeHandler(e.target.value)} style={{
                            position: "relative",
                            direction: "rtl",
                            borderRadius: "10px",
                            border: "None",
                        }} placeholder="جستجوی محصول" ></input>
                    <button className="text-warning bg-danger " > جستجو</button>



                    <div className="cardi">
                        <img src={Card} />
                    </div>

                </div>






            </div>
            <div className="">
                <ul>
                    {state.resultSearch.map((search,index) => {
                        return <li className={index==state.active?"activekey":""} key={search.id}>{search.title}</li>;
                    })}
                </ul>
            </div>

        </>

    )
}
