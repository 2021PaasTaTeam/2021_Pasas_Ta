import React, { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
//socket.emit("init", { name: "jaehoon" });
function App() {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });
  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);
  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);
  const buttonHandler = useCallback(() => {
    socket.emit("send message", { name: chat.name, message: chat.message });
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);
  const changeMessage = useCallback(
    (e) => {
      setChat({ name: chat.name, message: e.target.value });
    },
    [chat]
  );
  const changeName = useCallback(
    (e) => {
      setChat({ name: e.target.value, message: chat.message });
    },
    [chat]
  );
  return (
    <React.Fragment>
      <div className="App">
        <div className="Box">
          <div className="ChatBox">
            {chatArr.map((ele) => (
              <div className="Chat">
                <div>{ele.name} : {ele.message}</div>
                {/* <div className="ChatLog">{ele.message}</div> */}
              </div>
            ))}
          </div>
          <div className="InputBox">
            <input placeholder="이름" onChange={changeName}></input>
            <input placeholder="내용" onChange={changeMessage}></input>
            <button onClick={buttonHandler}>입력하기</button>
          </div>
        </div>
      </div>
      {/* <VideoCall /> */}
    </React.Fragment>
  );
}

export default App;