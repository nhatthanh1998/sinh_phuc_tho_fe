import React, {Component} from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={{background: "#212121"}} className="py-8">
                <p className="text-white font-roboto font-bold tracking-wider text-center">Thời gian làm việc</p>
                <p className="text-center font-roboto text-xs text-gray-300 tracking-normal mt-2">Thứ 2 - Chủ Nhật: 0h đến 24h (Hoạt động 24/7)</p>
                <p className="text-white font-roboto font-bold tracking-wider text-center mt-2">Liên hệ</p>
                <p className="text-gray-200 text-center mt-2 text-xs font-roboto">37 Nguyễn Du Phường 7 Gò Vấp, HCM</p>
                <p className="text-center mt-2 text-xs text-gray-200"><span className="text-white font-bold font-roboto">Anh Thời:</span> 0913.673.661</p>
                <p className="text-center mt-2 text-xs text-gray-200"><span className="text-white font-bold font-roboto">Chị Hương:</span> 0986.124.780</p>
            </div>
        )
    }
}