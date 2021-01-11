import React from 'react';

const ListView = ({studyList = [], handleClick}) => {
    return (
        <div className="col-4">
            <div className="list-group">
                { studyList.map((data, index) => {
                    if(data) {
                        return (
                            <button
                                key={data.study_id}
                                className="list-group-item list-group-item-action list-group-item-light"
                                value={data._id}
                                onClick={(e) => handleClick(e.target.value)}
                            >
                                {data.study_id}
                            </button>
                        )
                    }
                    return null
                }) }                
            </div>
        </div>
    );
};

export default ListView;