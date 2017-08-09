import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Icon } from 'antd';


class FlexBox extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            icon: 'minus-circle',
            boxState: true
        }
    }
    static defaultProps = {
        title: '按条件搜索'
    }
    flexContentToggle(){
        this.setState({ boxState: !this.state.boxState });
        if(this.state.icon === 'plus-circle'){
             this.setState({ icon: 'minus-circle' });
             console.log(this.state.icon);
        }else{
            this.setState({ icon: 'plus-circle' });
        }
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
            lineHeight: '42px'
        }
        const felxContent = {
            width: '100%',
            height: '200px',
            background: 'orange',

        }
        let felxBox ;
        if (this.state.boxState) {
            felxBox =
                <div style={felxContent}>
                        {this.props.content}
                </div>
        } else {
            felxBox = <div></div>
        }
        return (
            <div style={container}>
                <Row>
                    <Col span={24}>
                        <div style={felxBoxTitle}>
                            <span style={{ marginLeft: '25px' }}>{this.props.title}</span>
                            <Icon type={this.state.icon} onClick={this.flexContentToggle.bind(this)}  style={{ fontSize: 16, color: '#c3a279', marginLeft: '10px', cursor: 'pointer' }} />
                        </div>
                        {felxBox}
                    </Col>
                </Row>
            </div>
        )
    }
}
module.exports = FlexBox 