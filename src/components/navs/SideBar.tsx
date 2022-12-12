import { useState } from 'react'
import { Nav, Collapse, NavLink } from 'react-bootstrap'
import When from '../utils/When'
import CollapseButton from './CollapseButton'
import { content } from '.'

function SideBar() {
    const [collapse, setCollapse] = useState(0)

    function changeCollapse(id: number) {
        setCollapse(id === collapse ? 0 : id)
    }

    return (
        <div className='d-inline-flex h-100 side-bar'>
            <Nav defaultActiveKey="/home" variant='dark' className="flex-column bg-dark">
                {content.map((navItem, index) =>
                    <div key={index}>
                        <When condition={navItem.items !== undefined}>
                            <Nav.Item onClick={() => changeCollapse(index)}>
                                <CollapseButton title="Collapse" active={collapse === index} />
                            </Nav.Item>
                            <Collapse in={collapse === index}>
                                <div>
                                    {navItem.items?.map((subItem, index) =>
                                        <div className='ms-3' key={index}>
                                            <NavLink href={subItem.href}>{subItem.title}</NavLink>
                                        </div>
                                    )}
                                </div>
                            </Collapse>
                        </When>
                        <When condition={navItem.items === undefined}>
                            <Nav.Link href={navItem.href}>{navItem.title}</Nav.Link>
                        </When>
                    </div>
                )}
            </Nav>
        </div>
    )
}
export default SideBar