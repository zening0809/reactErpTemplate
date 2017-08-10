import React from 'react';
import { Table, Button, Icon, Row, Popconfirm } from 'antd';


class Tables extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
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
        }]
    };

    static defaultProps = {

    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortedInfo: sorter,
            selectedRowKeys: []
        });
    }
    onSelectChange = (selectedRowKeys) => 
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
    addRow = () => {
        let { data } = this.state ;

        let lastKey = data.length - 1 >= 0 ?Number((data[data.length - 1])['key']) + 1: 1;
        data.push({
            key: String(lastKey),
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        })
        this.setState({ data: data })
    }
    delRow = (index) => {
        let { data } = this.state;
        data.splice(index,1)
        this.setState({ data: data })
    }
    delCouple = () =>{
         let surviveArr = [] ; 
         let { data, selectedRowKeys} = this.state ;
         data.forEach((item, index)=>{
              if (selectedRowKeys.indexOf(item['key']) == -1)  surviveArr.push(item);
         })
        selectedRowKeys = []
        this.setState({ data: surviveArr ,selectedRowKeys : selectedRowKeys})
        
    }
    render() {
        let { sortedInfo, selectedRowKeys } = this.state;
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
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }, {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record, index) => (
                <div>
                    <span>
                        <Icon type="down" /> <a href="#">修改</a>
                    </span>
                    <span>
                        <Icon type="down" /><a href="#">查看</a>
                    </span>
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.delRow(index)}>
                        <a href="#">Delete</a>
                    </Popconfirm>
                </div>
                ),
        }];
        return (
            <div>
                <div className="table-operations" type="flex" align="middle" style={{marginTop:'25px',height:'50px',background:'white',lineHeight:'50px'}}>
                    <Button className='btnNew' style={{marginLeft:'24px'}}  icon="plus" onClick={this.addRow.bind(this)}>新建</Button>
                    <Button className='btnDle' style={{marginLeft:'15px'}} icon="delete" onClick={this.delCouple.bind(this)}>删除</Button>
                </div>
                <Table style={{background:'white'}} columns={columns} rowSelection={rowSelection} dataSource={this.state.data} onChange={this.handleChange} />
            </div>
        );
    }
}
module.exports = Tables