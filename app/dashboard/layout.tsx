import type {PropsWithChildren} from 'react'

const DashboardLayout = ({children}: PropsWithChildren<unknown>) => {
    return <div>
        <h2>Component</h2>
        {children}
    </div>

}

export default DashboardLayout