import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import When from 'components/utils/When'
import { content } from '.'
import NavCollapse from './components/NavCollapse'

function SideBar() {
    const [collapse, setCollapse] = useState(0)

    function changeCollapse(id: number) {
        setCollapse(id === collapse ? 0 : id)
    }

    return (
        <div className='d-inline-flex h-100 side-bar'>
            <Nav variant='dark' className="flex-column bg-dark">
                {content.map((navItem, index) =>
                    <div key={index}>
                        <When condition={navItem.items !== undefined}>
                            <NavCollapse 
                                isActive={collapse === index} 
                                navItem={navItem} 
                                changeCollapse={() => changeCollapse(index)} />
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