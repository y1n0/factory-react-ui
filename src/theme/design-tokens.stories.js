import React from 'react';


const TokenColors = (props) => {
    console.log(props);
    return (
        <h1>
            colors
        </h1>
    )
}



export default {
  title: 'Design Tokens',
  component: TokenColors
};

export const Colors = (props ) => <TokenColors {...props} />;

Colors.story = {
  name: 'colors',
};
