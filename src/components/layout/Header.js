import React from 'react'

function Header(){
    return(
        <header style={HeaderStyle} >
            <h1>ToDO List</h1>
        </header>
    );
}

export default Header;


const HeaderStyle ={
    'background':'Black',
    'color':'White',
    'fontSize':'22px',
    'textAlign':'center',
    'padding': '1rem 0rem 1rem 0rem'

}