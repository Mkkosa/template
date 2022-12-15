import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import When from 'components/utils/When'
import { content } from '.'
import NavCollapse from './components/NavCollapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideBar() {
    const [collapse, setCollapse] = useState(0)

    function changeCollapse(id: number) {
        setCollapse(id === collapse ? 0 : id)
    }

    return (
        <div className='d-inline-block side-bar bg-dark'>
            <div>
                LOGO
            </div>
            <Nav variant='dark' className="flex-column">
                {content.map((navItem, index) =>
                    <div key={index}>
                        <When condition={navItem.items !== undefined}>
                            <NavCollapse 
                                isActive={collapse === index} 
                                navItem={navItem} 
                                changeCollapse={() => changeCollapse(index)} />
                        </When>
                        <When condition={navItem.items === undefined}>
                            <Nav.Link href={navItem.href}><FontAwesomeIcon className='side-bar__nav-item-icon' icon={navItem.icon}/>{navItem.title}</Nav.Link>
                        </When>
                    </div>
                )}
            </Nav>
        </div>
    )
}
export default SideBar