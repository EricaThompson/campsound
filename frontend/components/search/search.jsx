import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
// import Results from './results';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownHidden: true,
            results: null,
            typedSearch: '',
            users: ''
        }

        this.hideDropdown = this.hideDropdown.bind(this)
        this.showDropdown = this.showDropdown.bind(this)
        this.typedSearch = this.typedSearch.bind(this)
    }

    // componentDidMount(){
    //     this.props.genreSearch(this.props.match.genre)
    //         .then(() => this.props.history.push(`/search/${this.props.match.genre}`))
    // }

    // componentDidMount(){
        
    // }

    genreSearch(genre){
        this.showDropdown()
        
        this.props.genreSearch(genre)
            .then(() => this.props.history.push(`/search/${genre}`))
            .then(()=> window.location.reload())
    }

    browseAll(){
        this.showDropdown()
        this.props.browseAll()
            .then(() => this.props.history.push(`/search/browse-all`))
    }
    typedSearch(){
        // if (e){

        //         window.alert('key pressed')
        // }

        
        if (this.state.typedSearch.length > 0){
            this.props.anySearch(this.state.typedSearch)
                .then(() => this.props.history.push(`/search/any/${this.state.typedSearch}`))
                .then(() => window.location.reload())
                // .catch((err)=> console.log(err))
        } 
        this.hideDropdown()
    }

    handleChange(){
        return e => {
            this.setState({typedSearch: e.currentTarget.value})
        }
    }

    showDropdown(){
        this.setState({dropdownHidden: false})
        // setTimeout(() => {
        //     this.setState({ dropdownHidden: false })
        // }, 4000);
    }

    hideDropdown(){
        this.setState({dropdownHidden: true})
        
    }

    
    
    
    
    render() {
        let loggedIn;



        if (this.props.currentUser){
            loggedIn = 'search-logged-in'
            // console.log(this.props.currentUser, loggedIn)
        } else {
            loggedIn = 'search-bar'
            // console.log(this.props.currentUser, loggedIn)
        }

        let dropdown = <div className="dropdown">
                            <div onClick={() => this.genreSearch('electronic')} className="electronic"><span>electronic</span><span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('metal')} className="metal">metal<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('rock')} className="rock">rock<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('alternative')} className="alt">alternative<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('hip')} className="hip-hop">hip-hop/rap<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('experimental')} className="exp">experimental<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('punk')} className="punk">punk<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('pop')} className="pop">pop<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.genreSearch('ambient')} className="ambient">ambient<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                            <div onClick={()=>this.browseAll()} className="browse">browse all<span className="caret"><i className="fas fa-chevron-right"></i></span></div>
                        </div>


        let component = null;
        // if (this.props.items){
        //     component = <Results 
        //                     // results={this.props.items}
        //                 />
        // } else {
        //     component = null;
        // }

        // document.getElementById()

        
        return (
            <div className={`${loggedIn}`}>
                <div 
                    onMouseEnter={()=>this.showDropdown()}
                    onMouseLeave={()=> this.hideDropdown()}
                >
                    <form onSubmit={()=>this.typedSearch()}>
                        <input
                            onChange={this.handleChange()}

                            placeholder="Search and discover music"
                            type="text"
                        />
                    </form>
                    <i 
                        onClick={()=>this.typedSearch} 
                        className="fas fa-search search-icon-logged-in">
                    </i>
                </div>
                <div
                    onMouseEnter={()=>this.showDropdown()}
                    onMouseLeave={()=> this.hideDropdown()}
                    className='dropdown-info' hidden={this.state.dropdownHidden}>{dropdown}</div>
                {component}
            </div>
        )
    }
}


export default withRouter(Search);