package passta.paas_ta_back.domain;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
@Getter
@Embeddable
@NoArgsConstructor
public class UploadFile {

    private String uploadFileName;
    private String storeFileName;



    public UploadFile(String uploadFileName, String storeFileName) {
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
    }
}
