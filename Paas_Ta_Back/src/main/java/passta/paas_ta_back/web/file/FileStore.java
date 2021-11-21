//package passta.paas_ta_back.web.file;
//
//import org.hibernate.Hibernate;
//import org.hibernate.Session;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//import passta.paas_ta_back.domain.UploadFile;
//
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import java.io.File;
//import java.io.IOException;
//import java.io.InputStream;
//import java.sql.Blob;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//@Component
//public class FileStore {
//
//    @Value("${file.dir}")
//    private String fileDir;
//
//    @PersistenceContext
//    private EntityManager em;
//
//    public String getFullPath(String filename) {
//        return fileDir + filename;
//    }
//
//    public List<UploadFile> storeFiles(List<MultipartFile> multipartFiles) throws IOException {
//        List<UploadFile> storeFileResult = new ArrayList<>();
//        for (MultipartFile multipartFile : multipartFiles) {
//            if (!multipartFile.isEmpty()) {
//                storeFileResult.add(storeFile(multipartFile));
//            }
//        }
//        return storeFileResult;
//    }
//
//    public UploadFile storeFile(MultipartFile multipartFile) throws IOException {
//        if (multipartFile.isEmpty()) {
//            return null;
//        }
//
//        String originalFilename = multipartFile.getOriginalFilename();
//        String storeFileName = createStoreFileName(originalFilename);
////        multipartFile.transferTo(new File(getFullPath(storeFileName)));
//        Blob imageBlob = em.unwrap(Session.class).getLobHelper().createBlob(multipartFile.getInputStream(), multipartFile.getSize());
//        System.out.println(originalFilename + "mmmmmmmmmmmm" + storeFileName);
//        System.out.println("image="+imageBlob);
//        return new UploadFile(originalFilename, storeFileName);
//    }
//
//    private String createStoreFileName(String originalFilename) {
//        String ext = extractExt(originalFilename);
//        String uuid = UUID.randomUUID().toString();
//        return uuid + "." + ext;
//    }
//
//    private String extractExt(String originalFilename) {
//        int pos = originalFilename.lastIndexOf(".");
//        return originalFilename.substring(pos + 1);
//    }
//
//
//}
