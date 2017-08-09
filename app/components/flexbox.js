import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Icon } from 'antd';


class FlexBox extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            icon : 'plus-circle-o',
            boxState : true 
        }
    }
    static defaultProps = {
        title : '按条件搜索'
    }
    render() {
        const container = {
            width: '100%',
        }
        const felxBoxTitle = {
            width: '100%',
            background: 'white',
            height: '42px',
            font: '14px "微软雅黑" ',
            lineHeight:'42px'
        }
        return (
            <div style={container}>
                <Row>
                    <Col span={24}>
                        <div style={ felxBoxTitle }>
                            <span style={{marginLeft:'25px'}}>{按条件搜索}</span>

                            <Icon type="plus-circle-o" style={{ fontSize: 16, color: '#c3a279',marginLeft:'10px' }}/>
                        </div>

                        <div style={felxContent}>

                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
module.exports = FlexBox 