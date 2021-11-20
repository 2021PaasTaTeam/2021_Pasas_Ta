package passta.paas_ta_back.cam;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Slf4j
@Component
public class SocketHandler extends TextWebSocketHandler {

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        log.info("est_session={}", session);
        sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        log.info("closed_session={}", session);
        log.info("status_session={}", session);
        sessions.remove(session);
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message)
            throws IOException {
        for (WebSocketSession webSocketSession : sessions) {
            if (!session.equals(webSocketSession)) {
                log.info("session={}", session);
                log.info("webSocketSession={}", webSocketSession);
                log.info("message={}", message);
                webSocketSession.sendMessage(message);
            }
        }
    }
}
