package passta.paas_ta_back.web.aws;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import passta.paas_ta_back.domain.UploadFile;

@RestController
@RequiredArgsConstructor
public class FtpController {

    private final FileUploadService fileUploadService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestPart MultipartFile file){
        UploadFile uploadFile = fileUploadService.uploadImage(file);
        return ResponseEntity.ok(uploadFile.toString());
    }


}
