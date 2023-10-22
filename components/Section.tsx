import HistoryItem from "./StartPage/HistoryItem";

const Section = ({title, children}) => {
    return (
        <div className=" bg-white shadow-xl rounded-lg">
            <div className=" py-1 rounded-t-lg">
                <span className="block text-center  font-primary font-bold px-5 py-0.5 bg-light/80 rounded-xl mx-20 mt-2">{title}</span>
            </div>
            <div className="rounded-b-lg rounded-x-lg px-2 py-3">
                {children}
            </div>
        </div>
    )
}

export default Section