import Card from "./Card";


function CardList({robots}) {
    const cardComponent = robots.map(user => {
        return (
            <Card key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}/>
        )
    })

    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList