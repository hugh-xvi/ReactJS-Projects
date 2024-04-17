import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({ numberStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    } //when we click it, rating will be set to the current index so that it sets to to active aka yellow

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex) 
    } //when we hover, it will be yellow because hover is set to current index 

    function handleMouseLift() {
        setHover(rating)
    } // then after we leave the hover it will set hover to rating so whatever we clicked for rating

    return <div className="star-rating">
        {
            [...Array(numberStars)].map((_, index) => { //Variable name is array and the map function lets us create a new array with the function on each of them, which takes in the parameter index
                index += 1 //this makes it so that it maps every star out with the functions below and it increaes the index after each one ex: 1,2,3,4,5

                return <FaStar
                    key={index} //every star gets a unique index
                    className={index <= (hover || rating) ? 'active' : 'inactive'} //if index is less or equal to whatever rating or hover is, its yellow
                    onClick={() => handleClick(index)} //makes stars yellow at index
                    onMouseMove={() => handleMouseEnter(index)} // hover makes star yellow at index
                    onMouseLeave={() => handleMouseLift()} // when you unhover, it will make the last star rating value yellow
                    size={40}
                />
            })
        }
    </div>
}