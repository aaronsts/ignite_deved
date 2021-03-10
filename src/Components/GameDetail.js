import React from 'react'

// Styling
import styled from 'styled-components';
import {motion} from 'framer-motion';
// Redux
import {useSelector} from 'react-redux';


const GameDetail = () => {
    // Data
    const {screenshot, game, isLoading} = useSelector(state => state.detail);
    return (
        <>
        {!isLoading && (
            <StyledCardShadow>
                <StyledDetail>
                    <StyledStats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>{game.rating}</p>
                        </div>
                        <StyledInfo>
                            <h3>Platforms</h3>
                            <StyledPlatforms>
                                {game.platforms && game.platforms.map(data => (
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </StyledPlatforms>
                        </StyledInfo>
                    </StyledStats>
                    <StyledMedia>
                        <img src={game.background_image} alt="image"/>
                    </StyledMedia>
                    <StyledDescription>
                        <p>{game.description_raw}</p>
                    </StyledDescription>
                    <div className="gallery">
                        {screenshot.results && screenshot.results.map(screenshot => (
                            <img src={screenshot.image} key={screenshot.id} alt="game"/>
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
`;

const StyledInfo = styled(motion.div)`
    text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
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
