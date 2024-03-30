import { useState } from "react"

const PAGE = {
    SIGN_UP : "SIGN_UP",
    LOG_IN : "LOG_IN"
}
export function Auth() { 
    const [page, setPage] = useState(PAGE.SIGN_UP)
    return (
        <>

        </>
    )
}