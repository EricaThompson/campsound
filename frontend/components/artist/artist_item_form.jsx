import React from 'react';

class ArtistItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackTitle: '',
            price: 'free',
            releaseDate: '',
            artistName: this.props.user.username,
            genre: '',
            about: ''
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
        console.log(this.state)

        let trackTitle;
        if (this.state.trackTitle == ''){
            trackTitle = 'Untitled Track'
        } else {
            trackTitle = this.state.trackTitle
        }

        // let priceFormat;
        // // let numbers = '12345677890'
        // if (this.state.price.length > 3 && this.state.price.includes(".")){
        //     priceFormat = this.state.price
        // } else if (this.state.price === '') {
        //     // priceFormat = 'name your price (no minimum)'
        //     priceFormat = 'free'
        // } else {
        //     priceFormat = `${this.state.price}.00`
        // }

    

        return (
            <div className="artist-input-form">
                <form action="">
                    <div className="left-side">
                        <div className='preview'>
                            <img src={this.props.user.userImg} alt=""/>
                            <div className = 'details'>
                                <div className="top">{trackTitle}</div>
                                <div><div className="by">by </div> {this.state.artistName}</div>
                                <div className='genre'>{this.state.genre}</div>
                                <div className="price">{this.state.price}</div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <div className="audio">AUDIO</div>
                            <br />
                            <div><div className="add-audio blue">add audio</div> <span className="helper">291MB <span className="blue">max</span>, lossless <span className="blue">.wav, .aif or .flac</span></span></div>
                            <div className="pro">Uploading a lot of audio? <span className="blue">Campsound Pro</span> features batch album upload, private streaming, and more. <span hidden>Get details...</span></div>
                            <div className="album-info">
                                <input 
                                    className="checkbox" 
                                    type="checkbox"
                                /> 
                                part of an album, EP, what have you<span> </span>  
                                <select 
                                    disabled 
                                    name="album-picker" 
                                    id="album-picker"
                                    // size="1"
                                >
                                    <optgroup label='Choose Album'>
                                    <option selected value="">no albums</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className='submit-item-form-buttons'><button className="save">Save</button> <span className="cancel blue">cancel</span></div>
                        </div>
                    </div>

                    <div className="right-side">
                        <div className="input-helper upper top">
                            track name:
                        </div>
                        <div className="track-group">
                            <div className='blue'>*</div>
                            <input placeholder="...." className="track-name" type="text" onChange={this.handleChange('trackTitle')} />
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
                        <div>
                            <div className="input-helper upper">
                                genre:
                            </div>
                            <br />
                            <input className="artist-item-input" placeholder="help fans find your music" type="text" onChange={this.handleChange('genre')} />
                        </div>
                        <div className ="about">
                            <div className="input-helper upper">
                                about this track:
                            </div>
                            <br />
                            <textarea onInput={this.handleChange('about')} placeholder="(optional)" name="" id="" cols="51" rows="4"></textarea>
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