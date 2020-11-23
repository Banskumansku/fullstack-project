import React from 'react';
import Square from './Square'

//image
//hover feature? -> with just the time and nothing else

// square -> link with id -> specs in the inner recipe component

const Grid = () => {
    return (
        <div class="wrapper">
        <div class="box box1">
          <Square />
          <Square />
          <Square />
          <Square />        
          <Square />
          <Square />
          <Square />
          <Square />        
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>    )
}

export default Grid