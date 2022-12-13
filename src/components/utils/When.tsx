// react components import
import { Fragment } from "react"

type TProps = {
    children: any
    condition: boolean
}

function When({children, condition}:TProps){
    return(
        <Fragment>
            {condition ? children : <></>}
        </Fragment>
    )
}
export default When