function NavItem ({content}) {
    return <a className="nav-item {content}" href=""> {content}</a>
}


export default function MainNav() {
    return (
        <div className="main-nav">
            <NavItem content={"home"} /> 
            <NavItem content={"add server"} /> 
            <NavItem content={"manage server"} />  
        </div>
    );
}
