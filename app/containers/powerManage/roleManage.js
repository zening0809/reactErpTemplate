import React from 'react'
import { Link } from 'react-router'
class RuleManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home/rulemanage'>我是权限管理，要去规则管理</Link>
        )
    }
}
module.exports = RuleManage 