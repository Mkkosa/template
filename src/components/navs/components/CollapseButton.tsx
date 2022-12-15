import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import When from "../../utils/When"

type TProp = {
    title: string,
    active: boolean,
    icon?: any
}

function CollapseButton ({title, active, icon}:TProp) {
    return(
        <div className="d-flex justify-content-between align-items-center side-bar__collapse-button text-secondary m-2 mx-3">
            <div>
                <When condition={icon !== undefined}><FontAwesomeIcon className="side-bar__nav-item-icon" icon={icon} /></When>
            <span>{title}</span>
            </div>
            <FontAwesomeIcon icon={active?faAngleUp:faAngleDown} />
        </div>
    )
}

export default CollapseButton