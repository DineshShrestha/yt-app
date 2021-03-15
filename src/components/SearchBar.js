import React, {useState} from 'react';

const SearchBar = ({onFormSubmit})=>{
    const [term, setTerm] = useState('');
    
   
    const onSubmit = (e)=>{
        e.preventDefault();
        //TODO: Make sure we call 
        // callback from parent component
        onFormSubmit(term);
    };

    return(
        <div className="search-bar ui segment">
            <form action="" className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor=""> Search For a Video</label>
                    <input type="text" 
                           value={term}
                           onChange={(event)=>setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};


export default SearchBar;