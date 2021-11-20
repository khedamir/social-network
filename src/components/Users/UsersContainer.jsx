import { connect } from "react-redux";
import React from "react";
import { follow, toggleIsFetching, setCurrentPage, setTotalUsersCount, setUsers, unFollow } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from 'axios';




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount > 500 && 500)
        })
        
    }
    onPageChanged = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <div>
            <Users
               users={this.props.users}
               currentPage={this.props.currentPage}
               pageSize={this.props.pageSize}
               totalUsersCount={this.props.totalUsersCount}
               isFetching = {this.props.isFetching}

               onPageChanged={this.onPageChanged}
               
               unFollow={this.props.unFollow}
               follow={this.props.follow}
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




export default connect(mapStateToProps,{
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);