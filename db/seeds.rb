# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mushroom.destroy_all

Mushroom.create(variety: "Morchella esculenta (Morel)", color: "Brown", usage: "Edible")
Mushroom.create(variety: "Cortinarius cinnamomeus (Cinnamon Cap)", color: "Red/Brown", usage: "Edible")
Mushroom.create(variety: "Psilocybin (Magic Mushroom)", color: "Light Brown", usage: "Psychedelic")
Mushroom.create(variety: "Hydnellum pecki (Bleeding Tooth Fungus)", color: "White and Red", usage: "Scaring your neighbor")
Mushroom.create(variety: "Hericium erinaceus (Lion's Mane)", color: "White", usage: "Medicinal")