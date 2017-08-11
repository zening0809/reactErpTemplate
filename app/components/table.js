import React from 'react';
import { Table, Button, Icon, Row, Popconfirm } from 'antd';

// 引入遮罩层
import ShadePage from './shade'
class Tables extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: this.props.data,
        tableTitle : this.props.tableTitle,
        keys : Object.keys(this.props.data[0]).splice(1),
        shadeStatues : false
    };

    static defaultProps = {
        data: [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        }],
        tableTitle : ['name', 'age', 'adress'],
        template : <div>遮罩层模板内容</div>
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortedInfo: sorter,
            selectedRowKeys: []
        });
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }
    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    }
    addShade = () => {
        // let { data } = this.state;
        // let lastKey = data.length - 1 >= 0 ? Number((data[data.length - 1])['key']) + 1 : 1;
        // data.push({
        //     key: String(lastKey),
        //     name: 'Jim Red',
        //     age: 32,
        //     address: 'London No. 2 Lake Park',
        // })
        // this.setState({ data: data })
        this.setState({
            shadeStatues : !this.state.shadeStatues
        });
    }
    editShade = () => {
        console.log(1111);
         this.setState({
            shadeStatues : !this.state.shadeStatues
        });
    }
    delRow = (index) => {
        let { data } = this.state;
        data.splice(index, 1)
        this.setState({ data: data })
    }
    delCouple = () => {
        let surviveArr = [];
        let { data, selectedRowKeys } = this.state;
        data.forEach((item, index) => {
            if (selectedRowKeys.indexOf(item['key']) == -1) surviveArr.push(item);
        })
        selectedRowKeys = []
        this.setState({ data: surviveArr, selectedRowKeys: selectedRowKeys })

    }
    
    shadeStatuesAction = () => {
        this.setState({
            shadeStatues : !this.state.shadeStatues
        });
    };

    render() {
        let {shadeStatues} = this.state ;
        let shadeEle ;
        shadeStatues ? shadeEle = <ShadePage shadeChange = {this.shadeStatuesAction}  template={this.props.template} /> : shadeEle = <div></div>
        let { sortedInfo, selectedRowKeys, data } = this.state;
        sortedInfo = sortedInfo || {};
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [{
                key: 'odd',
                text: '偶数行选择',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: '奇数行选择',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        let columns = [];
        let columnsTitle = this.state.tableTitle;
        let columnsKey = [];

        columnsKey = this.state.keys;
        columnsKey.forEach((item, index) => {
            columns.push({
                title: columnsTitle[index],
                dataIndex: item,
                key: item,
                sorter: (a, b) => a[item].length - b[item].length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
            })
        })
        let actionObj = {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record, index) => {
              return  <div>
                    <span style={{cursor:'pointer', color:'#575048'}} onClick = {() => this.editShade(index)}>
                        <Icon type="edit" /> 修改
                    </span>
                    <span style={{cursor:'pointer', color:'#fdb241', marginLeft:'8px'}}>
                      <Icon type="search" /> 查看
                    </span>
                    <Popconfirm  title="Sure to delete?" onConfirm={() => this.delRow(index)}>
                        <Icon style={{cursor:'pointer', color:'#eb6c4b',marginLeft:'10px'}} type="delete"/><span style={{cursor:'pointer', color:'#eb6c4b'}}>&nbsp;删除</span>
                    </Popconfirm>
                </div>
            }
        }
        columns.push(actionObj);
        return (
            <div>
                <div className="table-operations" style={{ marginTop: '25px', height: '50px', background: 'white', lineHeight: '50px' }}>
                    <Button className='btnNew' style={{ marginLeft: '24px' }} icon="plus" onClick={this.addShade}>新建</Button>
                    <Button className='btnDle' style={{ marginLeft: '15px' }} icon="delete" onClick={this.delCouple.bind(this)}>删除</Button>
                </div>
                <Table style={{ background: 'white' }} columns={columns} rowSelection={rowSelection} dataSource={this.state.data} onChange={this.handleChange} />
                {shadeEle}
            </div>
        );
    }
}
module.exports = Tables