import React, { useState } from 'react'
import Menu from "../Menu/Menu";



const MobileMenu =({menuData}) => {
    const [menu,setMenu]=useState(false)


    return (
        <div>
            <button onClick={}>Menu</button>
            {
                menu ?
                <div>
                <ul>
                    {
                        menuData.map((item)=>{
                            
                            <li >
                                {item.value}
                            </li>
                        })
                    }
                </ul>
            </div>:null
                    }
        </div>
    )
}

export default MobileMenu
