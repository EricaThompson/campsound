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
                })

            })

    }

    
    render() {

        // console.log(this.state.items)

        let results = [];
        let indices = [];
        
        if (this.state.items.length > 0){
            
            if (results.length < 6){
                
                for (let i = results.length; results.length < 5; i++){
                    let randomNum = Math.floor(Math.random() * 9)
                    if (!indices.includes(randomNum) && results.length < 5){
                        results.push(this.state.items[randomNum])

                        
                    } else {
                    }
                    
                    indices.push(randomNum)
                }
        
            }
            
        }
        
        // console.log(results)
        
        let renderResults;
        
        if (results.length > 0){
            renderResults = results.map((result) => {
                return <div 
                            key={result.id} className="result">
                            <img src={`${result.cover}`} alt=""/>
                            <div>
                                <h3 className="new-title">{result.title}</h3>
                                <h3 className='new-artist'>by {result.artist}</h3>
                            </div>
                            <h3 className='new-genre'>{result.genre}</h3>
                            <h3 className='new-about'>{result.about}</h3>
                        </div>
            })
        }
        

        // randomSelection
        return (
            <div className="new-and-notable-container">
                <h1 className="new-and-notable-title">NEW AND NOTABLE</h1>
                <div className='results-container'>
                    {renderResults}

                </div>
            </div>
        )
    }
        
}

export default NewAndNotable;