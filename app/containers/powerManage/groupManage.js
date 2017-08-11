import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Button} from 'antd';

//引入组件
import FlexBox from '../../components/flexbox' 
import SelectSearch from '../../components/select' 
import Tables from '../../components/table' 

import GroupTemplate from './groupTemplate' 

class GroupManage extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    state = {
        groupTemplate : <GroupTemplate/>
    }
    render() {
        let flexContent = 
        <div style={felxContent}>
            <Row gutter={25} type="flex" align="middle">
                <Col span={6}><SelectSearch/></Col>
                <Col span={6}><SelectSearch/></Col>
                <Col span={6}><SelectSearch/></Col>
                <Col span={6} style={{paddingLeft:'40px'}}> <Button className='btnSearch'  icon="search">Search</Button></Col>
            </Row>
        </div>
        const container = {
            width: '100%',
        }
        const conditionSearch = {
            width: '100%',
            background: 'white',
        }
        return (
            <div style={container}>
                <FlexBox  content = {flexContent}/>
                <Tables template = {this.state.groupTemplate}></Tables>
             </div>
        )
    }
}
module.exports = GroupManage 

const felxContent = {
    width: '100%',
    background: 'white',
    padding:'20px'

}