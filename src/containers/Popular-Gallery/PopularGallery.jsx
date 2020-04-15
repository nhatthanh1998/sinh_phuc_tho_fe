import React from "react";
import Gallery from "react-photo-gallery"
import axios from "axios";
import { API_URL } from "../../config"
export class PopularGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }
    async componentDidMount() {
        const API_CALL = `${API_URL}/categories/5e8841263de99f35f0dcfd31/items`;
        const responseData = await axios.get(API_CALL);
        let photoData = []
        responseData.data.map(item => photoData = [...photoData, { src: item.itemUrl, width: 3, height: 2 }]);
        this.setState({
            photos: photoData.slice(0, 10)
        })
    }
    render() {
        return (
            <Gallery photos={this.state.photos} columns={true} />
        )
    }
}