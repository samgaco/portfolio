# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Project.create(
        name: "GoTalk!",
        description: "GoTalk! is an application thought as an online language tutoring scheduler. Teachers will be able to sign in an offer their rates while the users can sign into the site and book their favorite teachers.",
        img: "https://raw.githubusercontent.com/samgaco/gotalk/development/docs/images/gotalk2.png",
        url: "https://github.com/samgaco/gotalk",
        livelink: "https://gotalkmyapp.herokuapp.com/"
    )
Project.create(
        name: "Private events",
        description: "A practical demonstration and implementation of association with rails. This project is designed to mimic the logic behind Eventbrite.",
        img:  "https://user-images.githubusercontent.com/34820784/63966657-04750e80-ca9c-11e9-9f20-a8f3e4bbf658.gif",
        url: "https://github.com/Forison/private-events",
        livelink: "https://eventiaproject.herokuapp.com"
    )
Project.create(
        name: "Social Network",
        description: "The technical goals of the project were to be able to emulate some of the functionalities that facebook has implemented, such as allowing the users to have friends in a symmetrical irreflexive way, accept & send friend requests, submit posts and see the posts of their friends and comment on the posts of their friends.",
        img:  "https://raw.githubusercontent.com/samgaco/socialnetwork/master/app/assets/images/main.png",
        url: "https://github.com/samgaco/socialnetwork",
        livelink: "https://pentalingo.herokuapp.com"
    )

Project.create(
    name: "Video stream library",
    description: "The User can puchase either a Movie or a Season and it will have it in its library for two days. The user will be able to see the remaining hours of his purchases in the library. Once an item is expired and not in his library anymore, the user will be able to purchase the same item again, but the user is not going to be able to purchase the same item twice within a two day span.",
    img: "https://raw.githubusercontent.com/samgaco/vidstream/master/docs/images/main.png",
    url: "https://github.com/samgaco/vidstream"
)

Project.create(
    name: "BookStore",
    description: "The purpose of this project is to have a first contact with using redux in a react project.",
    img: "https://raw.githubusercontent.com/wathigo/Bookstore/master/docs/images/main.png",
    url: "https://github.com/wathigo/Bookstore/tree/master",
    livelink: "https://github.com/wathigo/Bookstore"
)