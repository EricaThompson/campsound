import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownHidden: true,
            result: null,
            typedSearch: ''
        }

        this.hideDropdown = this.hideDropdown.bind(this)
    }

    genreSearch(genre){
        this.showDropdown()
        $.ajax({
            url: `/api/items?${genre}`
        }).then(res => this.setState({result: res}))
    }

    browseAll(){
        this.showDropdown()
        $.ajax({
            url: `/api/items`
        }).then(res => this.setState({ result: res }))
    }

    typedSearch(){
        // this.showDropdown()
        console.log("e",event)
        if (event.key == 'Enter'){
            $.ajax({
                url: `/api/items?${this.state.typedSearch}`
            }).then(res => this.setState({ result: res }))
        }
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
        // console.log('result?', this.state.result)
        // console.log('typedSearch', this.state.typedSearch)
        let dropdown = <div className="dropdown">
            <div onClick={() => this.genreSearch('electronic')} className="electronic"><span>electronic</span><span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('metal')} className="metal">metal<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('rock')} className="rock">rock<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('alt')} className="alt">alternative<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('hip-hop')} className="hip-hop">hip-hop/rap<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('exp')} className="exp">experimental<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('punk')} className="punk">punk<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('pop')} className="pop">pop<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.genreSearch('ambient')} className="ambient">ambient<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.browseAll()} className="browse">browse all<span className="caret">&#62;</span></div>
                    </div>

        
        return (
            <div className="search-bar">
                <div onClick={()=>this.showDropdown()}>
                    <input
                        onKeyDown={this.typedSearch}
                        onChange={this.handleChange()}
                        placeholder="Search and discover music"
                        type="text"
                    />
                    <i onClick={()=>this.typedSearch()} className="fas fa-search"></i>
                </div>
                <div hidden={this.state.dropdownHidden}>{dropdown}</div>
            </div>
        )
    }
}


export default Search