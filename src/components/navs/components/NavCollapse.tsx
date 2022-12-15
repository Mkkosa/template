import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Collapse, Nav } from "react-bootstrap"
import When from "../../utils/When"
import CollapseButton from "./CollapseButton"

type TProps = {
    isActive: boolean,
    navItem: TNavItem,
    changeCollapse(): void
}

type TNavItem = {
    href?: string,
    title: string,
    icon?: any,
    items?: TSubNavItem[]
}

type TSubNavItem = {
    href: string,
    title: string,
    icon?: any
}

function NavCollapse({ isActive, navItem, changeCollapse }: TProps) {
    return (
        <>
            <Nav.Item onClick={changeCollapse}>
                <CollapseButton title={navItem.title} active={isActive} icon={navItem.icon} />
            </Nav.Item>
            <Collapse in={isActive}>
                <div>
                    {navItem.items?.map((subItem, index) =>
                        <div className='ms-3' key={index}>
                            <Nav.Link href={subItem.href}>
                                <When condition={subItem.icon !== undefined}><FontAwesomeIcon className="side-bar__nav-item-sub-item-icon" icon={subItem.icon} /></When>
                                {subItem.title}
                            </Nav.Link>
                        </div>
                    )}
                </div>
            </Collapse>
        </>
    )
}

export default NavCollapse