import React, { useState } from 'react';
import ReactModal from 'react-modal';

//popup modal that has the recipe
//Has further cooking info 

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel nisl convallis, tempor dolor eget, cursus ante. Ut maximus nulla nec ipsum eleifend, ac dignissim metus malesuada. Etiam varius eu ipsum et dapibus. Nam et commodo libero. In eget ultrices urna. Cras pellentesque mauris dui. Mauris vitae enim fermentum, dapibus arcu lacinia, venenatis diam. Etiam mattis et ante eget mattis. Sed accumsan vulputate odio quis vestibulum. Pellentesque urna metus, accumsan id faucibus vel, dapibus a orci."

const Recipe = (props) => {


    const [showRecipeModal, setShowRecipeModal] = useState(false);


    const handleCloseModal = () => {
        setShowRecipeModal(false)
    }
    const handleOpenModal = () => setShowRecipeModal(true)
    console.log(showRecipeModal)



    return (
        <div>
            <button onClick={handleOpenModal}>Click for recipe</button>
            <ReactModal
                isOpen={showRecipeModal}
                contentLabel="Minimal Modal Example"
                ariaHideApp={true}>
                {lorem}
                <button onClick={handleCloseModal}>Close Modal</button>
            </ReactModal></div>
    )
}

export default Recipe