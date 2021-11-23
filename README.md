# MIXLIST

## Introduction

<!-- What are you building? -->

We're building a social networking site where users can log, rate and review albums.

<!-- Why are you building it? -->

When doing focus testing for our music app we identified a trend in testers - that they had strong emotional connections to albums, but had not listened to an album in a really long time, thanks to spotify's _discover_ algorithm. We decided to build out app as a place where music fans could re-introduce themselves to the idea of long-form music consumption, and the album as an object of auteurial intent.

## Project scope

<!-- What are you not building? -->

We were conscious of _not_ wanting to build a 'best new music' app, or even a music streaming app. We tried to emphasise albums over singles, and shied away from too much emphasis on individual songs. We also wanted to ensure that our site wasn't just a companion app to an existing streaming service (spotify, applemusic, etc) so avoided relying too heavily on eg. the spotify API

<!-- How did you decide what features were important? -->

We took focus group feedback onboard but also made sure that all our decisions on what features to and not to include were strongly focused on a 'music fandom' over 'casual music listener' user experience.

## Project plan

We structured the 3 weeks like so

- Design week
- UI focus
- Database integration.
  Within each day we set ourselves tasks, and tried to focus on building the minimum viable product at all times.
  User research indicated that lots of people expressed at least some dissatisfaction with the way they listened to music compared to pre-streaming, which confirmed our model. We also found that people used widely disparate streaming platforms which informed the decision not to lean too heavily on one API or the other

## Requirement analysis

<!-- How will you ensure your project is accessible to as many users as possible? -->

We have put a strong emphasis on clean, readable UI and straightforward semantic HTML to ensure that the site is accessible to as many users as possible, and can be made sense of by users using a screen reader or other accessibility tools.

<!-- Are there any legal or regulatory requirements you should consider? --> We need to make sure that our use of the last.fm API falls within their acceptable criteria for building an app.

## Project learnings

<!-- Did your team work effectively? -->

<!-- What would you do differently next time? -->

## Research and findings

<!-- What did you find out from user testing? -->

From our user testing of a Figma prototype:

- We found out our homepage and our 'Discover'page were too similar, and changed them accordingly.
- We found that users were not immediately aware of the purpose of our app, and so included a call to action on the front page
- That some of the UI was too small and needed to be bigger/more visible

## Project outcomes

<!-- Were your assumptions right or wrong? -->

## Recommendations and conclusions

<!-- What features would you prioritise to build next? -->
<!-- Was the project a success? -->

## Software Development Lifecycle stages

### Planning

What roles did your team take on?

#### ⏰ Scrum: Sasha

#### ⛑ QA: Cemal

#### 🏗 DevOps: Michael

#### 🖌 UX: Jihye

Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

Did these roles help your team work effectively?
Outline how teams work effectively to produce software and how to contribute appropriately (K6)
Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

### Analysis

What might be the intended and unintended consequences of building this product?

### Design

How did you plan a user experience?
What technical decisions did you make?
Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first
Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

### Implementation/Build

<!-- How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1) -->

We tried wherever possible to ensure that our code was modular and consistently written, to make sure that there were no overlaps or redundancies. We enforced a strict separation of interests within our repository, making sure that everything was sensibly placed.

What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

### Test

<!-- How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6) -->

We figured out user stories ('I can log in to the app from the homepage', 'I am able to change my profile name and see it on my profile page', etc) that an imaginary user might like to do in the day-to-day usage of our site, and then ran the tests using Cypress. Using TTD practices we rewrote our code until the tests were able to pass.

<!-- Did writing automated tests catch any bugs?
Analyse unit testing results and review the outcomes, correcting errors. (S4) -->

Some of the automated tests we ran on Cypress behaved in a way we did not anticipate: The reason for this is that some routes did not redirect to the intended page: Because the interface was pretty intuitive we never noticed this before testing, as it only took a second to navigate to the correct page, but automated testing meant that a human user wasn't able to compensate for the bad paths.

### Deploy

Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

What problems did you encounter during deployment?

### Maintain

Is it easy for someone make changes to the codebase?
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)

<!-- Could a new person quickly be onboarded to contribute?
Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3) -->

When Sasha was forced to take some time away from the project, the rest of the team took time to explain the code to her, which was easy to do because it had been written in a straightforward, modular manner.
