import { Header } from "../components/Header/Header"
import { Introduction } from "../components/Introduction/Introduction"
import { Product } from "../components/Product/Product"
import { Service } from "../components/Service/Service"
import { ActivityVideo } from "../components/Video/ActivityVideo"
import { Footer } from "../components/Footer/Footer"
import { PopularGallery } from "../container/Popular-Gallery/PopularGallery"
import React, {Component} from "react"

export class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Introduction className="pb-12 pt-12" />
                <Product className="pb-12" />
                <Service className="pb-12" />
                <PopularGallery />
                <ActivityVideo />
                <Footer />
            </div>
        )
    }
}