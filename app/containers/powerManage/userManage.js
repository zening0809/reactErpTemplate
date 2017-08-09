import React from 'react'
import { Link } from 'react-router'
class UserManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home'>我是用户管理, 要回到组织管理了</Link>
        )
    }
}
module.exports = UserManage 