import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as StoryAPIUtil from '../../util/stories_api_util';

class StoryForm extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.match.path.includes('new')) {
            this.state = {
                title: '',
                authorName: this.props.user.username,
                text: '....',
                summary: 'tl;dr',
                story_type: '',
                genre: 'news',
                date: Date.now(),
                currentStory: [],
                username: this.props.user.username,

                
                // releaseDate: '',


                // price: 'free',
                artistName: this.props.user.username,
                // genre: '',
                about: '',
                collection_id: null,
                playerView: false,
                coverFile: null,
                coverPreviewUrl: null,
                songFile: null,
                songPreviewUrl: null,
                spinnerShow: false,
                songError: '',
                coverError: '',
                // item: this.props.item
            }
        } else if (this.props.match.path.includes('edit')) {
            this.state = {
                story: '',
                title: '',
                authorName: this.props.user.username,
                text: '....',
                summary: 'tl;dr',
                story_type: '',

                // title: 'Untitled',
                authorName: this.props.user.username,
                // text: '',
                // summary: '',
                story_type: '',


                
                genre: 'news',
                date: Date.now(),
                currentStory: [],
                username: this.props.user.username,


                trackTitle: this.props.item.title,
                price: 'free',
                releaseDate: this.props.item.date,
                artistName: this.props.item.artist_name,
                genre: this.props.item.genre,
                id: this.props.item.id,
                about: this.props.item.about,
                collection_id: null,
                playerView: false,
                coverFile: null,
                coverPreviewUrl: this.props.item.cover,
                songFile: null,
                songPreviewUrl: this.props.item.song,
                spinnerShow: false,
                songError: '',
                coverError: '',
                // item: this.props.item
            }
        }

        // this.updateItem = this.props.updateItem.bind(this)  
    }

    componentDidMount() {
        
        // if (this.props.match.path.includes('new')){
            console.log('props',this.props)
        // }

        if (this.props.match.path.includes('edit')) {
            // this.setState({ playerView: true })
            // console.log(this.props.currentUserId, parseInt(this.props.match.params.itemId))
            StoryAPIUtil.readStory(this.props.match.params.authorId, this.props.match.params.storyId)
                .then(res => this.setState({
                    story: res,
                    title: res.title,
                    authorName: res.username,
                    story_type: res.story_type,
                    text: res.text,
                    summary: res.summary,
                }))

            // .catch(err => console.log(err))
            // console.log('id', this.props.match.params.itemId)


            // .then(res => console.log('res: ',res))
        }
    }

    handleSubmit(e) {

        e.preventDefault();

        // this.setState({ spinnerShow: true, coverError: '', songError: '' });
        const formData = new FormData();

        // if (this.state.coverFile) {
        //     formData.append('item[cover]', this.state.coverFile)
        // }
        // if (this.state.songFile) {
        //     formData.append('item[song]', this.state.songFile)
        // }

        formData.append('story[owner_id]', this.props.currentUserId)
        formData.append('story[title]', this.state.title)
        formData.append('story[text]', this.state.text)
        formData.append('story[summary]', this.state.summary)
        formData.append('story[story_type]', this.state.story_type)
        // formData.append('item[artist_name]', this.state.artistName)
        // formData.append('item[genre]', this.state.genre)
        // formData.append('item[price]', 'free')
        // formData.append('item[about]', this.state.about)
        // formData.append('item[released]', true)
        // formData.append('item[collection_id]', null)

        // if (this.props.match.path.includes('edit')){
        //     formData.append('item[id]', this.props.match.params.itemId)
        // } 

        let storyObj = {
            "story": {
                "owner_id": this.props.currentUserId,
                "title": this.state.title || 'Untitled',
                "story_type": this.state.story || 'news',
                "text": this.state.text || 'Test text',
                "summary": this.state.summary,
                "username": this.props.user.username
            }
        }

        if (this.props.match.path.includes('new')) {

            StoryAPIUtil.createStory(this.props.currentUserId, storyObj)
                .then((res) => this.props.history.replace(`/users/${this.props.currentUserId}/stories/${res.id}`)) 

            // this.props.createStory(this.props.currentUserId, formData)
            
        } else if (this.props.match.path.includes('edit')) {
            this.props.updateStory(this.props.currentUserId, this.props.match.params.itemId, storyObj)
            // this.props.history.replace(`/artists/${this.props.currentUserId}/music/${this.state.id}`)
            // .catch(err => console.log(err))
        }


        // if (!this.state.songFile) {
        //     this.setState({ songError: "audio is required", spinnerShow: false })
        // }

        // if (!this.state.coverFile) {
        //     this.setState({ coverError: "album art is required", spinnerShow: false })
        // }








    }

    handleChange(val) {
        return e => {
            if (e.currentTarget.validity.valid) {
                this.setState({ [val]: e.currentTarget.value })
            }
        }
    }

    imageHandler(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ coverFile: file, coverPreviewUrl: fileReader.result })
        };

        if (file) {
            fileReader.readAsDataURL(file);
            this.setState({ coverError: '' })
        };
    };

    songHandler(e) {


        e.preventDefault();
        this.setState({ songFile: e.currentTarget.files[0], playerView: false })

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                songFile: file,
                songPreviewUrl: fileReader.result,
                playerView: true
            })
        };

        if (file) {
            fileReader.readAsDataURL(file);
            this.setState({ songError: '' })
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

    render() {
        // console.log(this.updateItem)


        



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
        if (this.state.playerView) {
            component = <audio className="song-preview" controls>
                <source src={`${this.state.songPreviewUrl}`} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
        }

        let spinner = <i className="fas fa-compact-disc fa-spin"></i>


        let save
        if (this.props.match.path.includes('new')) {
            save = <p>Save</p>
        } else if (this.props.match.path.includes('edit')) {
            save = <p>Update</p>
        }

        let disabler;
        let link;

        if (this.state.spinnerShow) {

            disabler = true
            link = <div className="spinner">
                {spinner}
            </div>
        } else {
            spinner = null;
            disabler = false
            link = <div>
                {/* <Link to={`/${this.props.currentUserId}`}> */}
                {save}

                {/* </Link> */}
            </div>
        }

        // let helper = null;

        let white;

        if (this.state.coverPreviewUrl) {
            white = { color: 'white' }
        }
        // console.log(this.props)
        if (this.props.match.path.includes('new')) {

            let title;
            if (this.state.title === '') {
                title = 'Untitled Story'
            } else {
                title = this.state.title
            } 
            return (
                <div className="artist-input-form story-form">
                    <form noValidate>
                        <div className="left-side">
                            <div className='preview'>
                                {/* <img src={this.state.coverPreviewUrl} alt="" /> */}
                                <div className='details'>
                                    <div className='story-type'>{this.state.genre}</div>
                                    {/* <div className="story-title">{this.state.title}</div> */}
                                    <div className="author"><div className="by">by </div> {this.state.artistName}</div>
                                    <div className="summary">{this.state.summary}</div>
                                    <div className="story-text">{this.state.text}</div>
                                </div>
                            </div>
                            <br />
                            
                        </div>

                        <div className="right-side">
                            <div className="input-helper upper top">
                                title:
                            </div>
                            <div className="track-group">
                                <div className='blue'>*</div>
                                <input 
                                    placeholder="...." 
                                    className="track-name"
                                    defaultValue={this.state.title} 
                                    type="text" 
                                    onChange={this.handleChange('title')} 
                                />
                            </div>
                            
                            <div>
                                <div className="input-helper upper">
                                    story type:
                                </div>
                                <br />
                                <input className="artist-item-input" placeholder="review, news, blog.." type="dropdown" onChange={this.handleChange('genre')} />
                            </div>
                            <div>
                                <div className="input-helper upper">
                                    summary:
                                </div>
                                <br />
                                <input onChange={this.handleChange('summary')} className="artist-item-input" placeholder="tl;dr" type="text" />
                            </div>
                            <div className="story-text">
                                <div className="input-helper upper">
                                    story:
                                </div>
                                <br />
                                <textarea 
                                    className="story-text-input"
                                    onInput={this.handleChange('text')} 
                                    placeholder=" ...." 
                                    cols="60" 
                                    rows="20">
                                </textarea>
                                <div>
                                    <button
                                        onClick={(e)=>this.handleSubmit(e)} 
                                        type="submit"
                                        >
                                            add
                                    </button>

                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
            )
        } else if (this.props.match.path.includes('edit')) {
            let test = 'test';
            // console.log('this state', this.state)

            let item;
            item = this.props.item
            // console.log(item)
            // let artistName 

            // artistName = <div>{item.artist_name}</div>

            return (
                <div className="artist-input-form">
                    <form noValidate>
                        <div className="left-side">
                            <div className='preview'>
                                <div className='details'>
                                    <div className='story-type'>{this.state.story_type}</div>
                                    <div className="story-title">{this.state.title}</div>
                                    <div className="author"><div className="by">by </div> {this.state.authorName}</div>
                                    <div className="summary">{this.state.summary}</div>
                                    <div className="story-text">{this.state.text}</div>
                                </div>
                            </div>
                            <br />

                        </div>

                        <div className="right-side">
                            <div className="input-helper upper top">
                                title:
                            </div>
                            <div className="track-group">
                                <div className='blue'>*</div>
                                <input
                                    defaultValue={this.state.title}
                                    placeholder="...."
                                    className="track-name"
                                    type="text"
                                    onChange={this.handleChange('title')}
                                />
                            </div>

                            <div>
                                <div className="input-helper upper">
                                    story type:
                                </div>
                                <br />
                                <input
                                    defaultValue={this.state.story_type}
                                    className="artist-item-input" 
                                    placeholder="review, news, blog.." 
                                    type="dropdown" 
                                    onChange={this.handleChange('story_type')} 
                                />
                            </div>
                            <div>
                                <div className="input-helper upper">
                                    summary:
                                </div>
                                <br />
                                <input 
                                    defaultValue={this.state.summary}
                                    onChange={this.handleChange('summary')} 
                                    className="artist-item-input" 
                                    placeholder="tl;dr" 
                                    type="text" 
                                />
                            </div>
                            <div className="story-text">
                                <div className="input-helper upper">
                                    story:
                                </div>
                                <br />
                                <textarea
                                    defaultValue={this.state.text}
                                    className="story-text-input"
                                    onInput={this.handleChange('text')}
                                    placeholder=" ...."
                                    cols="60"
                                    rows="20">
                                </textarea>
                                <div>
                                    <button
                                        onClick={(e) => this.handleSubmit(e)}
                                        type="submit"
                                    >
                                        update
                                    </button>

                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
            )
        }



    }

}

export default withRouter(StoryForm);