import SmartSearch from "@/components/SmartSearch"
import Statistics from "@/components/Statistics"
import {TransactionList }from "@/components/TransactionList"
import Wallet from "@/components/Wallet"

const Console = () => {
    return (
        <div>
            <SmartSearch />
            <Wallet />
            <Statistics />
            <TransactionList/>
        </div>
    )
}

export default Console