import myProfilePic from './assets/cute_cat.jpg'

function Card () {
    return (
        <div className="card">
            <img className="card-image" src={myProfilePic} alt="Cute smiling cat" />
            <h2 className='card-title'>Cute Cat</h2>
            <p className='card-text'>I love coding and playing basketball!</p>
        </div>
    );
}

export default Card;