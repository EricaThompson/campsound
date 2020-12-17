import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownHidden: true,
            results: this.props.items,
            typedSearch: ''
        }
    }


    render() {
        console.log('results comp props', this.props.items)

        let arrayOfResults = []
        
        Object.values(this.props.items).forEach(result => {
            arrayOfResults.push(result)
        })

        let results = arrayOfResults.map(result=> {
            return <div key={result.id} className="result-parent">
                        <div key={result.id} className="result-display">
                            <img src={`${result.cover}`} alt="" />
                            <h5 className="home-text top">{result.title}</h5>
                            <h5 className="home-text">{result.artist}</h5>
                            <h5 
                                // onClick={() => this.addToresultList(result)} 
                                className="home-text add">Add to Playlist
                            </h5>
                            <h5 className="home-text"><a href={`${result.song}`} download>Download</a></h5>
                        </div>

                    </div>
        })

        return (
            <div className="results">
                {results}
                {/* Results.. */}
            </div>
        )
    }
}


export default Results