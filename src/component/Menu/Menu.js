import React, { useEffect } from "react";
import "./Menu.css"




export default function Menu({menuData}) {

useEffect(()=>{


})

    return (
        <div className="menu  bg-warning">
            <div className="searchcart">
                <ul className="ul-menu">
                    {menuData.map(item =>
                        <a key={item.id} href={"#"}>

                            <li id={item.id} className="li-Item">

                                {item.value}
                                

                                <ol>
                                    {
                                      
                                        item.items && item?.items.map(({id,value}) =>

                                            <li key={id}> {value} </li>


                                        )
                                    }
                                </ol>

                            </li>
                        </a>)}
                </ul>
            </div>
        </div>
    )
}