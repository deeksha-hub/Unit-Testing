import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
    //npm install --save prop-types

class Header extends Component{

    constructor(props){

        super(props);
    }

 render(){

    const {header,desc} =this.props;
    return(
        <div>
         <h1 data-test="header">{header}</h1>
         <p data-test="desc">{desc}</p>
        </div>
    );
 }



}

Header.propTypes={

    header:PropTypes.string,
    
    }
    
export default Header;