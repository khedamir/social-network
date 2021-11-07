const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.idUser){
                        return {...u, followed: true}
                    }
                    return u
                } )

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) =>{
                    if(u.id === action.idUser){
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        default:
            return state;
    }
}


export const followAC = (idUser) =>({type: FOLLOW, idUser: idUser})

export const unFollowAC = (idUser) =>({type: UNFOLLOW, idUser})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;