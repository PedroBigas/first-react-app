import React from "react";
import App from "./App";

function Menu(props) {
    
    const listLinks = props.links.map((link,index) => <li key={index}>{link}</li>)

    return(

        <ul className='menu'>
            {listLinks}
        </ul>
    )
}

export default Menu;