import React from 'react'
import { Link } from 'react-router'
class GroupManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home/rolemanage'>我是组织管理,要去权限管理</Link>
        )
    }
}
module.exports = GroupManage 