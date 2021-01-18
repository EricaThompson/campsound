import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import ArtistHomepageContainer from './artist/artist_homepage_container';
import ArtistItemContainer from './artist/artist_item_form_container';
import SearchContainer from './search/search_container';
import ResultsContainer from './search/results_container';
import HomeContainer from './home/home_container';
import ItemContainer from './artist/item_container';
import StoriesIndexContainer from './stories/stories_index_container';
import StoryContainer from './stories/story_container';
import StoryFormContainer from './stories/story_form_container';
// import ShowItemsContainer from './artist/show_items_container';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import stories_index_container from './stories/stories_index_container';
// import Home from './home/home';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: ''
        };
    }

    render(){
        return(
            <div className="container">
                <div className="top">
                    <Modal />
                    <Route path="/" component={SearchContainer}/>
                    <Route key={Math.random()} path="/" component={NavBarContainer} />
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/stories" component={StoriesIndexContainer} />
                    <Route exact path='/users/:authorId/stories/story/new' component={StoryFormContainer}/>
                    <Route exact path='/users/:authorId/stories/:storyId' component={StoryContainer} />
                    <Route exact path="/:userId/new" component={ArtistItemContainer} />
                    <Route exact path="/artists/:userId/music/:itemId/edit" component={ArtistItemContainer} />
                    {/* <Route exact path="/" /> */}
                    {/* <img id="main-story" src={require('../../app/assets/images/pexels.jpg')} alt="main story image" /> */}
                    {/* </div> */}
                    <Route exact path="/artists/:userId/music/:itemId" component={ItemContainer}/>
                    <Route exact path="/search/:result" component={ResultsContainer} />
                    <Route exact path="/artists/:userId" component={ArtistHomepageContainer} />

                    {/* <Route exact path="/:userId" component={ShowItemsContainer} /> */}
                    
                </div>
            </div>
        )
    }
}

export default App;