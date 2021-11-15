package passta.paas_ta_back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.cloud.Cloud;
import org.springframework.cloud.CloudFactory;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.cloud.config.java.ServiceScan;
import org.springframework.cloud.service.ServiceInfo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;

import javax.sql.DataSource;


@Profile("cloud")
@Configuration
@ServiceScan
public class CloudConfigData extends AbstractCloudConfig {

    @Value("${db.mysql.servicename}")
    private String mysqlServiceName;

    @Bean(name = "dsMysql")
    @Primary
    public DataSource mysqlDataSource() {

        CloudFactory cloudFactory = new CloudFactory();
        Cloud cloud = cloudFactory.getCloud();
        ServiceInfo serviceInfo = cloud.getServiceInfo(mysqlServiceName);
        String serviceId = serviceInfo.getId();
        return cloud.getServiceConnector(serviceId, DataSource.class, null);

    }

    //MySql 서비스 Connection설정
    @Bean(name = "jdbcMysql")
    @Autowired
    public JdbcTemplate mysqlJdbcTemplate(@Qualifier("dsMysql") DataSource dsSlave) {
        return new JdbcTemplate(dsSlave);
    }
}
