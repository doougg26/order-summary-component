import "./text.css"

export default function Text(props){
    return(
        <>
        <p style={props.style}>{props.children}</p>
        </>
    )
}