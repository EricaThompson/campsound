import React from 'react';
import { Link } from 'react-router-dom';

class ShowItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null
        }
    }

    // componentDidMount() {
    //     this.props.readAllUserItems(71)
    //         .then(res => this.setState({ items: res }))
    // }

    render() {
        console.log('props', this.props.items.items[0])
        // console.log('state', this.state.items.items[0])
        return (
            <div className="show-items">
                {/* {this.state.items.title} */}
                {/* {this.props.items.map(item => {
                    item.title
                })} */}
            </div>
        )
    }
}


export default ShowItems;