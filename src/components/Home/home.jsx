import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles/style.css'
class Home extends Component {
    componentDidMount() {
        const { getBooksData } = this.props
        getBooksData()
    }
    render() {
        console.log(this.props);
        const { booksData, setSelectedData } = this.props
        return (<div className="books-data-container">

            <h2>Books Data</h2>
            <div className="books-list">
                {
                    booksData.map((data, i) => {
                        return (
                            <div
                                key={i}
                                onClick={() => { data && setSelectedData(data)}}
                            >
                                <Link to="/details" >
                                    {data.volumeInfo.title}
                                </Link>

                            </div>
                        )
                    })}
            </div>
        </div>);
    }
}

export default Home;