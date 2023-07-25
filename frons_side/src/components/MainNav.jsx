import ModalOpenButton from "./ModalOpenButton";
function NavItem({ content }) {
    return <a className="nav-item {content}" href=""> {content}</a>
}


export default function MainNav() {
    return (
        <div className="main-nav">
            <ModalOpenButton title={"add server"} />
        </div>
    );
}
