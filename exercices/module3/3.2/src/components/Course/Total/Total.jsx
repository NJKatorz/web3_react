const Total = ({ total }) => {
    return (
        <p>Number of exercises {total.reduce((acc, part) => acc + part.exercises, 0)}</p>
    )
}

export default Total;