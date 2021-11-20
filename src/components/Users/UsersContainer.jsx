import { connect } from "react-redux";
import React from "react";
import { followAC, isFetchingAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from 'axios';




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount > 500 && 500)
        })
        
    }
    onPageChanged = (p) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <div>
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               onPageChanged={this.onPageChanged}
               currentPage={this.props.currentPage}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               users={this.props.users}
               isFetching = {this.props.isFetching}
           />

        </div>

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(isFetchingAC(isFetching))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);