import React, { useEffect, useRef, useState } from "react";
import SimplePeer, { Instance, SignalData } from "simple-peer";
import "./Video.scss";
import FormButton from './modules/form/FormButton';

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
      if (payload?.type === "offer") {
        setOfferSignal(payload);
        setConnectionStatus(ConnectionStatus.RECEIVING);
      } else if (payload?.type === "answer") simplePeer?.signal(payload);
    };
  }, [simplePeer]);

  const sendOrAcceptInvitation = (isInitiator: boolean, offer?: SignalData) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
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

  return (
    <div className="web-rtc-page">
      {/* {connectionStatus === null && <button onClick={() => sendOrAcceptInvitation(true)}>사장님 호출하기</button>} */}
      {connectionStatus === null && 
                                    <button onClick={() => sendOrAcceptInvitation(true)} style={{
                                      color: "white",
                                      background: "black",
                                      padding: ".120rem .720rem",
                                      borderRadius: ".25rem",
                                      fontSize: "1rem",
                                      lineHeight: 1.5,
                                  }}>📞 사장님 부르기 📞</button> }
      {connectionStatus === ConnectionStatus.OFFERING && <div className="loader"></div>}
      {connectionStatus === ConnectionStatus.RECEIVING && (
        <button onClick={() => sendOrAcceptInvitation(false, offerSignal)}>ANSWER CALL</button>
      )}
      <br/>
      <div className="video-container">
        <video ref={videoSelf} className="video-block" />
        <video ref={videoCaller} className="video-block" />
      </div>
    </div>
  );
};