export const addPlayer=(player) => {
    
    return{
        type: 'ADD_PLAYER',
        player
    };
};

export const removePlayer =(i) => {

    return{
        type: 'REMOVE_PLAYER',
        id: i
    };
}

