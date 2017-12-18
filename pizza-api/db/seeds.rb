# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pizza.create(name:"Hawaiian")
Pizza.create(name:"Bostonian")
Pizza.create(name:"Meat Lovers")

Topping.create(name: "Ham", pizza_id:1)
Topping.create(name: "Pineapple", pizza_id:1)
Topping.create(name: "Broccoli", pizza_id:2)
Topping.create(name: "Bacon", pizza_id:2)
Topping.create(name: "Ricotta", pizza_id:2)
Topping.create(name: "Pepperoni", pizza_id:3)
Topping.create(name: "Sausage", pizza_id:3)
Topping.create(name: "Meatball", pizza_id:3)
