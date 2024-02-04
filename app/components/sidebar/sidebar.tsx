"use client"
import {Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar"
import {User} from "@nextui-org/User"
import prisma from "@/lib/prisma"


const SideBar = async () => {
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "tokalina97@mail.ru"
    //     }
    // })

    return <Sidebar>
        <div style={{
            padding: 20
        }}>
            <User
                // name={user.username}
                // description={user.email}
                avatarProps={{
                    src: "avatar.jpg",
                    size: "lg"
                }}
            />
        </div>
        <Menu>
            <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
        </Menu>
    </Sidebar>
}

export default SideBar