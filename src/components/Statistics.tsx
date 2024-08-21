import { MonthRevenue } from "./charts/MonthRevenue"

const Statistics = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <MonthRevenue />
                <MonthRevenue />
                <div className="col-span-2 h-60">

                <MonthRevenue />
                </div>
            </div>
        </div>
    )
}

export default Statistics