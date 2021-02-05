import React from 'react';
// import { Link } from 'react-router-dom';

class NewAndNotable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedItem: '',
            i1: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false
            },
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

    selectSong(idx) {
        // let itemCover = Object.values(this.state.items).map(item => {
        //     if (item.id === id){
        //         return item
        //     }
        // })

        this.getDuration();
        this.setState({ viewPlayer: false });

        let itemSong = this.state.items[idx].song
        let itemCover = this.state.items[idx].cover

        this.setState({ selectedItem: this.state.items[idx], selectedSong: itemSong, selectedSongImage: itemCover })

        setTimeout(() => {
            this.setState({ viewPlayer: true })
        }, 1);


    }

    play1(idx) {
        document.getElementById(`i1${idx}`).play(idx)
        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        // this.setState({[idx]: true})


    }

    play2(idx) {
        document.getElementById(`i2${idx}`).play(idx)
        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        // this.setState({[idx]: true})


    }

    pause1(idx) {
        document.getElementById(`i1${idx}`).pause(idx)
        // this.setState
    }

    pause2(idx) {
        document.getElementById(`i2${idx}`).pause(idx)
        // this.setState
    }

    displayPause1(idx) {
        document.getElementById(`i1${idx}`).pause()

        let i1 = { ...this.state.i1 }
        i1[idx] = true;
        // console.log('i1 pause',i1)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i1 })


    }

    displayPlay1(idx) {
        document.getElementById(`i1${idx}`).play()

        let i1 = { ...this.state.i1 }
        i1[idx] = false;
        // console.log('i1 play', i1)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i1 })


    }

    reset1(idx) {
        let i1 = { ...this.state.i1 }
        i1[idx] = false;
        // console.log('i1 reset', i1)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i1 })
    }

    reset2(idx) {
        let i2 = { ...this.state.i2 }
        i2[idx] = false;
        // console.log('i2 reset', i2)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i2 })
    }

    displayPause2(idx) {
        document.getElementById(`i2${idx}`).pause()

        let i2 = { ...this.state.i2 }
        i2[idx] = true;
        // console.log('i2 pause', i2)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i2 })


    }

    displayPlay2(idx) {
        document.getElementById(`i2${idx}`).play()

        let i2 = { ...this.state.i2 }
        i2[idx] = false;
        // console.log('i2 play', i2)

        // this.setState({ playShow: false })
        // document.querySelector('.fa-play').classList.add('disappear')
        // document.querySelector('.fa-pause').classList.remove('disappear')
        this.setState({ i2 })


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
            renderResults = results.map((item, idx) => {

                let show;

                if (idx < 5) {
                    let playPauseBtn;
                    // let stateName = "song" + idx
                    if (!this.state.i1[idx]) {

                        // console.log('i1[idx]', this.state.i1[idx])
                        // console.log(`concat ${this.state}${stateName}`)
                        playPauseBtn = <div className='play-button' onClick={
                            () => {

                                this.displayPause1(idx)
                                this.play1(idx)
                            }}
                        >
                            <i className="fas fa-play"></i></div>
                    } else {
                        show = 'show'
                        playPauseBtn = <div
                            className='pause-button'
                            onClick={() => {
                                this.displayPlay1(idx)
                                this.pause1(idx)

                            }}>
                            <i className="fas fa-pause"></i>
                        </div>
                    }
                    return <div
                        // onClick={()=>this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                        className='result'
                        key={`${idx}`}>
                        <div>

                            <img className='spotlight-item-img link' src={item.cover} alt="cover art" />
                            <div className='audio-control'>
                                <audio
                                    // controls
                                    id={`i1${idx}`}
                                    src={`${item.song}`}
                                    onEnded={() => this.reset1(idx)}
                                >
                                </audio>

                                <div

                                    className={`play-pause ${show}`}>
                                    {playPauseBtn}
                                </div>


                            </div>
                        </div>
                        <div className='spotlight-item-info'>
                            <div>
                                <h3 className="new-title">{item.title}</h3>
                                <h3 className='new-artist'>by {item.artist}</h3>
                            </div>
                            <h3 className='new-genre'>{item.genre}</h3>
                            <h3 className='new-about'>{item.about}</h3>
                            {/* <div
                                onClick={() => this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                className='spotlight-item-title link'>{item.title}</div>
                            <div
                                onClick={() => this.props.history.push(`/users/${item.owner_id}/music/${item.id}`)}
                                className='spotlight-item-artist link'>by {item.artist}</div>
                            <div className='spotlight-item-about'>{item.about}</div> */}
                        </div>
                        {/* Test2
                                <audio src={`${item.song}`}></audio> */}
                    </div>

                    return <div 
                                key={item.id} className="result">
                                    
                                    
                                    <img src={`${item.cover}`} alt=""/>
                            </div>


                } else {
                    return;
                }
            })
                
            // })
        }

        let currentButton;

        if (this.state.playShow) {
            currentButton = <div className='play-button discover-pause-play' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        } else {
            currentButton = <div className='pause-button discover-pause-play' onClick={() => this.pause()}><i className="fas fa-pause"></i></div>
        }

        if (this.state.currentTime === this.state.duration) {
            currentButton = <div className='play-button' onClick={() => this.play()}><i className="fas fa-play"></i></div>
        }




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