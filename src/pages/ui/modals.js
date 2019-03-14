import React from 'react'
import {Button,Card} from 'antd'
export default function Modals(){

    return(
        <div>
            <Card title="基础模态框" className="card-wrap">
                <Button type="primary">Opren</Button>
                <Button>自定义页脚</Button>
                <Button>顶部20px弹框</Button>
                <Button>水平垂直居中</Button>
            </Card>
        </div>
    )
}