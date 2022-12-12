import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

type TProp = {
    title: string,
    active: boolean
}

function CollapseButton ({title, active}:TProp) {
    return(
        <div className="d-flex justify-content-between align-items-center side-bar__collapse-button text-secondary">
            <span>{title}</span>
            <FontAwesomeIcon icon={active?faAngleUp:faAngleDown} />
        </div>
    )
}

export default CollapseButton