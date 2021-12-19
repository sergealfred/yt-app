import React, { useState } from 'react';

// class SearchBar extends React.Component {

//     state = { term: ''};

//     onTermSubmit = event => {
//         event.preventDefault();

//         // TODO: callback from parent component
//         this.props.onTermSubmit(this.state.term);
//     }

//     onInputChange = event => {
//         this.setState({term: event.target.value});
//     }

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form className="ui form" onSubmit={this.onTermSubmit}>
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input
//                             type="text"
//                             value={this.state.term}
//                             onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

const SearchBar = ({ onTermSubmit }) => {

    const [term, setTerm] = useState('');

    // refactor onInputChange - added in render

    // onTermSubmit => onSubmit (naming collision - prop and function)
    const onSubmit = event => {
        event.preventDefault();

        // TODO: callback from parent component
        onTermSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Search for a Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );

}

export default SearchBar;