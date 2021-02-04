import React from 'react';
// import { Link } from 'react-router-dom';

class NewAndNotable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.props.browseAll()
            .then(res => {
                this.setState({
                    items: Object.values(res.items),
                    //!pageCount here
                    pageCount: Math.ceil(Object.values(res.items).length / 8),
                    loading: false
                })

            })

    }

    
    render() {

        console.log(this.state.items)
        return (
            <div className="new-and-notable-container">
                new and notable
            </div>
        )
    }
        
}

export default NewAndNotable;