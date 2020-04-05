import React, {Component} from 'react'

export class ActivityVideo extends Component {
    render() {
        return (
            <div>
                <div className="flex items-center justify-between mb-6">
                    <p className="ml-3 text-left font-playfair-display font-bold tracking-wider text-lg text-dark-primary-color">
                        Video hoạt động
                    </p>
                    <a href="#" className="text-xs text-red font-playfair-display text-right inline-block mr-3">
                        Xem thêm
                    </a>
                </div>
            
                <iframe className="w-100 h-auto" src="https://www.youtube.com/embed/wJA884GWGdA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}