import React, { useCallback, useEffect, useRef, useState } from "react";
import SimplePeer, { Instance, SignalData } from "simple-peer";
import Typography from '@material-ui/core/Typography';
import AppForm from '../../modules/views/AppForm';
import {ChatContainer} from './Container/ChatContainer';

import "./Video.scss";

enum ConnectionStatus {
  OFFERING,
  RECEIVING,
  CONNECTED,
}
const webSocketConnection = new WebSocket("ws://localhost:8080/videochat");

export const VideoCall = () => {
  const videoSelf = useRef<HTMLVideoElement | null>(null);
  const videoCaller = useRef<HTMLVideoElement | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus | null>(null);
  const [offerSignal, setOfferSignal] = useState<SignalData>();
  const [simplePeer, setSimplePeer] = useState<Instance>();

  useEffect(() => {
    webSocketConnection.onmessage = (message: any) => {
      const payload = JSON.parse(message.data);
      console.log(payload);
      if (payload?.type === "offer") {
        setOfferSignal(payload);
        setConnectionStatus(ConnectionStatus.RECEIVING);
      } else if (payload?.type === "answer") simplePeer?.signal(payload);
    };
  }, [simplePeer]);


  
  const sendOrAcceptInvitation = (isInitiator: boolean, offer?: SignalData) => {
    // if(connectionStatus == 1) {
    //   alert(connectionStatus)
    // }
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((mediaStream) => {
      const video = videoSelf.current;
      video!.srcObject = mediaStream;
      video!.play();

      const sp = new SimplePeer({
        trickle: false,
        initiator: isInitiator,
        stream: mediaStream,
      });

      if (isInitiator) setConnectionStatus(ConnectionStatus.OFFERING);
      else offer && sp.signal(offer);

      sp.on("signal", (data) => webSocketConnection.send(JSON.stringify(data)));
      sp.on("connect", () => setConnectionStatus(ConnectionStatus.CONNECTED));
      sp.on("stream", (stream) => {
        const video = videoCaller.current;
        video!.srcObject = stream;
        video!.play();
      });
      setSimplePeer(sp);
    });
  };

  function test() {
    alert("호출")
  }
  return (
    <AppForm>
    <div className="web-rtc-page">
      {connectionStatus === null && 
                                    <button onClick={() => sendOrAcceptInvitation(true)} style={{
                                      color: "white",
                                      background: "black",
                                      padding: ".120rem .720rem",
                                      borderRadius: ".25rem",
                                      fontSize: "1rem",
                                      lineHeight: 1.5,
                                  }}>📞 비대면 화상 통화 콜 📞</button> }
      {connectionStatus === ConnectionStatus.OFFERING && 
      <div style={{margin:10,backgroundColor:'blue',height:30}}>로딩 중...</div>
}
      { 
      connectionStatus === ConnectionStatus.RECEIVING &&
      ( 
        <div>
        <button onClick={() => sendOrAcceptInvitation(false, offerSignal)}>ANSWER CALL</button>
        <div style={{margin:10,backgroundColor:'red',height:30}}>고객님께서 호출하셨습니다.</div>
        </div>
      )
      }

      <div className="video-container">
        <video ref={videoSelf} className="video-block" />
        <video ref={videoCaller} className="video-block" />
      </div>
    </div>
      <ChatContainer/>
    </AppForm>
  );
};
