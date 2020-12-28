# CampSound README
     🌊🏕🌳🏔🌒
     
CampSound, a Bandcamp clone, is a music/camp sound distribution service connecting music creators with their fans. Campsound allows any user the ability to upload their music/sounds and have them played and downloaded by anyone.

A live link to the site hosted on Heroku is here: https://campsound.herokuapp.com/#/

## Technologies
This fullstack single-page application was created with Ruby on Rails, React, Redux, Node.js, SQL, Active Record, Active Storage, AWS, AJAX, JSX, Jbuilder, CSS3 and JSX.

## Instructions
To run this application, after cloning the repository fun `npm install` in the root directory to add the node dependencies. In one terminal run `npm start`, with Ruby on Rails installed, run `rails server` in another terminal, navigate to `localhost:3000` in your web browser.

## Feature Highlight No. 1
![screenshot of artist page](https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-22+at+10.55.11+PM.png)

The artist page encapilates most of the most important technical features included in this site including: 
* Link to forms that enable users to upload their song with searchable genre, artist name which will default to their username, an about for each song as well as album art. On this form, the user is also able to preview any songs before uploading to be sure of the correct file being uploaded. This page also includes a live preview area of all of the information input by the user.
![view of item input form](https://campsound-dev.s3-us-west-1.amazonaws.com/campsound+demo/Screen+Shot+2020-12-27+at+5.42.48+PM.png)
* Conditionally if the user has music uploaded and released or not, the entire page will render and index of all of their released audio files or a welcome to upload, respectively.
* My site also doesn't include a signup form to receive user information like for their profile picture, location and bio from and instead I have created formless inputs for each artist to change individual parts of their information as desired. Each of the typed inputs features a countdown for the remaining characters available for each unput. 
* Each musical release can be downloaded or added to a playlist that conditionally renders if there are music items currently in the playlist. Songs automatically play when added, can be removed and automatically remove when they have completed playing.
Challenges:
* Building the playlist proved to be the most difficult task as it needed the most conditional on this page. I was able to find new event handlers that allowed me to create a smoothe intuitive experience that users are used to.


## Feature Highlight No. 2

<p align="center">
  <img src="https://campsound-dev.s3-us-west-1.amazonaws.com/Screen+Shot+2020-12-22+at+10.46.05+PM.png" alt="filled artist input form" />
</p>

Search feature:
* The search feature, a pixel and color perfect clone of the search feature on bandcamp.com allows the user to quickly search by predetermined genres.
* Users are also able to type a search for artist names and title names of released audio.
* Each result renders to a page, unless there are no search results with a conditionally rendered header with the genre or a suggestion for the user to add the first if their search result is empty.
* Users are able to listen to or download each search result.
Challenges:
* The search was challenging as it was my first time implimenting one. It was a great journey to learn more about SQL which was used to filter the backend results to the user.

## Code Snippets
Artist Hompage: With character limits on input fields, I came up with a simple solution to show the artist the amount of characters they have left to use for their inputs for their location and biography:
```
let locationCharCount = this.state.location.length;
let locationCharLeft = 35 - locationCharCount;
let bioCharCount = this.state.bio.length;
let bioCharLeft = 400 - bioCharCount;
```
Artist Homepage Item Form: Since there is a wait while an artist uploads audio to the database, I created a visual queue that the audio is uploading, disabling the `Save` button and redirecting the artist after the audio has successfully loaded to the database.
```
let spinner = <i className="fas fa-compact-disc fa-spin"></i>;
let save = <p>Save</p>; 
let disabler;
let link;

if (this.state.spinnerShow){
    disabler = true;
    link = <div className="spinner">
               {spinner}        
           </div>
} else {
    spinner = null;
    disabler = false;
    link = <div>
              {save}
           </div>
};

```

Artist Collection Index: I added a music player to their index page so that fans will be able to create their own experiences with each artist's released audio.
```
playSong(song){
    this.setState({ currentSong: song, playerView: true })
}

nextSong(song){

    let songList = []; 
    this.state.itemList.forEach(item => {
            songList.push(item.song)
    })

    let index = songList.indexOf(song)
    let nextIdx = 0;
    
    if (index + 1 < songList.length){
            nextIdx = index + 1
    }

    this.setState({playerView: false})
    this.playSong(songList[nextIdx])
        
    this.removeSong(this.state.itemList[index])
}

removeSong(song){
    let index = this.state.itemList.indexOf(song)
    let songCopy = this.state.itemList
    songCopy.splice(index,1)
    this.setState({itemList: songCopy})
}
...
render(){

let itemDisplay = this.props.items.map((item) => {
    return <div key={item.id} className="item-display">
               <img src={`${item.cover}`} alt="" />
               <h5 className="home-text top">{item.title}</h5>
               <h5 className="home-text artist">{item.artist}</h5>
               <h5 onClick={() => this.addToItemList(item)} 
                   className="home-text add">
                       Add to Playlist
               </h5>
               <h5 className="home-text">
                   <a href={`${item.song}`} 
                       download>
                           Download
                   </a>
               </h5>
               <h5 
                   className="home-text delete" 
                   onClick={()=>this.deleteSong(item)}>
                       Delete
               </h5>

            </div>
})

let playlist = this.state.itemList.map((song, idx) => {
            return <div key={idx} 
                       className={`i${idx + 1}`}
                   >
                       {/* {indices.push(idx)} */}
                       <div 
                           onClick={() => this.setState({ 
                                   playerView: false }, () => 
                                       this.playSong(song.song)
                       )}>
                           ▶
                        </div>
                        <div>
                            {idx + 1 + "."}
                        </div>

                        <div className={current} >
                            {song.title} by {song.artist}
                        </div>
                        <div onClick={() => this.removeSong(song)}>
                            ✘
                        </div>
                    </div>
})
    
```
    

## Future Directions
* Add a payment feature where artists can set a price for a download or give their fans the ability to name their price.
* Add item pages for songs and albums to display lyrics and copyrights.
