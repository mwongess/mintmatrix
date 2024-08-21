import SideNav from "@/components/SideNav"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="w-[10%]">
                <SideNav />
            </div>
            <div className="w-[90%]">
                {children}
            </div>
        </div>
    )
}

export default layout