package app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringRestLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringRestLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringRestLearnApplication.class, args);
        LOGGER.info("SpringRestLearnApplication started successfully on port 8090!");
        
        displayDate();
    }

    // Hands-on 2: Spring Core - Load SimpleDateFormat from XML
    private static void displayDate() {
        LOGGER.info("Start: Loading SimpleDateFormat from XML configuration context");
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
            SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
            
            String dateStr = "31/12/2018";
            Date parsedDate = format.parse(dateStr);
            
            LOGGER.info("Successfully parsed string date '{}' to Date object: {}", dateStr, parsedDate);
            System.out.println("Parsed Date Result: " + parsedDate);
        } catch (Exception e) {
            LOGGER.error("Failed to parse date using XML SimpleDateFormat bean: {}", e.getMessage());
        }
        LOGGER.info("End: SimpleDateFormat loading finished.");
    }
}
