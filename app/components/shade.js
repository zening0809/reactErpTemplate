import React from 'react'
import { Row, Col, Icon } from 'antd';

class Shade extends React.Component {
    static defaultProps = {
        title: '我是遮罩层'
    }

    constructor(props, context) {
        super(props, context)
    }
    state = {
       shadeState : this.props.shadeState
    }
    closeShade = () => {
        this.props.callBack();
    }
    render() {
        return (
            <div style={shadeContainer}>
                    <Row style={{width:'100%',height:'100%'}} type="flex" justify="center" align="middle">
                         <Col span={11}>
                             <div style={shadeContent}>
                                 <div style={{width:'100%',height:'48px',background:'#c3a279',color:'white',lineHeight:'48px'}}>
                                    <span style={shadeTitleText}>{this.props.title}</span>
                                    <Icon onClick={this.closeShade} className='shadeIcon' type="close" />
                                    <Icon className='shadeIcon' style={{marginRight:'2px'}} type="arrows-alt" />
                                 </div>
                            </div>
                         </Col>
                        
                    </Row>
            </div>
        )
    }
}
module.exports = Shade

const shadeContainer = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    background:'rgba(0,0,0,.6)',
}
const shadeContent = {
    marginRight:'-15px',
    maxWidth: '800px',
    height:'600px',
    background: 'white',
    borderRadius: '6px'
}
const shadeTitleText = {
    paddingLeft: '24px',
    borderLeft:'4px solid #fff',
    fontSize: '14px',
    cursor: 'pointer'
}