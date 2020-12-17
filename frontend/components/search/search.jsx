import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import Results from './results';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownHidden: true,
            results: null,
            typedSearch: ''
        }

        this.hideDropdown = this.hideDropdown.bind(this)
    }

    genreSearch(genre){
        this.showDropdown()
        $.ajax({
            // url: `/api/items?genre=${genre}`
            url: `/api/items?${genre}`
        }).then(res => this.setState({ results: res })).then(() => this.props.history.replace(`/search/${genre}`))
    }

    browseAll(){
        this.showDropdown()
        $.ajax({
            url: `/api/items`
        }).then(res => this.setState({ results: res }))
    }

    typedSearch(){
        // this.showDropdown()
        $.ajax({
            url: `/api/items?${this.state.typedSearch}`
        }).then(res => this.setState({ results: res }))
    }

    handleChange(){
        return e => {
            this.setState({typedSearch: e.currentTarget.value})
        }
    }


    showDropdown(){
        this.setState({dropdownHidden: !this.state.dropdownHidden})
    }

    hideDropdown(){
        // e.stopPropagation();
        this.setState({dropdownHidden: true})
    }



    render() {
        console.log('result?', this.state.results)
        // console.log('typedSearch', this.state.typedSearch)
        let dropdown = <div className="dropdown">
            <div onClick={() => this.genreSearch('electronic')} className="electronic"><span>electronic</span><span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('metal')} className="metal">metal<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('rock')} className="rock">rock<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('alternative')} className="alt">alternative<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('hip-hop')} className="hip-hop">hip-hop/rap<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('expermimental')} className="exp">experimental<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('punk')} className="punk">punk<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('pop')} className="pop">pop<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('ambient')} className="ambient">ambient<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.browseAll()} className="browse">browse all<span className="caret">&#62;</span></div>
                    </div>


        let component;

        if (this.state.results){
            component = <Results results={this.state.results}/>
        } else {
            component = null;
        }

        
        return (
            <div className="search-bar">
                <div onClick={()=>this.showDropdown()}>
                    <input
                        // onKeyDown={this.typedSearch}
                        onChange={this.handleChange()}
                        placeholder="Search and discover music"
                        type="text"
                    />
                    <i 
                        // onClick={()=>this.typedSearch()} 
                        className="fas fa-search">
                    </i>
                </div>
                <div hidden={this.state.dropdownHidden}>{dropdown}</div>
                {component}
            </div>
        )
    }
}


export default Search