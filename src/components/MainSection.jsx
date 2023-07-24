import GetApi from "./GetApi";

export default function MainSection({ apiUrl }) {
    return (
        <div className="main-section">
            <GetApi apiUrl={ apiUrl }/>
        </div>
    );
}