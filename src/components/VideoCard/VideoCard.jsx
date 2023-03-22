import './VideCard.scss'

const VideoCard = ({videoLink, title, overview}) =>{
    return(
        <li className='video-card'>
            <div className="video-section">
                <iframe width="560" height="315" src={videoLink}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div className="body-section">
                <h3>{title}</h3>
                <p>Overview: {overview}</p>
            </div>
        </li>
    )
}

export default VideoCard