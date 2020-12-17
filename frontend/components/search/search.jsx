import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownHidden: true
        }

        this.hideDropdown = this.hideDropdown.bind(this)
    }


    showDropdown(){
        this.setState({dropdownHidden: !this.state.dropdownHidden})
    }

    hideDropdown(){
        // e.stopPropagation();
        this.setState({dropdownHidden: true})
    }



    render() {

        // if (!this.state.dropdownHidden){
        //     window.addEventListener('click', this.hideDropdown);
        // }
        
        let dropdown = <div className="dropdown">
                        <Link to={"/search/electronic"}><div onClick={()=>this.showDropdown()} className="electronic"><span>electronic</span><span className="caret">&#62;</span></div></Link>
                        <div onClick={()=>this.showDropdown()} className="metal">metal<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="rock">rock<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="alt">alternative<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="hip-hop">hip-hop/rap<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="exp">experimental<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="punk">punk<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="pop">pop<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="ambient">ambient<span className="caret">&#62;</span></div>
                        <div onClick={()=>this.showDropdown()} className="browse">browse all<span className="caret">&#62;</span></div>
                    </div>
        return (
            <div className="search-bar">
                <div onClick={()=>this.showDropdown()}>
                    <input
                        placeholder="Search and discover music"
                        type="text"
                    />
                    <i className="fas fa-search"></i>
                </div>
                <div hidden={this.state.dropdownHidden}>{dropdown}</div>
            </div>
        )
    }
}


export default Search