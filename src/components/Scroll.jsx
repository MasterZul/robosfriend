import CardList from "./CardList";

function Scroll({children}) {
    // console.log(children)
   // const theChildren = children.find(({ type }) => type === CardList)
    return (
        <div style={{overflowY: 'scroll', border: '0px solid black', height: '800px'}}>
            {children}
            {/*{theChildren}*/}
        </div>
    )
}

export default Scroll