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
        let flexContent = <div>我是组件管理</div>
        const container = {
            width: '100%',
        }
        const conditionSearch = {
            width: '100%',
            background: 'white',
        }
        return (
            <div style={container}>
                <FlexBox content = {flexContent}/>
             </div>
        )
    }
}
module.exports = GroupManage 