"use client"

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardComponent = () => {
    return (
        <div style={{ marginLeft: "40px", userSelect: "none" }}>
            <Card style={{ width: '18rem', borderRadius: '40px' }}> {/* Adjust the value of borderRadius to your preference */}
                 <Card.Img variant="top" style={{ borderRadius: '40px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAYFBMVEUAAAD////39/d1dXWwsLCqqqra2toKCgp/f38oKCjT09Pq6urJycnPz8/6+vpycnJUVFSIiIhGRkZOTk4xMTHw8PCfn5/g4OAZGRmQkJBkZGQhISE/Pz8UFBTCwsJfX19UFM9oAAABTUlEQVR4nO3czQqCQABFYR0zNf9Sx9Q0e/+3LF0HXUEJ7dxFqzh8SauGyXHjVNtF3sq9xnVM6HXCiu7eR9L6qlCC3V3LRX1o3shzpsw9OeLyWgr6cm9GutJ0pJF6fiD2PJAgQYIECRIkSJAgQYIECRIkSJAgQYIECfJTdAfIjZ7kuqcP85Nc8fRhQnq2lGaj98vwZdNbHlKumnrfclPRzkj1E91iaY3cq5VcPYYLkMFJ++4aFSn2zsdD+iBBggQJEiRIkCBBggQJEiRIkCBBggQJEuTmSKdIpI1qr0ulnj8j80LaMxAv0Axir9Vy7TZni5nWO+LZIkiQIEGCBAkSJEiQIEGCBAkSJEiQIEGCBLk5svkNctkP+2lmlPs4+r931ZkRigvv41TSrL1Kq9pS6w1ar9zBfZw44aoLSJAgQYIECRIkSJAgQYIE+ffIF/jijRGQ9qVhAAAAAElFTkSuQmCC" />
                <Card.Body>
                    <Card.Title>Side Mirrors</Card.Title>
                    <Card.Text>
                      Product OEM:5956
                    </Card.Text>
                    <Button variant="success" style={{ marginLeft: "100px" }}>View all products</Button>
                </Card.Body>
            </Card>
        </div>
    )
}



