import profileImage from './assets/profile.png';

function Card(params) {
    return(
        <div className="card">
            <img className='card-image' src={profileImage} alt="profile picture" />
            <h2 className='card-title'>Zain Ullah</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export default Card