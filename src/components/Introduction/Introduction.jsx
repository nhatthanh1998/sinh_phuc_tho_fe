
import React, { Component } from "react";
export class Introduction extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <p className="text-center font-playfair-display font-bold tracking-wider text-lg text-dark-primary-color">
                    Về chúng tôi
                </p>
                <p className="font-playfair-display text-sm tracking-wide mt-3 text-dark-secondary-color px-5 text-center">
                Với hơn 30 năm kinh nghiệm hoạt động, cùng đội ngũ nhân viên chuyên nghiệp, Trại hòm Sinh Phúc Thọ cam kết mang đến cho gia đình một dịch vụ tang lễ trang trọng và trọn vẹn.
Chúng tôi cung cấp nhiều loại áo quan đáp ứng theo nhu cầu của gia đình. Ngoài ra, để buổi lễ thêm phần trang trọng, chúng tôi còn cung cấp 
thêm các dịch vụ như kèn Tây, nhạc Nam, nhạc Bắc, hoa tươi cùng nhiều loại dịch vụ khác
            </p>
            </div>
        )
    }

}