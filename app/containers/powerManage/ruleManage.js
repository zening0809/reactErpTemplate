import React from 'react'
import { Link } from 'react-router'
class RuleManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home'>我是规则管理，要去组织管理</Link>
        )
    }
}
module.exports = RuleManage 