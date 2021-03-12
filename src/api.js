// Base URL
const base_url = 'https://api.rawg.io/api/';

// Get Date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`; // needs to return 05 and not 5
    }
    else{
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day < 10){
        return `0${day}`; // needs to return 05 and not 5
    }
    else{
        return day;
    }
};

// Current Date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;


// Popular Games
const pop_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`; // Fetch 15 most popular games from last year until now
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`; // Upcoming 10 games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`; // Newest 10 games

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`

// Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`

export const popularGamesURL = () => `${base_url}${pop_games}`; // Doesn't need return function if it's one line
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;




