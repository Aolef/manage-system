import React, { useEffect, useState } from "react"
import { Table, Button } from "antd"
import { useRequest } from "ahooks"

export default function Userlist() {
    const [page ,setPage] = useState(1)
    const [pageSize, setPageSize] = useState(20)
    const [total, setTotal] = useState(0)
    const [showAddModel, setShowAddModel] = useState(false)
    useEffect(() => {
//      
    },[])
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
        {
            key: '3',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '4',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];
      
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const onChange = (page, pageSize) => {
        setPage(page)
        setPageSize(pageSize)
    }
    return <>
        <Button type="primary" onClick={() => {
            alert("hello")
        }}>新增</Button>
        <Table 
            dataSource={dataSource}
            columns={columns}
            rowSelection={{
                type: "checkbox",
                onChange:(selectedRowKeys, selectedRows) => {
                    console.log(selectedRowKeys,selectedRows)
                }
            }}

            pagination={{
                onChange: onChange,
                pageSize: pageSize,
                pageSizeOptions: [10,20,30,40],
                total: total,
                showSizeChanger: true
            }} 
        />
    </>
}