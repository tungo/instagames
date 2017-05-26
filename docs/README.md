# Instagames

[Instagames Live on Heroku][heroku]

[Project Management on Trello][trello]

[heroku]: http://instagames.ninja/
[trello]: https://trello.com/b/JdRil0Mc/instagames

## Minimum Viable Product

Instagames is a web application inspired by Instagram designed for gamers.
It is built using Ruby on Rails and React/Redux.

It will be implemented the following features:
- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [x] Post photos
- [x] Like photos
- [x] Commenting on photos
- [x] Following & Photo feed
- [x] Infinite Scroll
- [x] Production README

## Design Docs

* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Back-End setup and Front-End User Authentication (2 days)

**Objective:** Functioning Rails project with Front-End Authentication.


### Phase 2: Photos Model, API, and components (2 days)

**Objective:** Photos can be created and destroyed through the API.
Display photos on feed and profile.


### Phase 3: Like photo (1 day)

**Objective:** Like and unlike photo. Display number of likes on photos.


### Phase 4: Commenting on photos (1 day)

**Objective:** Comment and display comments on photos.


### Phase 5: Following and Photo feed (1 day)

**Objective:** User can follow other user to feed photo. Show follower
and following on profile.


### Phase 6: Infinite scroll (1 day)

**Objective:** View more photos with infinite scroll.


### Bonus Features (TBD)
- [ ] Hashtags for photos
- [ ] Search photos by hashtags
- [ ] Direct messaging
- [ ] Notifications
