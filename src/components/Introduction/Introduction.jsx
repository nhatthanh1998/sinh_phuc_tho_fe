import React, {Component} from "react";

const introduce = "Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit";

export class Introduction extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <p className="text-center font-playfair-display font-bold tracking-wider text-lg text-dark-primary-color">
                    Về chúng tôi
                </p>
                <p className="text-center font-playfair-display text-sm tracking-wide mt-3 text-dark-secondary-color px-5">
                    {introduce}
                </p>
            </div>
        )
    }

}