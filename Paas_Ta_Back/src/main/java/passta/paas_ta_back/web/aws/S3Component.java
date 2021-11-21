package passta.paas_ta_back.web.aws;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Getter
@Setter
//@Profile("aws")
@ConfigurationProperties(prefix = "cloud.aws.s3")
@Component
public class S3Component {
//    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
}
