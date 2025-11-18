package com.stifell.billingsoftware.config;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.http.SdkHttpClient;
import software.amazon.awssdk.http.apache.ApacheHttpClient;
import software.amazon.awssdk.http.apache.ProxyConfiguration;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.S3ClientBuilder;

import java.net.URI;
import java.time.Duration;

@Configuration
public class YandexCloudConfig {
    @Value("${yandex.cloud.access.key}")
    private String accessKey;
    @Value("${yandex.cloud.secret.key}")
    private String secretKey;
    @Value("${yandex.cloud.region}")
    private String region;
    @Value("${yandex.cloud.endpoint.url}")
    private String endPointUrl;
    @Value("${proxy.host}")
    private String proxyHost;
    @Value("${proxy.port}")
    private int proxyPort;
    @Value("${proxy.user}")
    private String proxyUser;
    @Value("${proxy.password}")
    private String proxyPassword;

    @Bean
    public S3Client s3Client() {
        S3ClientBuilder builder = S3Client.builder()
                .region(Region.of(region))
                .endpointOverride(URI.create(endPointUrl))
                .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create(accessKey, secretKey)));
        if (StringUtils.hasText(proxyHost) && proxyPort > 0) {
            SdkHttpClient apacheHttpClient = ApacheHttpClient.builder()
                    .proxyConfiguration(ProxyConfiguration.builder()
                            .endpoint(URI.create("http://" + proxyHost + ":" + proxyPort))
                            .username(proxyUser)
                            .password(proxyPassword)
                            .build())
                    .connectionTimeout(Duration.ofSeconds(5))
                    .socketTimeout(Duration.ofSeconds(20))
                    .build();

            builder.httpClient(apacheHttpClient);
        } else {
            builder.httpClient(ApacheHttpClient.create());
        }

        return builder.build();
    }
}
