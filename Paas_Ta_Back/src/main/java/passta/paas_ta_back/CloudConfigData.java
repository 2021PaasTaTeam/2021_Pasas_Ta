package passta.paas_ta_back;

import com.mysql.cj.jdbc.Driver;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.cloud.Cloud;
import org.springframework.cloud.CloudFactory;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.cloud.config.java.ServiceScan;
import org.springframework.cloud.context.config.annotation.RefreshScope;
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

    @Value("${spring.datasource.url}")
    private String springDataUrl;

    @Bean(name = "dsMysql")
    @RefreshScope
    @Primary
    public DataSource mysqlDataSource() {
        CloudFactory cloudFactory = new CloudFactory();
        Cloud cloud = cloudFactory.getCloud();
        ServiceInfo serviceInfo = cloud.getServiceInfo(mysqlServiceName);
        System.out.println("cloud=" + serviceInfo);
        System.out.println("urls=" + springDataUrl);
        String serviceId = serviceInfo.getId();
        return cloud.getServiceConnector(serviceId, DataSource.class, null);

    }

    //
    //MySql 서비스 Connection설정
    @Bean(name = "jdbcMysql")
    @Autowired
    public JdbcTemplate mysqlJdbcTemplate(@Qualifier("dsMysql") DataSource dsSlave) {
        return new JdbcTemplate(dsSlave);
    }


//    @Bean(name = "dsMysql")
//    public DataSource dataSource(@Value("${spring.datasource.url}") final String url,
//                                 @Value("${spring.datasource.username}") final String user,
//                                 @Value("${spring.datasource.password}") final String password) {
//
//        System.out.println("url test ="+url);
//        System.out.println("user test ="+user);
//        System.out.println("password test ="+password);
//        return DataSourceBuilder.create()
//                .type(HikariDataSource.class)
//                .driverClassName(Driver.class.getName())
//                .url(url)
//                .username(user)
//                .password(password)
//                .build();
//    }

}
