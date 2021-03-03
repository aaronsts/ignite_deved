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
const nextyear = `${currentYear+1}-${currentMonth}-${currentDay}`;


// Popular Games
const pop_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10` // Fetch 10 most popular games from last year until now


export const popularGamesURL = () => `${base_url}${pop_games}` // Doesn't need return function if it's one line



