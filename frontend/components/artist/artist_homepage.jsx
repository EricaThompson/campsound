// import React from 'react';
// import { Link } from 'react-router-dom';
// import ZeroItems from './zero_items';

// class ArtistHomepage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             status: null,
//             image: this.props.user.userImg,
//             locationFlag: false,
//             location: '',
//             bioFlag: false,
//             bio: this.props.user.bio,
//             newImage: null,
//             link: '',
//         }
//     }

//     handleSubmit(e){
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('user[location]', this.state.location)
//         formData.append('user[bio]', this.state.bio)
//         formData.append('user[link]', this.state.link)

//         this.props.updateUser(formData, this.props.currentUser)
//             this.setState({
//                 locationFlag: false,
//                 bioFlag: false
//             })
//     }
    
//     imageSubmit(e){
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('user[user_img]', e.currentTarget.files[0]);
//         this.props.updateUser(formData, this.props.currentUser)
//     }

//     flagChange(val){
//         if (val === "locationFlag"){
//             this.setState({ [val]: !this.state.locationFlag})
//         } else {
//             this.setState({ [val]: !this.state.bioFlag})
//             this.setState({bio: ''})
//         }
//     }

//     handleChange(val){
//         return e => {
//             this.setState({[val]: e.currentTarget.value})
//         }
//     }

//     render(){
        
//         // let component = <ZeroItems userId={this.props.currentUser}/>
//         // let image = <img 
//         //         className="image" 
//         //         src={this.props.user.userImg} 
//         //         alt=""
//         //     />
        
//         // let location = null;
//         // let bio = null;
        
//         // let locationCharCount = this.state.location.length;
//         // let locationCharLeft = 35 - locationCharCount;
//         // let bioCharCount = this.state.bio.length;
//         // let bioCharLeft = 400 - bioCharCount;
        
        
//         // let locationDisabler = true;
//         // if (this.state.location.length > 0){
//         //     locationDisabler = false
//         // } else {
//         //     locationDisabler = true
//         // }
        
//         // let bioDisabler = true;
//         // if (this.state.bio.length > 0) {
//         //     bioDisabler = false
//         // } else {
//         //     bioDisabler = true
//         // }
        
//         // let locationAdded;
//         // if (this.state.location.length > 0){
//         //     locationAdded = this.props.user.location
//         // } else {
//         //     locationAdded = ''
//         // }

//         // let locationUpdater;
//         // if (locationAdded.length === 0) {
//         //     locationUpdater = "add location"
//         // } else {
//         //     locationUpdater = "edit location"
//         // }

//         let bioAdded;
//         if (this.props.user.bio.length > 0) {
//             bioAdded = this.props.user.bio
//         } else {
//             bioAdded = ''
//         }

//         let bioUpdater;
//         if (bioAdded.length === 0) {
//             bioUpdater = "add bio"
//         } else {
//             bioUpdater = "edit bio"
//         }


//         if (!this.state.locationFlag) {
//             location = <div className='location-output'>
//                             {locationAdded}
//                             <div
//                                 className="location"
//                                 onClick={() => this.flagChange('locationFlag')} 
//                             >
//                                 <br />
//                                 {locationUpdater}
                                
//                             </div>
//                         </div>
//         } else {
//             location = <form 
//                             className="artist-form" 
//                             onSubmit={this.handleSubmit.bind(this)} 
//                         >
//                 <input 
//                     maxLength="35" 
//                     onChange={this.handleChange('location')} 
//                     className="location-input" 
//                     type="text" 
//                     value={this.state.location}
//                 />
//                 <div className="count">{locationCharLeft} characters left</div>
//                 <button 
//                     disabled={locationDisabler} 
//                     className="save" 
//                     type='submit'>
//                         save
//                 </button> 
//                 <button 
//                     className="cancel" 
//                     type="button" 
//                     onClick={() => this.flagChange('locationFlag')}>
//                         cancel
//                 </button>
//             </form>
//         }

//         if (!this.state.bioFlag) {
//             bio = <div className='bio-output'>
//                     {bioAdded}    
//                     <div 
//                         className="bio" 
//                         onClick={() => this.flagChange('bioFlag')} 
//                     >
//                     <br />
//                         {bioUpdater}
//                     </div>     
//                 </div>
//         } else {
//             let textValue = `${this.state.bio}`
//             bio = <form 
//                 className="artist-form" 
//                 onSubmit={this.handleSubmit.bind(this)} 
//                 >
//                     <textarea 
//                         maxLength="400" 
//                         placeholder="Plain text only, no HTML." 
//                         onChange={this.handleChange('bio')} 
//                         className="bio-input" 
//                         type="text"
//                         value={textValue} 
//                     >
//                     </textarea>
//                     <div className="count">{bioCharLeft} characters left</div>
                    
//                     <button 
//                         disabled={bioDisabler} 
//                         className="save" 
//                         type='submit'>save
//                     </button> 
//                     <button 
//                         className="cancel" 
//                         type="button" 
//                         onClick={() => this.flagChange('bioFlag')}>
//                             cancel
//                     </button>
//                 </form>
//         }

//         return (
//             <div className='artist-home'>
//                 <br />
//                 <br />
//                 {component}
//                 <br />
//                 <br />
//                 <div className="sidebar">
//                     <div className="about">
//                         <div className="image">
//                             {image}
//                             <input 
//                                 id="user-image" 
//                                 type="file" 
//                                 onChange={this.imageSubmit.bind(this)}
//                             />
//                             <div className="change-image">↻</div>
//                         </div>
//                         <div 
//                             className="username">
//                                 {this.props.user.username}
//                         </div>
//                         {location}
//                         {bio}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// export default ArtistHomepage