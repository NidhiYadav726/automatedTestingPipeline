# Automated Testing Pipeline Integration with GitHub Actions

This repository contains multiple automation frameworks configured with GitHub Actions for continuous integration. Below are the steps to clone and run the repository.

## Cloning the Repository

To clone this repository, use the following command:

```bash
git clone https://github.com/NidhiYadav726/automatedTestingPipeline
```

## Running the Repository

### Prerequisites

- Make sure you have Node.js and npm installed.
- Ensure you have Java Development Kit (JDK) installed for running JMeter , Rest Assured & Selenium tests.

### Steps

1. **Install Dependencies**: Navigate to the root of the repository and install the required dependencies for each framework.

    ```bash
    # For Nightwatch
            cd Nightwatch
            npm ci
            sudo apt-get install xvfb
    
    # For Postman
          cd Postman
          npm install -g newman
          npm install -g newman-reporter-htmlextra

    # For Selenium
       mvn clean install
    
    ```

2. **Run Tests**:

    - For Nightwatch tests:
    
        ```bash
        # Navigate to Nightwatch directory
        cd Nightwatch
        
        # Run Nightwatch tests
        npm test
        ```

    - For JMeter tests:
    
        ```bash
        # Navigate to JMeter directory
        cd Jmeter
        
        # Run JMeter tests
        jmeter -n -t performance.jmx -l tests_output/results.jtl
        ```
    
    - For RestAssured tests:
    
        ```bash
        # Navigate to RestAssured directory
        cd RestAssured
        
        # Run RestAssured tests
        mvn clean test
        ```
    
    - For Selenium tests:
    
        ```bash
        # Navigate to Selenium directory
        cd Selenium
        
        # Run Selenium tests
        mvn clean test
        ```
    - For Postman tests:
       ```bash
       # Navigate to Postman directory
       cd Postman

       # Run Postman tests:
        newman run "Rest API CRUD Operations.postmanCollection.json.json" -e "New API Environment.postmanEnvironment.json" -r cli,htmlextra --reporter-htmlextra-export testArtifacts/htmlreport.html
       ```

3. **View Test Results**:

    After running the tests, you can find the test results in respective directories:
    
    - Nightwatch: `Nightwatch/tests_output`
    - JMeter: `Jmeter/result`
    - Postman: ` Postman/testArtifacts`
    - RestAssured:  `RestAssured/target/surefire-reports/crudOperations.Test`
    - Selenium: `Selenium/target/surefire-reports/Test`
