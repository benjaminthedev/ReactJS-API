import React from 'react';

//Stateless component.
const NewSingle = ({item}) => (
    <li>
        <p>
            {item.title}
        </p>
    </li>
);

export default NewSingle;