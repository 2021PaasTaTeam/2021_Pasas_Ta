import * as React from "react";
import "./ChatPresenter.scss";
import { Button, Input } from "antd";
import { message } from "../Container/ChatContainer";
import Typography from '@material-ui/core/Typography';
import AppForm from '../../../modules/views/AppForm';

const session = JSON.parse(sessionStorage.getItem("data") || '{}');

type ChatPresenterProps = {
  contents: Array<message>;
  message: string;
  username: string;
  setMessage: Function;
  setUsername: Function;
  handleEnter: Function;
};

export const ChatPresenter = ({
  contents,
  message,
  username,
  setMessage,
  setUsername,
  handleEnter,
}: ChatPresenterProps) => {
  return (
    <div>
      <AppForm>
      <div style={{
          fontSize: 17,
          color: 'blue'
        }}>[온누리 시스템 알림] 안녕하세요. 자유롭게 비대면 쇼핑을 즐겨보세요!!</div>
        <div className={"contents"}>
          {contents.map((message) => (
            <div> {session.data.name} : {message.content} </div>
          ))}
        </div>
        <br />
        <br/>
        <br/>
        <br/>
        <div>
          <Input.Search
          placeholder="내용을 입력해주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onSearch={(value) => handleEnter(username,value)}
          enterButton={"전송"}
        />
        </div>
      </AppForm>
    </div>
  );
};
