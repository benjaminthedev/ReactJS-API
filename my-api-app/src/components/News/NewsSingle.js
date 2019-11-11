import React from 'react';

//Stateless component.
const NewSingle = ({item}) => (
    <div className="col s4">
        <div className="card">
            <div className="card-image">
                <img src={item.urlToImage} alt={item.title} />
            </div>
            <h5>
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
            </h5>
            <br />
            <p>Written By: <em>{item.author}</em></p>
        </div>    



            
    
    </div>


);

export default NewSingle;