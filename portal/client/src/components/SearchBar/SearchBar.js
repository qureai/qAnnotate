import React from 'react';

const SearchBar = ({searchKeyword, updateStudyList}) => {
    return (
        <div className="row py-4">
            <div className="col-12">
                <div className="form-group">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Search for study IDs..."
                        aria-label="Search"
                        value={searchKeyword}
                        onChange={(e) => updateStudyList(e.target.value)}
                    />
                </div>                
            </div>
        </div>
    );
};

export default SearchBar;