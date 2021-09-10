import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <h1 style={{ paddingTop:"20px" }}>{ this.props.title }</h1>
                <div className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur a purus quis convallis. Morbi elementum nunc ac orci mattis, quis congue nisl iaculis. Quisque nisl ipsum, pellentesque vitae nibh mattis, rutrum fermentum velit. Curabitur hendrerit condimentum metus, eu ullamcorper velit. Duis ex neque, bibendum a efficitur vitae, tincidunt eu enim. Aliquam sed augue ac urna sagittis pellentesque in sit amet risus. Sed non quam at lectus accumsan luctus. Phasellus eget dignissim elit. Etiam interdum dui leo, vel condimentum mauris semper et. Donec vel mi tristique, ornare ante eget, ullamcorper leo. Aenean eget libero fringilla, tincidunt felis ut, sodales dui. Maecenas maximus, lorem nec blandit iaculis, velit leo tempus purus, congue sodales diam lacus blandit ipsum. Aliquam erat volutpat.</div>
            </div>
        )
    }
}

