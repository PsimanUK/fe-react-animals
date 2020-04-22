import React from 'react';

function AnimalList(props) {
    const { animals, showImages } = props;
    return (
        <ul>
            {animals.map(({ name, image, cuteness }) => {
                return (
                    <li key={name}>
                        <h2>{name}</h2>
                        <p>Cuteness Rating: {cuteness}</p>
                        {showImages && <img src={image} alt={name} />}
                        <p>---***---</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default AnimalList;