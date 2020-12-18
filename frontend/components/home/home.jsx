import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.browseAll()
    }

    render() {
    

        return (
            <div>
                Homepage
            </div>
        )
    }
}


export default Home;