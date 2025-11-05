Feature: Grants feature validation

  Scenario: Validate Grants section visibility
    Given I am logged into Kuja and on the dashboard
    When I navigate to "grants" from the dropdown
    Then I should see the grants page

  Scenario: Validate searching unavailable grants
    Given I am logged into Kuja and on the dashboard
    When I navigate to "grants" from the dropdown
    Then I search for grants that does not exist

  Scenario: Validate searching available grants
    Given I am logged into Kuja and on the dashboard
    When I navigate to "grants" from the dropdown
    Then I search for grants that does exists
