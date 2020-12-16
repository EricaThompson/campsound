import React from 'react';
import { Link } from 'react-router-dom';

class ArtistItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackTitle: 'Untitled',
            price: 'free',
            releaseDate: '',
            artistName: this.props.user.username,
            genre: '',
            about: '',
            collection_id: null,
            playerView: false,
            coverFile: null,
            coverPreviewUrl: null,
            songFile: null,
            songPreviewUrl: null
        }
    }

    // consoleClick(){
    //     console.log("clicked!")
    // }

    handleSubmit(e) {
        // debugger
        
        e.preventDefault();
        
        const formData = new FormData();
        // formData.append('item[song]', this.state.songFile)
        
        
        if (this.state.coverFile){
            formData.append('item[cover]', this.state.coverFile)
        } 
        if (this.state.songFile) {
            formData.append('item[song]', this.state.songFile)
        } 
        formData.append('item[owner_id]', this.props.currentUserId)
        formData.append('item[title]', this.state.trackTitle)
        formData.append('item[artist]', this.state.artistName)
        formData.append('item[genre]', this.state.genre)
        formData.append('item[price]', 'free')
        formData.append('item[about]', this.state.about)
        formData.append('item[released]', true)
        formData.append('item[collection_id]', null)
        // console.log("click2")
        this.props.createItem(this.props.currentUserId, formData)
        // const history = useHistory
        
        console.log("item created!")
        // this.setState({
        //     locationFlag: false,
        //     bioFlag: false
        // })

        // $.ajax({
        //     url: `/api/users/${this.props.currentUserId}/items`,
        //     method: 'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // })
    }

    handleChange(val){
        return e => {
            if (e.currentTarget.validity.valid){
                this.setState({[val]: e.currentTarget.value})
            }
        }
    }

    imageHandler(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ coverFile: file, coverPreviewUrl: fileReader.result})
        };

        if (file){
            fileReader.readAsDataURL(file);
        };
    };

    songHandler(e){

        
        e.preventDefault();
        this.setState({songFile: e.currentTarget.files[0], playerView: false})

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ songFile: file, songPreviewUrl: fileReader.result, playerView: true })
        };

        if (file) {
            fileReader.readAsDataURL(file);
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
        console.log("state", this.state)

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


        let component;
        if (this.state.playerView){
            component = <audio controls>
                            {/* <source src="horse.ogg" type="audio/ogg" /> */}
                            <source src={`${this.state.songPreviewUrl}`} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
        }

    

        return (
            <div className="artist-input-form">
                <form noValidate>
                    <div className="left-side">
                        <div className='preview'>
                            <img src={this.state.coverPreviewUrl} alt=""/>
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
                            {component}
                            <br />
                            <br />
                            <div>
                                <div className="add-audio blue">
                                    add audio
                                    <input
                                        id="add-audio"
                                        type="file"
                                        onChange={this.songHandler.bind(this)}
                                    />
                                </div> 
                                <span className="helper">
                                    291MB <span className="blue">
                                    max
                                </span>
                                , lossless 
                                    <span className="blue">
                                        .wav, .aif or .flac
                                    </span>
                                </span>
                            </div>
                            <div className="pro">
                                Uploading a lot of audio? 
                                <span className="blue">Campsound Pro</span> 
                                features batch album upload, private streaming, and more. 
                                <span hidden>Get details...</span>
                            </div>
                            <div className="album-info">
                                <input 
                                    className="checkbox" 
                                    type="checkbox"
                                /> 
                                part of an album, EP, what have you<span> </span>  
                                <select 
                                    disabled 
                                    className="album-picker" 
                                    id="album-picker"
                                    // size="1"
                                >
                                    <optgroup label='Choose Album'>
                                    <option selected value="">no albums</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className='submit-item-form-buttons'>
                                <button onClick={this.handleSubmit.bind(this)} type="button" className="save">
                                    <Link to={`/${this.props.currentUserId}`}>
                                        Save
                                    </Link> 
                                </button>
                                <Link to={`/${this.props.currentUser}`}>
                                    <span className="cancel blue">cancel</span>
                                </Link>
                            </div>
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
                        <div className="song-art-section">
                            <div className="song-art">
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

                                <img src={this.state.coverPreviewUrl} alt="" />
                                <input
                                    id="add-track-image"
                                    type="file"
                                    onChange={this.imageHandler.bind(this)}
                                />
                                {/* <div className="change-album-art">↻</div> */}
                            </div>
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
                            <textarea onInput={this.handleChange('about')} placeholder="(optional)" cols="52" rows="4"></textarea>
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
                            <textarea cols="30" rows="10"></textarea>
                            
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