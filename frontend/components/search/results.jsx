import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTitle: '',
        }
    }


    render() {
        let searchTitle;




        let arrayOfResults = []
        
        Object.values(this.props.items).forEach(result => {
            arrayOfResults.push(result)
        })
        console.log('arrayofresults', arrayOfResults)

        let results = arrayOfResults.map(result=> {
            if (result.genre === 'rock' || result.genre === 'electronic' || result.genre === 'metal'){
                searchTitle = result.genre
            } else if (Object.values(this.props.items).length > 0){
                searchTitle = 'all results'
            } else {
                searchTitle = 'no results, add one..'
            }
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
                <br />
                <br />
                <div className="search-title">{searchTitle}</div>
                <br />
                <br />
                {results}
            </div>
        )
    }
}


export default Results