import React, { useCallback, useEffect, useState } from "react";
import io from "socket.io-client";
import { VideoCall } from "./web/VideoCall";
import Typography from '@material-ui/core/Typography';
import AppForm from '../modules/views/AppForm';

const socket = io.connect("http://localhost:3001");
const session = JSON.parse(window.sessionStorage.getItem("data"));
const session_store = JSON.parse(window.sessionStorage.getItem("store_data"));
console.log(session_store)

//socket.emit("init", { name: session.data.name });
function Chat() {
  const [room, setRoom] = useState("");
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: session.data.name, message: "" });
  useEffect(() => {
    setRoom(1)
  }, []);
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
    socket.emit("send message", { name: session.data.name, message: chat.message });
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);
  const changeMessage = useCallback(
    (e) => {
      setChat({ message: e.target.value });
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
      <AppForm>
        <React.Fragment>
          <Typography style={{
            fontSize: 45,
            textAlign: 'center',
          }}
           align="center">
            {session_store.store_data}
          </Typography>
        </React.Fragment>
        <VideoCall />
        <Typography
          style={{
            fontSize: 23,
            textAlign: 'center',
          }}>
          &nbsp;&nbsp;&nbsp;&nbsp;나
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          사장님</Typography>
        <div style={{
          float: 'left'
        }}>
          <Typography
            style={{
              fontSize: 25
            }}
            align="left">
            채팅창
          </Typography>
        </div>
        <br />
        <div
          style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
          }}
        >
          <span style={{ background: "#fff", }}></span>
        </div>
        <h style={{
          fontSize: 15,
          color: 'blue'
        }}>[알림] 안녕하세요. 자유롭게 비대면 쇼핑을 즐겨보세요!!</h>
        <br />
        <div className="App">
          <div className="Box">
            <div className="ChatBox">
              {chatArr.map((ele) => (
                <div className="Chat"
                  style={{
                    fontSize: 23,
                    color: 'blue'
                  }}
                >
                  <div>{ele.name} : {ele.message}</div>
                  {/* <div className="ChatLog">{ele.message}</div> */}
                </div>
              ))}
            </div>
            <br />
            <br />
            <div className="InputBox">
              {/* <input placeholder="이름" onChange={changeName}></input> */}
              <input
                placeholder="내용을 입력해주세요."
                style={{
                  fontSize: 23,
                  padding: 20,
                  width: 475,
                  height: 40,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                onChange={changeMessage}
              />
              <button
                style={{
                  fontSize: 25,
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                onClick={buttonHandler}>✍</button>
              {/* <input placeholder="내용" onChange={changeMessage}></input> */}
            </div>
          </div>
        </div>
      </AppForm>
    </React.Fragment>
  );
              }
export default Chat;