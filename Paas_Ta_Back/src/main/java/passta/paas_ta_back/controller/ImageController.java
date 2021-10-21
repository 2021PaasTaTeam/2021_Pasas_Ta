package passta.paas_ta_back.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.*;
import passta.paas_ta_back.web.file.FileStore;

import java.net.MalformedURLException;

@Slf4j
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class ImageController {

    private final FileStore fileStore;

    @ResponseBody
    @GetMapping("/images/{filename}")
    public Resource downloadImage(@PathVariable String filename) throws MalformedURLException {
        log.info("resource = {}", "file:" + fileStore.getFullPath(filename));
        return new UrlResource("file:" + fileStore.getFullPath(filename));
    }
}
