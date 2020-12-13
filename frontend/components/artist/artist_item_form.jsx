import React from 'react';

class ArtistItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackTitle: '',
            price: '',
            releaseDate: '',
            artistName: this.props.user.username, 

        }
    }

    handleChange(val){
        return e => {
            if (e.currentTarget.validity.valid){
                this.setState({[val]: e.currentTarget.value})
            }
        }
    }

    // handlePrice(){
    //     const numbers = '1234567890';
    //     return e => {
    //         if (numbers.includes(e.currentTarget.value) && this.state.price.length < 4){
    //             this.setState({price: this.state.price.concat(e.currentTarget.value)})
    //         }
    //     }
    // }

    render(){
        console.log(this.props)

        let trackTitle;
        if (this.state.trackTitle == ''){
            trackTitle = 'Untitled Track'
        } else {
            trackTitle = this.state.trackTitle
        }

        let priceFormat;
        // let numbers = '12345677890'
        if (this.state.price.length > 3 && this.state.price.includes(".")){
            priceFormat = this.state.price
        } else if (this.state.price === '') {
            // priceFormat = 'name your price (no minimum)'
            priceFormat = 'free'
        } else {
            priceFormat = `${this.state.price}.00`
        }

    

        return (
            <div className="artist-input-form">
                <form action="">
                    <div className="left-side">
                        <div className='preview'>
                            <img src="" alt=""/>
                            <div className = 'details'>
                                <div className="top">{trackTitle}</div>
                                <div>by {this.state.artistName}</div>
                                <div>{priceFormat}</div>
                            </div>
                        </div>
                        <div>
                            <div>AUDIO</div>
                            <div>add audio 291MB max, lossless .wav, .aif or .flac</div>
                            <div>Uploading a lot of audio? Campsound Pro features batch album upload, private streaming, and more. Get details...</div>
                            <div><input type="checkbox"/> part of an album, EP, what have you <select disabled name="album-picker" id=""></select></div>
                            <div><button>Save</button> cancel</div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="track-group">
                            <div className='blue'>*</div>
                            <input placeholder="track name" className="track-name" type="text" onChange={this.handleChange('trackTitle')} />
                        </div>
                        <div>
                            <div className="input-helper upper">
                                artist:
                            </div>
                            <br />
                            <input className="artist-item-input" placeholder="leave blank to use artist name" type="text" onChange={this.handleChange('artistName')} />
                            <br/>
                            <div className="input-helper under"> for compilations, labels, etc.</div>
                        </div>
                        <br />

                        <div className="album-art">
                            <br />
                            <br />
                            <br />
                            <span className="upload">Upload Album Art</span> 
                            <br/>
                            <br />
                            <div className="helper"> 1400 x 1400 pixels minimum
                                (bigger is better)
                                <br />
                                <br />
                                .jpg, .gif or .png, 10MB max
                            </div>
                            <input
                                id="album-image"
                                type="file"
                                // onChange={this.imageSubmit.bind(this)}
                            />
                            {/* <div className="change-album-art">↻</div> */}
                        </div>

                        <div hidden>
                            release date: 
                            <input type="text" /> 
                            mm/dd/yyyy 
                            leave blank to use publish date
                        </div>
                        <div hidden>pricing: What pricing performs best?
                            <input maxLength="7" pattern="[0-9]*" onInput={this.handleChange('price')} type="text" defaultValue="7.00"/> US Dollars
                            enter zero or more 
                            <input type="checkbox"/> let fans pay more if they want
                            Payments will go directly to you. more info
                            description tell your fans about bonus items, hidden tracks, etc.
                        </div>
                        <div hidden>
                            add bonus item pdf liner note booklets, photos, videos, etc.
                        </div>
                        <div hidden>
                            
                            about this album:
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            
                            album credits:
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            
                            tags: Alternative, and...
                            <input type="text"/>
                            Why bother tagging?
                            
                        </div>
                        <div hidden>
                            album UPC/EAN code:
                            <input type="text"/>
                            e.g., "027616 852809" more info

                            catelog number:
                            <input type="text"/>
                            shows up in your sales report more info
                        </div>

                        


                    </div>
                </form>
            </div>
        )
    }

}

export default ArtistItemForm;