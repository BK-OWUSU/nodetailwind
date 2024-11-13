const router = require('express').Router()

const data = [
    {plan: "Start", speed: "5 Mb/s", storage: "15 GB", price: "Free"},
    {plan: "Pro", speed: "25 Mb/s", storage: "25 GB", price: "$24"},
    {plan: "Basic", speed: "10 Mb/s", storage: "20 GB", price: "$10"},
    {plan: "Advanced", speed: "50 Mb/s", storage: "50 GB", price: "$50"},
    {plan: "Premium", speed: "100 Mb/s", storage: "100 GB", price: "$100"},
    {plan: "Ultra", speed: "200 Mb/s", storage: "200 GB", price: "$200"},
    {plan: "Lite", speed: "3 Mb/s", storage: "10 GB", price: "$5"},
    {plan: "Standard", speed: "15 Mb/s", storage: "30 GB", price: "$15"},
    {plan: "Plus", speed: "35 Mb/s", storage: "40 GB", price: "$35"},
    {plan: "Max", speed: "75 Mb/s", storage: "75 GB", price: "$75"},
    {plan: "Economy", speed: "7 Mb/s", storage: "12 GB", price: "$7"},
    {plan: "Business", speed: "150 Mb/s", storage: "150 GB", price: "$150"},
    {plan: "Enterprise", speed: "300 Mb/s", storage: "300 GB", price: "$300"},
    {plan: "Family", speed: "20 Mb/s", storage: "25 GB", price: "$20"},
    {plan: "Student", speed: "10 Mb/s", storage: "15 GB", price: "$8"}
]

router.get('/' , (req , res)=>{
    res.render('index', {data})
})

module.exports  = router