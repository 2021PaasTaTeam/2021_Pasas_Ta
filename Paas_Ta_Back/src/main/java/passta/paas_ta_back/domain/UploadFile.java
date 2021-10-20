package passta.paas_ta_back.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
@Getter
@Embeddable
@NoArgsConstructor
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
}
