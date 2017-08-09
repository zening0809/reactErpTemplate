import React from 'react'
import { Link } from 'react-router'



class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
module.exports = Home 