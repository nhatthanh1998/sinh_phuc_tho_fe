import React, {Component} from 'react';

import {AiOutlineMenu, AiFillFacebook, AiFillYoutube} from 'react-icons/ai'

const backgroundImg = "https://res.cloudinary.com/livestreamzz/image/upload/v1585900602/92412724_203978664227879_3889418316200017920_n_bj4n2z.jpg?fbclid=IwAR3HrSC3wiltbG-a6LRFqGd3drvG-WzwwYXwljQRbPrgUFFaFrl5z0x7t0Y";

export class Header extends Component {
    render() {
        return (
            <div className="bg-center pb-16 bg-cover relative" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.73)), url(${backgroundImg})`}}>
                <AiOutlineMenu className="text-gray-200 absolute right-0 mt-3 mr-3"/>
                <p className="text-xs tracking-wider font-playfair-display text-center text-gray-200 pt-8">Dịch vụ tang lễ</p>
                <p className="text-xl tracking-wider font-bold font-playfair-display text-center text-gray-100">Sinh Phúc Thọ</p>
                <div className="flex justify-center mt-3">
                    <AiFillFacebook className="text-gray-100 text-xl mx-2"/>
                    <AiFillYoutube className="text-gray-100 text-xl mx-2"/>
                </div>
            </div>
        )
    }
}