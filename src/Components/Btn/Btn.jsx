import "./btn.css"

export default function Btn(props){
    return(
        <>
        <button style={props.style}>{props.children}</button>
        </>
    )
}