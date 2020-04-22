import React from 'react';

function Header(props) {
    const { user, animals } = props;
    return <h1>{user}'s {animals}</h1>;
};

export default Header;