import * as React from 'react';
import withRoot from './modules/withRoot';

function zoom() {
    return (
        <div>
          <title>Zoom WebSDK</title>
          <meta charSet="utf-8" />
          <link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.9.9/css/bootstrap.css" />
          <link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.9.9/css/react-select.css" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <style dangerouslySetInnerHTML={{__html: "\n        .sdk-select {\n            height: 34px;\n            border-radius: 4px;\n        }\n\n        .websdktest button {\n            float: right;\n            margin-left: 5px;\n        }\n\n        #nav-tool {\n            margin-bottom: 0px;\n        }\n\n        #show-test-tool {\n            position: absolute;\n            top: 100px;\n            left: 0;\n            display: block;\n            z-index: 99999;\n        }\n\n        #display_name {\n            width: 250px;\n        }\n\n\n        #websdk-iframe {\n            width: 700px;\n            height: 500px;\n            border: 1px;\n            border-color: red;\n            border-style: dashed;\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            left: 50%;\n            margin: 0;\n        }\n    " }} />
          <nav id="nav-tool" className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Zoom WebSDK</a>
              </div>
              <div id="navbar" className="websdktest">
                <form className="navbar-form navbar-right" id="meeting_form">
                  <div className="form-group">
                    <input type="text" name="display_name" id="display_name" defaultValue="1.9.9#CDN" maxLength={100} placeholder="Name" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="meeting_number" id="meeting_number" defaultValue maxLength={200} style={{width: '150px'}} placeholder="Meeting Number" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="meeting_pwd" id="meeting_pwd" defaultValue style={{width: '150px'}} maxLength={32} placeholder="Meeting Password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="meeting_email" id="meeting_email" defaultValue style={{width: '150px'}} maxLength={32} placeholder="Email option" className="form-control" />
                  </div>
                  <div className="form-group">
                    <select id="meeting_role" className="sdk-select">
                      <option value={0}>Attendee</option>
                      <option value={1}>Host</option>
                      <option value={5}>Assistant</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select id="meeting_china" className="sdk-select">
                      <option value={0}>Global</option>
                      <option value={1}>China</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select id="meeting_lang" className="sdk-select">
                      <option value="en-US">English</option>
                      <option value="de-DE">German Deutsch</option>
                      <option value="es-ES">Spanish Español</option>
                      <option value="fr-FR">French Français</option>
                      <option value="jp-JP">Japanese 日本語</option>
                      <option value="pt-PT">Portuguese Portuguese</option>
                      <option value="ru-RU">Russian Русский</option>
                      <option value="zh-CN">Chinese 简体中文</option>
                      <option value="zh-TW">Chinese 繁体中文</option>
                      <option value="ko-KO">Korean 한국어</option>
                      <option value="vi-VN">Vietnamese Tiếng Việt</option>
                      <option value="it-IT">Italian italiano</option>
                    </select>
                  </div>
                  <input type="hidden" defaultValue id="copy_link_value" />
                  <button type="submit" className="btn btn-primary" id="join_meeting">Join</button>
                  <button type="submit" className="btn btn-primary" id="clear_all">Clear</button>
                  <button type="button" link onclick="window.copyJoinLink('#copy_join_link')" className="btn btn-primary" id="copy_join_link">Copy Direct join link</button>
                </form>
              </div>
              {/*/.navbar-collapse */}
            </div>
          </nav>
          <div id="show-test-tool">
            <button type="submit" className="btn btn-primary" id="show-test-tool-btn" title="show or hide top test tool">Show</button>
          </div>
        </div>
      );
  }

  export default withRoot(zoom);