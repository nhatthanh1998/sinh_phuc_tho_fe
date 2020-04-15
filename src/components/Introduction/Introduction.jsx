<<<<<<< HEAD
import React, { Component } from "react";

=======
import React, {Component} from "react";

const introduce = "Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit";
>>>>>>> 929d84836797719f7cf09cf46a4d435e5aafb305

export class Introduction extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <p className="text-center font-playfair-display font-bold tracking-wider text-lg text-dark-primary-color">
                    Về chúng tôi
                </p>
<<<<<<< HEAD
                <p className="font-playfair-display text-sm tracking-wide mt-3 text-dark-secondary-color px-5">
                    Cơ sở mai tán1g Sinh Phúc thọ với hơn 20 năm kinh nghiệm trong lĩnh vực tổ chức tang lễ. Chúng tôi lấy UY TÍN, TRANG NGHIÊM, TẬN TÂM là yếu tố tiên quyết trong mỗi tang lễ chúng tôi tổ chức.
                    Chúng tôi cung cấp rất nhiều loại áo quan khác nhau với giá cả rất phải chăng. Ngoài ra, còn có các dịch vụ kèm theo như KÈN TÂY, HOA TƯƠI, NHẠC NAM, NHẠC BẮC, ... theo yêu cầu của gia đình. <br/>
                    Cơ sở mai táng Sinh Phúc Thọ làm việc 24/7. Hãy liên hệ chúng tôi để được tư vấn rõ ràng về các gói dịch vụ cho gia đình. <br />
                    <br />
                    <span className = "font-playfair-display font-bold tracking-wider text-lg text-dark-primary-color">0913.673.661 - Thanh Thời</span>

=======
                <p className="text-center font-playfair-display text-sm tracking-wide mt-3 text-dark-secondary-color px-5">
                    {introduce}
>>>>>>> 929d84836797719f7cf09cf46a4d435e5aafb305
                </p>
            </div>
        )
    }

}