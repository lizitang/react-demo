import React, { Component } from 'react';
import HomeLayout from './layouts/HomeLayout';
import UserEditor from './components/UserEditor';
import PropTypes from 'prop-types'

class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    componentWillMount () {
        const userId = this.props.location.query.id;
        const api = 'http://localhost:3000/user/'+userId;
        fetch(api)
        .then(res=>res.json())
            .then(res=>{
                this.setState({
                    user:res
                })
            })
    }
    render(){
        const {user} = this.state;
        return (
            <HomeLayout title="编辑用户">
                {user ? <UserEditor editTarget={user}/> : '加载中...'}
            </HomeLayout>
        )
    }
}
UserEdit.contextTypes = {
    router: PropTypes.object.isRequired
};
export default UserEdit
