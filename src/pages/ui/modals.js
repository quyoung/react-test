import React, {useState} from 'react'
import {Button,Card,Modal} from 'antd'
export default function Modals(){
    const [show,setShow] = useState({
        modalShow1:false,
        modalShow2:false,
        modalShow3:false,
        modalShow4:false
    })

    const handleOpen=(type)=>{
        setShow({
            //使用useState后，我们修改state必须将整个修改后的state传入去，因为它会直接覆盖之前的state，而不是合并之前state对象
            // ...show, 
            [type]: true //用方括号包住type，是动态设置变量的技巧
        })
    }

    return(
        <div>
            <Card title="基础模态框" className="card-wrap">
                <Button type="primary" onClick={()=>handleOpen('modalShow1')}>Open</Button>
                <Button type="primary">自定义页脚</Button>
                <Button type="primary">顶部20px弹框</Button>
                <Button type="primary">水平垂直居中</Button>
            </Card>
            <Modal title="React" visible={show.modalShow1} onCancel={()=>setShow({
            // ...show,
            modalShow1: false
        })}>

            </Modal>
        </div>
    )
}