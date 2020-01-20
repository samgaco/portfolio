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
        url: "https://github.com/samgaco/gotalk"
    )
Project.create(
        name: "Private events",
        description: "A practical demonstration and implementation of association with rails. This project is designed to mimic the logic behind Eventbrite.",
        img:  "https://user-images.githubusercontent.com/34820784/63966657-04750e80-ca9c-11e9-9f20-a8f3e4bbf658.gif",
        url: "https://github.com/Forison/private-events"
    )