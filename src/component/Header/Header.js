import React from "react";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu"
import MobileMenu from "../MobileMenu/MobileMenu";


const Header = () => {
    const menuData = [
        {
            id: "1",
            value: "پوشاک",
            items: [
                {
                    id: "11",
                    value: "شلوار"
                },
                {
                    id: "12",
                    value: "پیراهن"
                },
                {
                    id: "13",
                    value: "کت"
                },
                {
                    id: "14",
                    value: "دامن"
                }
            ]
        },
        {
            id: "2",
            value: "کالای دیجیتال",
            items: [
                {
                    id: "20",
                    value: "لپ تاپ"
                },
                {
                    id: "21",
                    value: "موبایل"
                },
                {
                    id: "22",
                    value: "تبلت"
                },
                {
                    id: "23",
                    value: "دوربین"
                }
            ]
        },
        {
            id: "3",
            value: "مد و پوشاک"
        },
    
        {
            id: "4",
            value: "زیبایی و سلامت"
        },
    
        {
            id: "5",
            value: "خانه و آشپزخانه"
        },
    
        {
            id: "6",
            value: "ورزش و سفر"
        },
    
    ]
    
    return (
        <header>
            <MobileMenu menuData={menuData}/>
            <Nav />
            <Menu menuData={menuData}/>

        </header>
    )
}

export default Header


