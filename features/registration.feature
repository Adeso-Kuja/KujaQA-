Feature: Registration feature validation

  Background:
    Given I am on the Kuja homepage
    And I change the language to English

  Scenario: Register as an Individual
    When I choose to register as an individual
    And I click on register with email
    And I enter a new email address and submit
    And I retrieve the OTP and verify my account
    Then I should see individual registration form elements



  Scenario: Register as an Organization
    When I choose to register as an organization
    Then I should see organization registration page elements
