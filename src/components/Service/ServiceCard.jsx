<<<<<<< HEAD
import React, { Component } from 'react'

export class ServiceCard extends Component {
    render() {
        const { name, src } = this.props
        return (
            <div className="">
                <div className="bg-white shadow-xl py-5">
                    <img className="block mx-auto" src={src} width="70px" height="70px" alt="" />
                    <p className="font-playfair-display text-sm text-center">{name}</p>
=======
import React, {Component} from 'react'

export class ServiceCard extends Component {
    render() {
        const title = "Hoa tươi"
        const imgUrl = "";
        return (
            <div className="">
                <div className="bg-white shadow-xl py-5">
                    <img className="block mx-auto" src="https://image.flaticon.com/icons/svg/2300/2300843.svg" width="70px" height="70px" alt=""/>
                    <p className="font-playfair-display text-sm text-center">{title}</p>
>>>>>>> 929d84836797719f7cf09cf46a4d435e5aafb305
                </div>
            </div>
        )
    }
}