import React from 'react'
import {useHistory} from 'react-router-dom';

// Styling
import styled from 'styled-components';
import {motion} from 'framer-motion';
// Redux
import {useSelector} from 'react-redux';

import {resizeImg} from '../util';

// Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg'; // Default image
import starfull from '../img/star-full.png';
import starempty from '../img/star-empty.png';

const GameDetail = () => {
    const history = useHistory();
    // Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('detail-card')){
            history.push('/');
        }
    }

    const getStars = () => {
        const star = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i<= 5; i++){
            if (i <= rating){
                star.push(<img alt='star' src={starfull} key={i}></img> )
            }else{
                star.push(<img alt='star' src={starempty} key={i}></img> )
            }
        }
        return star;
    }

    const getPlatform = (platform) => {
        switch(platform){
            case "Playstation 4":
            case "Playstation 5":
                return playstation;
            case "Xbox One":
            case "Xbox Series S/X":
                return xbox;
            case "macOS":
                return apple;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            default: 
                return gamepad;
        }
    }

    // Data
    const {screenshot, game, isLoading} = useSelector(state => state.detail);
    return (
        <>
        {!isLoading && (
            <StyledCardShadow className='detail-card' onClick={exitDetailHandler}>
                <StyledDetail>
                    <StyledStats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            {getStars()}
                        </div>
                        <StyledInfo>
                            <h3>Platforms</h3>
                            <StyledPlatforms>
                                {game.platforms && game.platforms.map(data => (
                                        <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}></img>
                                    
                                ))}
                            </StyledPlatforms>
                        </StyledInfo>
                    </StyledStats>
                    <StyledMedia>
                        <img  src={resizeImg(game.background_image,640)} alt={game.name}/>
                    </StyledMedia>
                    <StyledDescription>
                        <p>{game.description_raw}</p>
                    </StyledDescription>
                    <div className="gallery">
                        {screenshot.results && screenshot.results.map(screenshot => (
                            <img src={screenshot.image} key={screenshot.id} alt={game.name}/>
                        ))}
                    </div>
                </StyledDetail>
            </StyledCardShadow>
        )}
        </>
    );
};

const StyledCardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &-::-webkit-scrollbar{
        width: 0.5rem;

    }
    &-::-webkit-scrollbar-thumb{
        background-color: #ff7676;
        
    }
    &-::-webkit-scrollbar-track{
        background: white;
        
    }
`;

const StyledDetail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 10rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
        padding: 2rem 0rem;
    }
`;

const StyledStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        display: inline;
    }
`;

const StyledInfo = styled(motion.div)`
    text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    font-size: 0.8rem;
    img{
        margin-left: 3rem;
        width: 100%;
    }
`;

const StyledDescription = styled(motion.div)`
    text-align: justify;
    margin: 3rem 0rem;
`;

const StyledMedia = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
        bottom: 0;
    }
`

export default GameDetail
