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

The team was able to work both in pairs and individually, making sure that we were working as efficiently as possible. At some point splitting off into four meant that there were parts of the website that some people on the team were unfamiliar with, and had we more time, I would have discouraged this, but it worked out more or less ok.

## Research and findings

<!-- What did you find out from user testing? -->

From our user testing of a Figma prototype:

- We found out our homepage and our 'Discover'page were too similar, and changed them accordingly.
- We found that users were not immediately aware of the purpose of our app, and so included a call to action on the front page
- That some of the UI was too small and needed to be bigger/more visible

## Project outcomes

<!-- Were your assumptions right or wrong? -->

It's hard to say how right or wrong our assumptions were without having a base of users to test the end product, but I think that we were pretty accurate about our user profiles based on the focus testing we did, so I don't have much of a reason to doubt that our judgement was pretty fair.

## Recommendations and conclusions

<!-- What features would you prioritise to build next? -->
<!-- Was the project a success? -->

We would have liked to build a 'hot 100' list of albums that had had a lot of activity (likes, reviews, listens) on our page. Overall I'm happy with what we were able to achieve and how quickly we were able to build it.

## Software Development Lifecycle stages

### Planning

<!-- What roles did your team take on?
Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2) -->

#### ⏰ Scrum: Sasha

Sasha was initially in charge of planning sprints, unfortunately some personal issues interfered with this task and from then on decisionmaking was shared between the group.

#### ⛑ QA: Cemal

Cemal was in charge of Quality Assurance, making sure to test that the user stories were able to be satisfactorily completed.

#### 🏗 DevOps: Michael

Michael was in charge of Deployment, and decided what we were going to use to build the app, where it was going to be hosted, and ensured that it successfully deployed to Vercel.

#### 🖌 UX: Jihye

Jihye was in charge of User Experience, ensuring that the site was written with the user in mind, and that navigating the website was a logical process.

<!-- Did these roles help your team work effectively?
Outline how teams work effectively to produce software and how to contribute appropriately (K6) -->
<!-- Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6) -->

Separating the roles of the team and making them the responsibility of each member made sure that we never overextended ourselves by worrying too much about each other's roles, so we could focus on our own thing - however we were all happy to work on each others' tasks, as long as the role holder was willing to take point.

### Analysis

<!-- What might be the intended and unintended consequences of building this product? -->

We hoped that on building this product, users would relate to their music consumption a little differently, and be more wary of Spotify's buisiness model. We were conscious of the fact that we might have created a space that could foster gatekeeping or elitism, which was not our goal, and were wary of heaping _another_ social networking site onto users.

### Design

<!-- How did you plan a user experience? -->

We worked on a shared Miro board and planned the most straightforward route through the site to fulfil each user story we came up with. When working on our figma prototype we made sure that each story could be completed with as few clicks as possible, in an intuitive manner.

<!-- What technical decisions did you make?
Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first -->

We decided that

- server-side rendering made sense for all of our API requests
- a relational database was the most appropriate way to store user data that included profiles, albums, album reviews and a users' followers,
- cloud hosting would allow the project to scale up if it took off
- We wanted the product to be as desirable to a user as possible so we worked on the frontend first.

<!-- Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12) -->

We made sure that our Miro board had a tech spec that we could refer back to when we were adding features to our site. We tried to forsee what would be required to (for example) add a user to your 'following' list, what SQL queries were likely to be needed and how the tables would have to reference each other in order to modify/display taht data.

### Implementation/Build

<!-- How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1) -->

We tried wherever possible to ensure that our code was modular and consistently written, to make sure that there were no overlaps or redundancies. We enforced a strict separation of interests within our repository, making sure that everything was sensibly placed.

What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

<!-- How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7) -->

To quickly and efficiently debug issues we ensured wherever possible that we were working in pairs, with one person taking point and writing the code, and the other person watching the other person for typos, and moving around the file structure in live share to find potential conflicts.

### Test

<!-- How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6) -->

We figured out user stories ('I can log in to the app from the homepage', 'I am able to change my profile name and see it on my profile page', etc) that an imaginary user might like to do in the day-to-day usage of our site, and then ran the tests using Cypress. Using TDD practices we rewrote our code until the tests were able to pass.

<!-- Did writing automated tests catch any bugs?
Analyse unit testing results and review the outcomes, correcting errors. (S4) -->

Some of the automated tests we ran on Cypress behaved in a way we did not anticipate: The reason for this is that some routes did not redirect to the intended page: Because the interface was pretty intuitive we never noticed this before testing, as it only took a second to navigate to the correct page, but automated testing meant that a human user wasn't able to compensate for the bad paths.

### Deploy

<!-- Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10) -->

We were impressed with the way that nextjs handled dynamic page creation, as well as the efficiency with which it loaded static props, so we decided to use it, and deploy to Vercel. The continuous integration with Github was also a factor in deciding to use nextjs.

What problems did you encounter during deployment?
Trying to deploy to vercel made us aware of a few errors in our code that weren't apparent in dev builds.

### Maintain

<!-- Is it easy for someone make changes to the codebase?
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2) -->

It is easy to modify parts of the codebase without affecting others, because wherever possible we have tried to build every function or path as a standalone file - this means that if a function had to be changed, it (best case scenario) wouldn't screw up the rest of the codebase.

<!-- Could a new person quickly be onboarded to contribute?
Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3) -->

When Sasha was forced to take some time away from the project, the rest of the team took time to explain the code to her, which was easy to do because it had been written in a straightforward, modular manner.
