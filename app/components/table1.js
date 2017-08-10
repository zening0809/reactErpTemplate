import React from 'react'
import { Table, Input, Icon, Button, Popconfirm } from 'antd';


const data = [{
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
}];

let dataKeyArr = (Object.keys(data[0]).splice(1));
let tableHead = ['姓名', '年龄', '地址'];
let columns = [];

console.log(dataKeyArr);

class Tables extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };
    columnsAction(filteredInfo,sortedInfo) {
        columns = [];
        dataKeyArr.forEach((item, index) => {
            columns.push(
                {
                    title: tableHead[index],
                    dataIndex: dataKeyArr[index],
                    key: dataKeyArr[index],
                    filters: [
                        { text: 'Joe', value: 'Joe' },
                        { text: 'Jim', value: 'Jim' },
                    ],
                    filteredValue: filteredInfo[dataKeyArr[index]] || null,
                    onFilter: (value, record) => record[dataKeyArr[index]].includes(value),
                    sorter: (a, b) => a[dataKeyArr[index]] - b[dataKeyArr[index]],
                    sortOrder: sortedInfo.columnKey === dataKeyArr[index] && sortedInfo.order,
                }
            )
        })
         console.log(columns);
        return columns ;
       
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    }
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        columns = this.columnsAction(filteredInfo,sortedInfo);
        return (
            <div>
                <div className="table-operations">
                    <Button >新建</Button>
                    <Button >删除</Button>
                </div>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        );
    }
}


module.exports = Tables