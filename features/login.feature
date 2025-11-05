Feature: Login as an individual (via email OTP)
  Scenario: Login with OTP fetched from Mailpit
    Given I am on the Kuja home page
    When I navigate to the Sign In page and choose "Login by email"
    And I submit email "marial.lugare@kuja.org"
    Then I fetch the OTP from Mailpit and verify I am redirected to my profile page