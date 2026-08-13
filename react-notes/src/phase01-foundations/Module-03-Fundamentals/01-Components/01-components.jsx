export function ButtonComponent() {
    return <button>Clicks</button>
}

export function InputComp() {
    return <input type="text" placeholder="Enter name" />
}
function CardCompo() {
    return (
        <div>
            <p style={{color:'red'}}>Card Component</p>
            {/* <ButtonComponent/>
            <InputComp/> */}
        </div>
    )
    
}
export default CardCompo;