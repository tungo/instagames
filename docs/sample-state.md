# Sample State

```js
{
  session: {
    currentUser: {
      id: 1,
      username: "mario"
    },
    errors: []
  },
  photos: {
    3: {
      id: 3,
      username: "mario",
      avatar: "mario_avatar.png",
      url: "mario_bros.png",
      caption: "Best game ever",
      createdAt: "2017-05-07T11:59:59:00",
      uploadedAt: "10 days ago",
      likesCount: 2,
      currentUserLiked: false,
      commentsCount: 2,
      comments: {
        4: {
          id: 4,
          username: "luigi",
          body: "Yes!?!",
          createdAt: "2017-05-08T11:59:59:00"
        },
        5: {
          id: 5,
          username: "toad",
          body: "Help me!",
          createdAt: "2017-05-09T11:59:59:00"
        }
      }
    },
    2: {
      id: 2,
      username: "link",
      avatar: "link_avatar.png",
      url: "zelda_and_link.png",
      caption: "Best friend forever",
      createdAt: "2017-05-05T10:30:05-07:00",
      uploadedAt: "12 days ago",
      likesCount: 3,
      currentUserLiked: true,
      commentsCount: 1,
      comments: {
        3: {
          id: 3,
          username: "mario",
          body: "I love this photo.",
          createdAt: "2017-05-06T11:59:59:00"
        }
      }
    }
  },
  user: {
    id: 1,
    username: "mario",
    name: "Mario",
    bio: "I am a plumber",
    isAvatar: true,
    avatar: "mario_avatar.png",
    followersCount: 3,
    followers: {
      2: {
        id: 2,
        username: 'link',
        name: 'Link',
        avatar: 'link_avatar.png',
        currentUserFollowed: true,
        createdAt: "2017-05-04T11:59:59:00"
      },
      3: {
        id: 3,
        username: 'peach',
        name: 'Peach',
        avatar: 'peach_avatar.png',
        currentUserFollowed: false,
        createdAt: "2017-05-01T11:59:59:00"
      },
      4: {
        id: 4,
        username: 'luigi',
        name: 'Luigi',
        avatar: 'luigi_avatar.png',
        currentUserFollowed: false,
        createdAt: "2017-05-03T11:59:59:00"
      }
    },
    followingsCount: 1,
    following: {
      2: {
        id: 2,
        username: 'link',
        name: 'Link',
        avatar: 'link_avatar.png',
        currentUserFollowed: true,
        createdAt: "2017-05-04T11:59:59:00"
      }
    },
    photos: {
      5: {
        id: 5,
        urlMedium: "super_mash_bros.png",
        createdAt: "2017-05-21T11:59:59:00",
        likesCount: 5,
        commentsCount: 0
      },
      3: {
        id: 3,
        urlMedium: "mario_bros.png",
        createdAt: "2017-05-07T11:59:59:00",
        likesCount: 2,
        commentsCount: 2
      },
      1: {
        id: 1,
        urlMedium: "mario_kart.png",
        createdAt: "2017-05-01T11:59:59:00",
        likesCount: 2,
        commentsCount: 2
      }
    }
  },
  photoDetail: {
    id: 1,
    username: "mario",
    avatar: "mario_avatar.png",
    url: "mario_kart.png",
    urlMedium: "150/150/mario_kart.png",
    caption: "Ace again",
    createdAt: "2017-03-27T09:00:00-07:00",
    uploadedAt: "51 days ago",
    likesCount: 2,
    currentUserLiked: true,
    commentsCount: 2,
    comments: {
      1: {
        id: 1,
        username: "peach",
        body: "I love you.",
        createdAt: "2017-04-01T11:59:59:00"
      },
      2: {
        id: 2,
        username: "mario",
        body: "I love me too.",
        createdAt: "2017-04-02T11:59:59:00"
      }
    }
  },
  errors: {
    photoUpload: [],
    avatarUpload: [],
    accountEdit: ["Username can't be blank"],
    accountPassword: []
  },
  loading: false,
  search: {
    1: {
      id: 1,
      username: "mario",
      usernameShort: "mario",
      name: "Mario",
      avatar: "mario_avatar.png"
    },
    2: {
      id: 2,
      username: "link",
      usernameShort: "link",
      name: "Link",
      avatar: "link_avatar.png"
    },
    4: {
      id: 4,
      username: "luigi",
      usernameShort: "Luigi",
      name: "Luigi",
      avatar: "luigi_avatar.png"
    }
  },
  users: {
    1: {
      id: 1,
      username: "mario",
      name: "Mario",
      avatar: "mario_avatar.png",
      currentUserFollowed: false
    },
    3: {
      id: 3,
      username: 'peach',
      name: 'Peach',
      avatar: 'peach_avatar.png',
      currentUserFollowed: false
    },
    2: {
      id: 2,
      username: "link",
      name: "Link",
      avatar: "link_avatar.png",
      currentUserFollowed: true
    },
    4: {
      id: 4,
      username: "luigi",
      name: "Luigi",
      avatar: "luigi_avatar.png",
      currentUserFollowed: false
    },
    5: {
      id: 5,
      username: "toad",
      name: "Toad",
      avatar: "toad_avatar.png",
      currentUserFollowed: false
    }
  }
}
```
