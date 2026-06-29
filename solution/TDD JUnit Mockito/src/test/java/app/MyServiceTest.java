package app;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class MyServiceTest {
    private ExternalApi mockApi;
    private MyService service;

    @BeforeEach
    public void setUp() {
        System.out.println("[SETUP] Initializing test fixture - creating mocks...");
        // 1. Arrange: Create mock objects
        mockApi = Mockito.mock(ExternalApi.class);
        service = new MyService(mockApi);
    }

    @AfterEach
    public void tearDown() {
        System.out.println("[TEARDOWN] Cleaning up test fixtures...");
        mockApi = null;
        service = null;
    }

    @Test
    public void testMockingAndStubbing() {
        System.out.println("[TEST] Running testMockingAndStubbing...");
        
        // 1. Arrange: Stub the method to return a predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // 2. Act: Call the service method
        String result = service.fetchData();

        // 3. Assert: Verify the result matches our stubbed value (using AAA pattern)
        assertEquals("Mock Data", result, "Service should return the stubbed data.");
    }

    @Test
    public void testVerifyInteraction() {
        System.out.println("[TEST] Running testVerifyInteraction...");
        
        // 1. Arrange: Stub mock
        when(mockApi.getData()).thenReturn("Verified Data");

        // 2. Act: Call the service method
        service.fetchData();

        // 3. Assert: Verify the interaction (that mockApi.getData() was actually called)
        verify(mockApi).getData();
    }
}
