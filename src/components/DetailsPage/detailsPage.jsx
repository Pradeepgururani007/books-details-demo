import React, { Component } from 'react';
class DetailsPage extends Component {
    state = {}
    render() {
        const { selectedData } = this.props
        const {volumeInfo} = selectedData

        return (<div className="details-container">
            <h4>{volumeInfo.subtitle}</h4>
            <div className="image-container"><img src={volumeInfo.imageLinks.thumbnail} alt="" /></div>
        </div>);
    }
}

export default DetailsPage;