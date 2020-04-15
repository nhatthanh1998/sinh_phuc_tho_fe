import React, { Component } from "react";
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
                    <ProductCard
                        imgUrl="https://res.cloudinary.com/livestreamzz/image/upload/v1586559688/nap_tron_lo03wp.png"
                        name="Hòm nắp tròn"
                    />
                    <ProductCard
                        imgUrl="https://res.cloudinary.com/livestreamzz/image/upload/v1586559687/dai_loan_dn2v2c.jpg"
                        name="Hòm Đài Loan"
                    />

                    <ProductCard
                        imgUrl="https://res.cloudinary.com/livestreamzz/image/upload/v1586560436/hom_dai_loan_thieu_aas22v.jpg"
                        name="Hòm Đài Loan Thiêu"
                    />

                    <ProductCard
                        imgUrl="https://res.cloudinary.com/livestreamzz/image/upload/v1586559687/dai_loan_dn2v2c.jpg"
                        name="Hòm Danh Mộc"
                    />
                </div>
                <div className="inline-block p-3 shadow" style={{ background: "#ffb6b6" }}>
                    <AiOutlineLeft size="1.2rem" color="#FFF" />
                </div>
                <div className="inline-block border border-solid p-3 shadow ml-4" style={{ borderColor: "#ffb6b6" }}>
                    <AiOutlineRight size="1.2rem" color="#ffb6b6" />
                </div>
            </div>
        )
    }

}