import React, { Component } from "react"
import { Breadcrumb, Button, Tabs, Tab } from "react-bootstrap"

import FSInput from './FSInput'
import FSOutput from './FSOutput'
import FSFind from './FSFind'

class FS extends Component{
    render()
    {
        return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                <Breadcrumb.Item active>Сервисный центр</Breadcrumb.Item>
                <Button size="sm">Мастеру</Button><Button size="sm">Статистика</Button>
            </Breadcrumb>
            
            <div className="card border-secondary">
                <Tabs fill 
                defaultActiveKey="input"
                id="FS-tabs">
                    <Tab eventKey="input" title="Прием">
                        <FSInput/>
                    </Tab>
                    <Tab eventKey="output" title="Выдача">
                        <FSOutput/>
                    </Tab>
                    <Tab eventKey="find" title="Поиск">
                        <FSFind/>
                    </Tab>
                </Tabs>
            </div>
        </div>);
    }
}

export default FS;


  
