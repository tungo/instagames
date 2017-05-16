# Sample State

```js
{
  currentUser: {
    id: 1,
    username: "mario"
  },
  forms: {
    signUp: {
      errors: []
    },
    logIn: {
      errors: []
    },
    uploadPhoto: {
      errors: ["Url can't be blank"]
    }
  },
  photos: {
    3: {
      id: 3,
      username: "mario",
      avatar: "mario_avatar.png",
      photoUrl: "mario_bros.png",
      caption: "Best game ever",
      uploaded_at: "2017-12-31T23:59:59-07:00",
      likesCount: 2,
      comments: [
        {
          id: 4,
          username: "luigi",
          body: "Yes!?!"
        },
        {
          id: 5,
          username: "toad",
          body: "Help me!"
        }
      ]
    },
    2: {
      id: 2,
      username: "link",
      avatar: "link_avatar.png",
      photoUrl: "zelda_and_link.png",
      caption: "Best friend forever",
      uploaded_at: "2017-06-15T10:30:05-07:00",
      likesCount: 3,
      comments: [
        {
          id: 3,
          username: "mario",
          body: "I love this photo."
        }
      ]
    }
  },
  user: {
    id: 1,
    username: "mario",
    name: "Mario",
    avatar: "mario_avatar.png",
    bio: "I am a plumber",
    followersCount: 6,
    followingsCount: 3,
    photos: [
      {
        id: 5,
        photoUrl: "super_mash_bros.png",
        likesCount: 6,
        commentsCount: 0
      },
      {
        id: 3,
        photoUrl: "mario_bros.png",
        likesCount: 2,
        commentsCount: 2
      },
      {
        id: 1,
        photoUrl: "mario_kart.png",
        likesCount: 2,
        commentsCount: 2
      }
    ]
  },
  photo: {
    id: 1,
    username: "mario",
    avatar: "mario_avatar.png",
    photoUrl: "mario_kart.png",
    caption: "Ace again",
    uploaded_at: "2017-03-27T09:00:00-07:00",
    likesCount: 2,
    comments: [
      {
        id: 1,
        username: "peach",
        body: "I love you."
      },
      {
        id: 2,
        username: "mario",
        body: "I love me too."
      }
    ]
  }
}
```
