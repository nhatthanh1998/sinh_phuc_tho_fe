import React from "react";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
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
        const API_CALL = `${API_URL}/categories/5e8fe6334f370808d46e9d99/items`;
        const responseData = await axios.get(API_CALL);
        let photoData = []
        responseData.data.map(item => photoData = [...photoData, { src: item.itemUrl }]);
        this.setState({
            photos: photoData
        })
    }
    render() {
        if(this.state.photos.length === 0) {
            return <div>Waiting</div>
        } else {
            return (
                <ImageGallery data={this.state.photos} />
            )
        }
    }
}