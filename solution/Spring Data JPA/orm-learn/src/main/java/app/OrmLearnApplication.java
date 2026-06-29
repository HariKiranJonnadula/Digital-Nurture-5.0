package app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        LOGGER.info("Inside main method - starting test operations...");
        
        testGetAllCountries();
        testFindCountryByCode();
        testAddCountry();
        testUpdateCountry();
        testDeleteCountry();

        LOGGER.info("All Spring Data JPA test operations completed!");
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start testGetAllCountries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.info("Retrieved countries count: {}", countries.size());
        LOGGER.debug("Countries list: {}", countries);
        LOGGER.info("End testGetAllCountries");
    }

    private static void testFindCountryByCode() {
        LOGGER.info("Start testFindCountryByCode");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.info("Found Country details: {}", country);
            
            // Testing non-existent code
            try {
                countryService.findCountryByCode("XX");
            } catch (CountryNotFoundException e) {
                LOGGER.info("Expected error verified for code 'XX': {}", e.getMessage());
            }
        } catch (CountryNotFoundException e) {
            LOGGER.error("Failed to find country IN: {}", e.getMessage());
        }
        LOGGER.info("End testFindCountryByCode");
    }

    private static void testAddCountry() {
        LOGGER.info("Start testAddCountry");
        Country newCountry = new Country("KH", "Cambodia");
        countryService.addCountry(newCountry);
        
        try {
            Country verified = countryService.findCountryByCode("KH");
            LOGGER.info("Verified added country: {}", verified);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country insertion verification failed: {}", e.getMessage());
        }
        LOGGER.info("End testAddCountry");
    }

    private static void testUpdateCountry() {
        LOGGER.info("Start testUpdateCountry");
        try {
            countryService.updateCountry("KH", "Kingdom of Cambodia");
            Country updated = countryService.findCountryByCode("KH");
            LOGGER.info("Verified updated country: {}", updated);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country update failed: {}", e.getMessage());
        }
        LOGGER.info("End testUpdateCountry");
    }

    private static void testDeleteCountry() {
        LOGGER.info("Start testDeleteCountry");
        countryService.deleteCountry("KH");
        
        try {
            countryService.findCountryByCode("KH");
            LOGGER.error("Delete verification failed! Country KH still exists.");
        } catch (CountryNotFoundException e) {
            LOGGER.info("Verified deletion: Country KH no longer exists (Exception expected: {})", e.getMessage());
        }
        LOGGER.info("End testDeleteCountry");
    }
}
