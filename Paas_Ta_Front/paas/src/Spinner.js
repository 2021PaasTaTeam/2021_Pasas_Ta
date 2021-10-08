import React from "react";
import ReactLoading from 'react-loading';

function Loader({ type, color, message }) {
    var name = '창을 닫지 말아주세요.';
    setTimeout(() => {
        //alert('Hi');

    }, 2000);

    return (
        <div class="contentWrap">
            <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white"}}>
                <h2>{message}</h2>
                <h2>{name}</h2>
                <ReactLoading type={type} color={color} height={'80%'} width={'80%'} />
            </div>
        </div>);
}
export default Loader;