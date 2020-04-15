<<<<<<< HEAD
import React, { Component } from 'react'

export class ProductCard extends Component {
    render() {
        const { imgUrl, name } = this.props
=======
import React, {Component} from 'react'

export class ProductCard extends Component {
    render() {
        const imgUrl = "https://images.unsplash.com/photo-1562886889-52933f35430b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80";
        const name = "Hòm nắp tròn";
>>>>>>> 929d84836797719f7cf09cf46a4d435e5aafb305
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lobortis nisi. Maecenas sollicitudin risus."
        return (
            <div className="shadow-md w-9/12 pb-4 inline-block whitespace-normal">
                <div className="w-full bg-center bg-no-repeat bg-cover " style={{
                    backgroundImage: `url(${imgUrl})`,
<<<<<<< HEAD
                    backgroundSize:"contain",
                    paddingTop: "65%"
                }} />
=======
                    paddingTop: "65%"
                }}/>
>>>>>>> 929d84836797719f7cf09cf46a4d435e5aafb305
                <p className="pl-3 mt-4 font-playfair-display text-sm tracking-wider text-dark-primary-color">{name}</p>
                <p className="pl-3 mt-2 font-playfair-display text-xs tracking-wide text-dark-secondary-color break-words">{description}</p>
                <a href="#" className="text-xs text-red font-playfair-display text-right mr-3 mt-2 underline block">Tìm hiểu thêm</a>
            </div>
        )
    }
}