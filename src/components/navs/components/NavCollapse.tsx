import { Collapse, Nav } from "react-bootstrap"
import CollapseButton from "./CollapseButton"

type TProps = {
    isActive: boolean,
    navItem: TNavItem,
    changeCollapse(): void
}

type TNavItem = {
    href?: string,
    title: string,
    items?: TSubNavItem[]
}

type TSubNavItem = {
    href: string,
    title: string
}

function NavCollapse({isActive, navItem, changeCollapse}: TProps) {
    return (
        <>
            <Nav.Item onClick={changeCollapse}>
                <CollapseButton title={navItem.title} active={isActive} />
            </Nav.Item>
            <Collapse in={isActive}>
                <div>
                    {navItem.items?.map((subItem, index) =>
                        <div className='ms-3' key={index}>
                            <Nav.Link href={subItem.href}>{subItem.title}</Nav.Link>
                        </div>
                    )}
                </div>
            </Collapse>
        </>
    )
}

export default NavCollapse