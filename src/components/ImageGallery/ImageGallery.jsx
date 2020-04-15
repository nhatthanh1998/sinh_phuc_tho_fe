import React, { Component } from "react"
import Gallery from "react-photo-gallery"



function getMeta(url) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.addEventListener("load", function () {
            resolve({
                width: this.naturalWidth,
                height: this.naturalHeight
            })
        });
        img.src = url;
    })
}


export class ImageGallery extends Component {

    constructor(props) {
        super(props);
        this.state = { photos: [{ src: '' }] };
    }



    async calculatePhotoRatio(data) {
        console.log(data)
        const processes = data.map(async photo => {
            const { width, height } = await getMeta(photo.src)
            return {
                src: photo.src,
                width,
                height
            }
        });
        const photos = await Promise.all(processes)

        this.setState({
            photos
        })
    }

    componentDidMount() {
        const { data } = this.props
        console.log("in here at component:");
        console.log(this.props)
        this.calculatePhotoRatio(data);
    }

    render() {

        return (
            <div>
                <Gallery columns={3} photos={this.state.photos} direction="column" />
            </div>
        )
    }
}