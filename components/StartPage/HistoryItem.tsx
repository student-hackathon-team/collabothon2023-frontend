import {FiShoppingBag} from "react-icons/fi";

const HistoryItem = () => (
    <div className="flex items-center px-2 text-dark">
        <span className="text-[#3B9687] font-bold text-lg whitespace-nowrap">9.60 PLN</span>
        <span className="w-full ml-2">ATD Groceries</span>
        <span className="px-2 py-0.5 bg-green-50 border border-accent rounded-2xl text-xs text-primary">
            <FiShoppingBag className="w-4 h-4 text-accent" />
        </span>
    </div>
)

export default HistoryItem