Feature: Forums feature validation

  Scenario: Validate Forums dashboard elements
    Given I am logged into Kuja and on the dashboard
    When I navigate to "forums" from the dropdown
    Then I should see all expected forums dashboard elements

  Scenario: Validate Create Forum form visibility
    Given I am logged into Kuja and on the dashboard
    When I navigate to "forums" from the dropdown
    And I click on the "Create Forum" button
    Then I should see all create forum form fields
