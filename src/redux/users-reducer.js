const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 20,
    totalUsersCount: 0,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.idUser) {
                        return { ...u, followed: true }
                    }
                    return u
                })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.idUser) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        
        default:
            return state;
    }
}


export const followAC = (idUser) => ({ type: FOLLOW, idUser: idUser })

export const unFollowAC = (idUser) => ({ type: UNFOLLOW, idUser })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount })



export default usersReducer;