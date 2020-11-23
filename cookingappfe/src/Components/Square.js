import React, { useState } from 'react';
import Recipe from './Recipe';



//image
//hover feature -> simpleInfo
// square -> link with id -> specs in the inner recipe modal component

const Square = () => {

    const [isShown, setIsShown] = useState(false);
    return (
        <div class="nested"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            {isShown && (
                <div>
                    Here will be quick info
                </div>
            )}
            <Recipe />

        </div>
    )
}

export default Square