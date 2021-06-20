
export default function  NextbackMessages({setPopmessage,popmessage,message}) {
    return (popmessage)?(
<div className="popup-box" >
        <div className="formDiv shadow-none text-center">
                <p>{message}</p>
                <button className="btn btn-primary" onClick={()=>setPopmessage(!popmessage)}>Close</button>
    </div>
</div>
    ):""
}