import React from 'react';
// import { Link } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 'item'
            // itemList: [],
            // songList: [],
            // currentSong: null,
            // playerView: false
        }
    }

    componentDidMount(){
        this.props.readItem(this.props.match.params.userId,this.props.match.params.itemId)
            .then(res => this.setState({ item: res.item }))
        // this.props.readAllUserItems(this.props.match.params.userId)
        console.log('items',this.props.items)
        
    }

    // deleteSong(song) {
    //     this.removeSong(song)
    //     this.props.deleteItem(this.props.currentUserId, song.id)
    //         .then(location.reload())
    // }


    // addToItemList(song) {
    //     let copy = this.state.itemList
    //     if (this.state.itemList.length < 10) {
    //         copy.push(song)
    //         this.setState({ itemList: copy })
    //     }

    // }

    // playSong(song) {
    //     this.setState({ currentSong: song, playerView: true })
    // }

    // nextSong(song) {

    //     let songList = [];
    //     this.state.itemList.forEach(item => {
    //         songList.push(item.song)
    //     })

    //     let index = songList.indexOf(song)
    //     let nextIdx = 0;
    //     if (index + 1 < songList.length) {
    //         nextIdx = index + 1
    //     }

    //     this.setState({ playerView: false })
    //     this.playSong(songList[nextIdx])

    //     this.removeSong(this.state.itemList[index])

    // }

    // removeSong(song) {
    //     let index = this.state.itemList.indexOf(song)
    //     let songCopy = this.state.itemList
    //     songCopy.splice(index, 1)
    //     this.setState({ itemList: songCopy })
    // }

    render() {
        console.log('prop item', this.props.items.length)
        console.log('state item', this.state.item.title)

        // let values = Object.keys(this.props.items).map(function(e){
        //     return this.props.items[e]
        // })
        // console.log('val', values)
        // let itemDisplay = this.props.items.map((item) => {
        //     return <div key={item.id} className="item-display">
        //         <img src={`${item.cover}`} alt="" />
        //         <h5 className="home-text top">{item.title}</h5>
        //         <h5 className="home-text artist">{item.artist}</h5>
        //         <h5 onClick={() => this.addToItemList(item)} className="home-text add">Add to Playlist</h5>
        //         <h5 className="home-text"><a href={`${item.song}`} download>Download</a></h5>
        //         <h5 className="home-text delete" onClick={() => this.deleteSong(item)}>Delete</h5>

        //     </div>
        // })
        // let current = 'current';

        // let playlist = this.state.itemList.map((song, idx) => {
        //     return <div key={Math.random()} className={`i${idx + 1}`}>
        //         {/* {indices.push(idx)} */}
        //         <div onClick={() => this.setState({ playerView: false }, () => this.playSong(song.song))}>
        //             ▶
        //                 </div>
        //         <div>
        //             {idx + 1 + "."}
        //         </div>

        //         <div
        //             className={current}
        //         >
        //             {song.title} by {song.artist}
        //         </div>
        //         <div>

        //         </div>
        //         <div onClick={() => this.removeSong(song)}>
        //             ✘
        //                 </div>
        //     </div>
        // })

        // let player = <audio key={this.state.currentSong} onEnded={() => this.nextSong(this.state.currentSong)} autoPlay={true} id="single-player" controls>
        //     <source src={this.state.currentSong} type="audio/mpeg" />
        //                 Your browser does not support the audio tag.
        //             </audio>


        // if (!this.state.playerView || Object.values(this.state.itemList).length === 0) {
        //     player = null
        // }
        // let playerTitle;
        // if (Object.values(this.state.itemList).length > 0) {
        //     playerTitle = <div className="playlistTitle">playlist</div>
        // }

        console.log('props', this.props.items)
        return (
            <div className="item-container">
                <div className='item-info'>
                    <h1>{this.state.item.title}</h1>
                    <p>by {this.state.item.artist_name}</p>
                    <button>Delete</button>
                    <audio id="item-player" controls>
                        <source src={this.state.item.song} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                    </audio>
                    <h3>Digital Track</h3>
                    <h4>Streaming + Download</h4>
                    <p>Includes unlimited streaming via the free Bandcamp app, plus high-
                        <br />
                        quality download in MP3, FLAC and more.
                    </p>
                    <a href={`${this.state.item.song}`} download>Buy Digital Track {this.state.item.price}</a>
                    <p>released ..</p>
                    <p>© all rights reserved</p>
                </div>
                <img src={this.state.item.cover} alt=""/>                
            </div>
        )
    }
}


export default Item;