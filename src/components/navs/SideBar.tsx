import { useState } from 'react'
import { Nav, Collapse } from 'react-bootstrap'
import CollapseButton from './CollapseButton'

function SideBar() {
    const [collapse, setCollapse] = useState(0)

    function changeCollapse(id: number) {
        setCollapse(id === collapse ? 0 : id)
    }
    return (
        <div className='d-inline-flex h-100 side-bar'>
            <Nav defaultActiveKey="/home" variant='dark' className="flex-column bg-dark">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Item onClick={() => changeCollapse(1)}>
                    <CollapseButton title="Collapse" active={collapse === 1} />
                </Nav.Item>
                <Collapse in={collapse === 1}>
                    <div>
                        <Nav.Link>abc</Nav.Link>
                    </div>
                </Collapse>
                <Nav.Item onClick={() => changeCollapse(2)}>
                    <CollapseButton title="Collapse" active={collapse === 2} />
                </Nav.Item>
                <Collapse in={collapse === 2}>
                    <div>
                        <Nav.Link>cba</Nav.Link>
                        <Nav.Link>abc</Nav.Link>
                        <Nav.Link>abc</Nav.Link>
                    </div>
                </Collapse>
            </Nav>
        </div>
    )
}
export default SideBar