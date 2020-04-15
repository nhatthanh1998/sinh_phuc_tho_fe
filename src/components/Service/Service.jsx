import React, { Component } from "react"
import { ServiceCard } from "./ServiceCard"

let content = "Các dịch vụ kèm theo tang lễ phù hợp với các tôn giáo khác nhau như nhạc bắc, nhạc nam, nhạc tây, thầy tụng, hoa tươi,... theo yêu cầu của gia đình."

export class Service extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="bg-center bg-cover pt-12 pb-16" style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url(https://res.cloudinary.com/livestreamzz/image/upload/v1585900603/92299821_228261668371177_5943730529978286080_n_lyvldn.jpg?fbclid=IwAR20iwYnj0i4qaZcauCYOzsL92_xaA_HeuXZQF17JylcjZ5UORFT52OGC50)" }}>
                    <p className="text-center font-playfair-display font-bold text-lg tracking-wider text-white">Dịch vụ tang lễ & hoa tươi</p>
                    <div className="block w-6 m-auto mt-2 mb-3" hei style={{ background: "#FFF", height: "1.5px" }} />
                    <p className="text-center font-playfair-display text-sm text-gray-100 px-3 mb-8">{content}</p>
                </div>
                <div className="-mt-16 grid grid-cols-2 col-gap-4 gap mx-4 row-gap-10">
                    <ServiceCard 
                    name = "Hoa tươi"
                    src = "https://res.cloudinary.com/livestreamzz/image/upload/v1585988879/dsxeairvnstj9wm2iyxq.jpg"
                    />
                    <ServiceCard name = 
                    "Xe tang"
                    src = "https://res.cloudinary.com/livestreamzz/image/upload/v1586938722/xetang_dilz12.jpg"
                    />
                    <ServiceCard 
                    name = "Nghi thức tôn giáo"
                    src = "https://res.cloudinary.com/livestreamzz/image/upload/v1585998542/vs5k48zyyaz4uf6mrrvn.jpg"
                    />
                    <ServiceCard name = "Hoạt động"
                    src="https://res.cloudinary.com/livestreamzz/image/upload/v1586489450/zgugjnbwqgwcfckricvc.jpg"/>
                </div>
            </div>
        )
    }
}