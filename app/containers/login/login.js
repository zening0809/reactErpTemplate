import React from 'react'
import { Link } from 'react-router'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home'>我是登录页</Link>
        )
    }
}
module.exports = Login 