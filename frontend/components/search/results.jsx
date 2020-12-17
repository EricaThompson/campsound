import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownHidden: true,
            results: this.props.results,
            typedSearch: ''
        }
    }


    render() {

        let arrayOfResults = []
        
        Object.values(this.props.results).forEach(result => {
            arrayOfResults.push(result)
        })

        let results = arrayOfResults.map(result=> {
            return <div>{result.title}</div>
        })

        return (
            <div className="results">
                {results}
            </div>
        )
    }
}


export default Results