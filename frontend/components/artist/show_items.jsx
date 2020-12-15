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
        // console.log('props', this.props.items.items)
        // console.log('state', this.state)
        // console.log('state', this.state.items.items[0])

        let itemDisplay = this.props.items.map((item) => {
            return <div className="item-display">
                        <a href={`${item.song}`} download>
                            <img src={`${item.cover}`} alt="" />
                        </a>
                        <h5 className="home-title">{item.title}</h5>
                        <h5 className="home-artist">{item.artist}</h5>
                    </div>
        })
        return (
            <div className="show-items">
                {itemDisplay}
            </div>
        )
    }
}


export default ShowItems;