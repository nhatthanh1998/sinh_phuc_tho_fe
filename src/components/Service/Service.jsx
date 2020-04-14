import React, {Component} from "react"
import { ServiceCard } from "./ServiceCard"

let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae elit et enim ultricies vulputate. Curabitur vitae iaculis metus. Donec ultrices ipsum at est congue faucibus. Nunc at finibus mi."

export class Service extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="bg-center bg-cover pt-12 pb-16" style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url(https://res.cloudinary.com/livestreamzz/image/upload/v1585900603/92299821_228261668371177_5943730529978286080_n_lyvldn.jpg?fbclid=IwAR20iwYnj0i4qaZcauCYOzsL92_xaA_HeuXZQF17JylcjZ5UORFT52OGC50)"}}>
                    <p className="text-center font-playfair-display font-bold text-lg tracking-wider text-white">Dịch vụ tang lễ & hoa tươi</p>
                    <div className="block w-6 m-auto mt-2 mb-3" hei style={{background: "#FFF", height:"1.5px"}}/>
                    <p className="text-center font-playfair-display text-sm text-gray-100 px-3 mb-8">{content}</p>
                </div>
                <div className="-mt-16 grid grid-cols-2 col-gap-4 gap mx-4 row-gap-10">
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                </div>
            </div>
        )
    }
}