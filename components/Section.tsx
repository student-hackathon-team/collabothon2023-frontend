import HistoryItem from "./StartPage/HistoryItem";

const Section = ({title, children}) => {
    return (
        <div className="">
            <div className="border-t border-x border-primary py-1 rounded-t-lg bg-primary">
                <span className="block text-center text-accent font-primary">{title}</span>
            </div>
            <div className="bg-light rounded-b-lg rounded-x-lg px-2 py-3">
                {children}
            </div>
        </div>
    )
}

export default Section