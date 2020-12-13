import React from 'react';

class ArtistItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="artist-input-form">
                <form action="">
                    <div className="left-side">
                        <div className='preview'>
                            <img src="" alt=""/>
                            <div className = 'details'>
                                <div className="top">this.state.itemName</div>
                                <div>by this.state.user.username</div>
                                <div>this.state.price</div>
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
                        *
                        <input type="text"/>
                        <div>
                            release date: 
                            <input type="text" /> 
                            mm/dd/yyyy 
                            leave blank to use publish date
                        </div>
                        <div>pricing: What pricing performs best?
                            <input type="text" defaultValue="7.00"/> US Dollars
                            enter zero or more 
                            <input type="checkbox"/> let fans pay more if they want
                            Payments will go directly to you. more info
                            description tell your fans about bonus items, hidden tracks, etc.
                        </div>
                        <div className="album-art">
                            Upload Album Art
                            1400 x 1400 pixedls minimum
                            '(bigger is better)'
                            .jpg, .gif or .png, 10MB max
                            <input
                                id="album-image"
                                type="file"
                                // onChange={this.imageSubmit.bind(this)}
                            />
                            {/* <div className="change-album-art">↻</div> */}
                        </div>
                        <div>
                            add bonus item pdf liner note booklets, photos, videos, etc.
                        </div>
                        <div>
                            artist:
                            <input type="text"/>
                            for compilations, labels, etc.
                            
                            about this album:
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            
                            album credits:
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            
                            tags: Alternative, and...
                            <input type="text"/>
                            Why bother tagging?
                            
                        </div>
                        <div>
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