"use client"
import {Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar"
import {Image} from "@nextui-org/image"

const SideBar = () => {
    return <Sidebar>
        <Image
            width={60}
            alt="логотип"
            src="logo.png"
        />
        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>

            <Menu>
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </div>
    </Sidebar>
}

export default SideBar