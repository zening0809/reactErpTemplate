import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'antd';

//引入组件
import FlexBox from '../../components/flexbox' 

class GroupManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        const container = {
            width: '100%',
        }
        const conditionSearch = {
            width: '100%',
            background: 'white',
            height: '200px'
        }
        return (
            <div style={container}>
                <FlexBox/>
             </div>
        )
    }
}
module.exports = GroupManage 