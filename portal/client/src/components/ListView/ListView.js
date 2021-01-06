import React from 'react';

const ListView = ({studyList = []}) => {
    return (
        <div className="col-4">
            <div className="list-group">
                { studyList.map((data, index) => {
                    if(data) {
                        return (
                            <a href="#" key={data.name} className="list-group-item list-group-item-action list-group-item-light active">{data.name}</a>
                        )
                    }
                    return null
                }) }                
            </div>
        </div>
    );
};

export default ListView;