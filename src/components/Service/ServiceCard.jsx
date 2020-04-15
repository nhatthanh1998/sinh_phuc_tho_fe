import React, { Component } from 'react'

export class ServiceCard extends Component {
    render() {
        const { name, src } = this.props
        return (
            <div className="">
                <div className="bg-white shadow-xl py-5">
                    <img className="block mx-auto" src={src} width="70px" height="70px" alt="" />
                    <p className="font-playfair-display text-sm text-center">{name}</p>
                </div>
            </div>
        )
    }
}