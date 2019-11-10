const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const port = 3000

const campgrounds = [
    {name: 'hoceima', image: 'https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name: 'rabat', image: 'https://www.appletonmn.com/vertical/Sites/%7B4405B7C1-A469-4999-9BC5-EC3962355392%7D/uploads/campground_(2).jpg'},
    {name: 'tanger', image: 'http://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg'},
    {name: 'tanger', image: 'http://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg'},
    {name: 'tanger', image: 'http://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg'},
    {name: 'tanger', image: 'http://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg'},
    {name: 'tanger', image: 'http://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/cattai-national-park/cattai-campground/cattai-campground-05.jpg'}
]

app.get('/', (req, res) => {
    res.render('landing')
})

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds})
})

app.post('/campgrounds', (req, res) => {
    const name = req.body.name
    const image = req.body.image
    const newCampground = {name: name, image: image}

    campgrounds.push(newCampground)

    res.redirect('/campgrounds')
})

app.get('/campgrounds/new', (req, res) => {
    res.render('new')
})

// app.listen(process.env.PORT, process.env.IP, () => {
//     console.log("yelpcamp server started")
// })

app.listen(port, () => console.log(`yelpcamp app listening on port ${port}!`))

