package passta.paas_ta_back.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.Hibernate;
import org.hibernate.LobHelper;

import javax.persistence.Embeddable;
import javax.persistence.EntityManager;
import javax.persistence.Lob;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;

@Getter
@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UploadFile {

    // 업로드 된 파일 명
    private String uploadFileName;

    /**
     * 서버에 저장하는 파일명
     * 업로드 된 파일명으로 서버에 저장 시 이름이 중복될 수 있음. 랜덤값으로 만드는 파일 이름
     */
    private String storeFileName;

    public UploadFile(String uploadFileName, String storeFileName) {
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
    }

    @Override
    public String toString() {
        return "UploadFile{" +
                "uploadFileName='" + uploadFileName + '\'' +
                ", storeFileName='" + storeFileName + '\'' +
                '}';
    }
}
