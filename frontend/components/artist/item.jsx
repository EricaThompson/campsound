import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 'item',
            playerView: false,
            audioPlayer: false
        }
    }

    componentWillMount(){
        this.props.readItem(this.props.match.params.userId,this.props.match.params.itemId)
            .then(res => this.setState({ item: res.item }))
        // this.props.readAllUserItems(this.props.match.params.userId)
        console.log('items',this.props.items)
        setTimeout(() => {
            this.setState({audioPlayer: true})
        }, 500);
    }

    toggleAudioPlayer() {
        this.setState({ audioPlayer: !this.state.audioPlayer })
    }

    render() {
        // console.log('prop item', this.props.items.length)
        console.log('state song', this.state.item.song)

        let renderPlayer;
        // let player = <audio id="item-player" controls>
        //                 <source src={this.state.item.song} type="audio/mpeg" />
        //                 Your browser does not support the audio tag.
        //             </audio>

        // setTimeout(() => {
            if (this.state.audioPlayer){
                renderPlayer = <audio id="item-player" controls>
                                    <source src={this.state.item.song} type="audio/mpeg" />
                                    Your browser does not support the audio tag.
                            </audio>
            }
        //     console.log('now')
        // }, 5000);

        return (
            <div className="item-container">
                <div className='about-item'>
                    <h1>{this.state.item.title}</h1>
                    <p className='artist'>by <Link to={`/${this.state.item.owner_id}`}>{this.state.item.artist_name}</Link></p>
                    <button>Delete</button>
                    <br />
                    {renderPlayer}
                    {/* hello */}
                    {/* <div>
                        <button onclick="document.getElementById('item-player').play()">Play</button>
                        <button onclick="document.getElementById('item-player').pause()">Pause</button>
                        <button onclick="document.getElementById('item-player').volume+=0.1">Volume Up</button>
                        <button onclick="document.getElementById('item-player').volume-=0.1">Volume Down</button>
                    </div> */}
                    <h3 className="digital">Digital Track</h3>
                    <h4 className='availability'>Streaming + Download</h4>
                    <p className="inclusion">Includes unlimited streaming via the free Bandcamp app, plus high-
                        <br />
                        quality download in MP3, FLAC and more.
                    </p>
                    <a className="download" href={`${this.state.item.song}`} download>Download Digital Track </a><span className="price">{this.state.item.price}</span>
                    <p className="release-date" >released {this.state.item.date}</p>
                    <p className="copyright" >© all rights reserved</p>
                </div>
                {/* <img src={this.state.item.cover} alt=""/>                 */}
            </div>
        )
    }
}


export default Item;