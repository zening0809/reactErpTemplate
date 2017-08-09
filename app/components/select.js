import React from 'react'
import { Row, Col, Select } from 'antd';

const Option = Select.Option;

class SelectSearch extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }
    static defaultProps = {
        title: '',
        optionArr: [
            { id: 0, value: 'jack' },
            { id: 1, value: 'lingling' },
            { id: 2, value: 'daming' },
            { id: 3, value: 'Amy' }
        ],
        cueWords: '请选择',
        label: '我是label'
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
            {console.log(this.props.optionArr)}        
        return (
            <Row gutter={15}>
                <Col span={8}><span>{this.props.label}</span></Col>
                <Col span={16} >
                    <Select
                           style={{width:'100%'}}
                            showSearch
                            placeholder = { this.props.cueWords }
                            optionFilterProp = "children"
                            onChange = { this.handleChange.bind(this) }
                            filterOption = {(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                        {
                            this.props.optionArr.map(function (item) {
                                return(<Option value={item.id}>{item.value}</Option>
                                )
                                
                            })
                        }
                    </Select>
                </Col>
            </Row>

        )
    }
}
module.exports = SelectSearch
//     < Select

//                             >

//                              </Select >