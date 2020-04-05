import React, {Component} from "react";

import {ProductCard} from "./ProductCard"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"

export class Product extends Component {
    render() {
        return (
            <div className={"ml-5 " + this.props.className}>
                <p className="text-left font-playfair-display font-bold tracking-wider text-lg text-dark-primary-color mb-6">
                    Áo quan
                </p>
                <div className="mb-6 whitespace-no-wrap overflow-y-hidden overflow-x-scroll">
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div className="inline-block p-3 shadow" style={{background: "#ffb6b6"}}>
                    <AiOutlineLeft size="1.2rem" color="#FFF"/>
                </div>
                <div className="inline-block border border-solid p-3 shadow ml-4" style={{borderColor: "#ffb6b6"}}>
                    <AiOutlineRight size="1.2rem" color="#ffb6b6"/>
                </div>
            </div>
        )
    }

}