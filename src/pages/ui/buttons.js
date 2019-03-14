import React,{useState} from 'react'
import {Card,Button,Radio} from 'antd'
import './ui.less'

export default function Buttons(){
    const [loading,setLoading] = useState(true)
    let [size,setSize] = useState('small')

    const handleCloseLoading=()=>{
        setLoading(false)
    }

    const handleChange=(e)=>{
        setSize(size= e.target.value)
    }

    return (
        <div>
            <Card title="基础按钮" className="card-wrap">
                <Button>AntD</Button>
                <Button type="primary">AntD</Button>
                <Button type="dashed">AntD</Button>
                <Button type="danger">AntD</Button>
                <Button disabled>AntD</Button>
            </Card>
            <Card title="图形按钮" className="card-wrap">
                <Button icon="plus">创建</Button>
                <Button icon="edit">编辑</Button>
                <Button icon="delete">删除</Button>
                <Button shape="circle" icon="search"></Button>
                <Button icon="search">搜索</Button>
                <Button type="primary" icon="download">下载</Button>
            </Card>
            <Card title="Loading按钮" className="card-wrap">
                <Button type="primary" loading={loading}>确定</Button>
                <Button type="primary" shape="circle" loading={loading}></Button>
                <Button loading={loading}>点击加载</Button>
                <Button type="primary" onClick={handleCloseLoading}>关闭</Button>
            </Card>
            <Card title="按钮组">
                <Button.Group>
                    <Button icon="left">前进</Button>
                    <Button icon="right">返回</Button>
                </Button.Group>
            </Card>
            <Card title="按钮尺寸" className="card-wrap">
                <Radio.Group value={size} onChange={handleChange}>
                    <Radio value="small">小</Radio>
                    <Radio value="default">中</Radio>
                    <Radio value="large">大</Radio>
                </Radio.Group>
                <Button type="primary" size={size}>AntD</Button>
                <Button size={size}>AntD</Button>
                <Button type="dashed" size={size}>AntD</Button>
            </Card>
        </div>
    );
    
}