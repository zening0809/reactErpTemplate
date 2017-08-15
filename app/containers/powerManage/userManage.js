import React from 'react'
import { Link } from 'react-router'
class UserManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home/rolemanage'>我是账号管理, 要回到角色管理了</Link>
        )
    }
}
module.exports = UserManage 