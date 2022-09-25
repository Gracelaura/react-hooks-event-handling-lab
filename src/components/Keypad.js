// Code Keypad Component Here

function Keypad (){
    function keyPass() {
        console.log("Entering password...")
    }
    return (
        <input onChange={keyPass}
        type="password"
        />
    )
}

export default Keypad;