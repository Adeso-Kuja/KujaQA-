# Page snapshot

```yaml
- main [ref=e4]:
  - generic [ref=e6]:
    - img [ref=e8]
    - generic [ref=e13]:
      - generic [ref=e14]: To use this App you have to be logged in to X.
      - link "Log in" [ref=e15] [cursor=pointer]:
        - /url: /i/flow/login?hide_message=true&redirect_after_login=https%3A%2F%2Ftwitter.com%2Fi%2Foauth2%2Fauthorize%3Fredirect_uri%3Dhttps%253A%252F%252Fkuja.org%252Fauth_oauth%252Ftwitter-signin%26response_type%3Dcode%26client_id%3DbGhnSmdzY3J6TlFmSF9LSWs1QWY6MTpjaQ%26state%3D%257B%2522d%2522%253A%2520%2522test2_odoo%2522%252C%2520%2522p%2522%253A%25205%252C%2520%2522r%2522%253A%2520%2522https%25253A%25252F%25252Fkuja.org%25252Fpartners%25252Fsignup%25252Fstep2%2522%257D%26scope%3Dtweet.read%2520users.read%2520offline.access%2520users.email%26code_challenge%3Dsimple_challenge%26code_challenge_method%3Dplain
        - generic [ref=e18]: Log in
    - generic [ref=e21]:
      - text: Learn more about 3rd party app access in the
      - link "help center" [ref=e22] [cursor=pointer]:
        - /url: https://help.twitter.com/managing-your-account/connect-or-revoke-access-to-third-party-apps
      - text: .
```