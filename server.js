// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });
/************
 * DATABASE *
 ************/

var db = require('./models');

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile({ root: __dirname }, '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    // woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/andreaainara/express_self_api/README.md", // CHANGE ME
    base_url: "https://pumpkin-sundae-78037.herokuapp.com/api", // CHANGE ME
    endpoints: [
    {"/api":
      {
        method: "GET", path: "/api", description: "Andrea's personal API", "produces":
      [
        "application/json"
      ],
      "responses":
      {
        "200":
        {
          "description": "Information about this API and its endpoints",
          "schema":
          {
            "type": "array",
            "items":
            {
              "$ref": "#/api"
            }
          }
        }
      }
    }
  },
    {
      "/profile":
      {
        method: "GET", path: "/api/profile", description: "Some random info about Andrea Ceballos", "produces":
        [
          "application/json"
        ],
        "responses":
        {
          "200":
          {
            "description": "Information about Andrea you didn't think you needed",
            "schema":
            {
              "type": "array",
              "items":
              {
                "$ref": "#/profile"
              }
            }
          }
        }
      }
      },
    {
      "/familymembers":
      {
        method: "GET", path: "/api/familymembers", description: "Andrea's immediate family", "produces":
        [
          "application/json"
        ],
        "responses":
        {
          "200":
          {
            "description": "The short version of my family members",
            "schema":
            {
              "type": "array",
              "items":
              {
                "$ref": "#/familymembers"
              }
            }
          }
        }
      }
    },
    {
      "/favoritebooks":
      {
      method: "POST", path: "/api/favoritebooks", description: "Just a few of my favourite reads...", "produces":
      [
        "application/json"
      ],
      "responses":
      {
        "200":
        {
          "description": "A list of some of my all-time favourite books",
          "schema":
          {
            "type": "array",
            "items":
            {
              "$ref": "#/favoritebooks"
            }
          }
        }
      }
    }
  }
]
  });
});

/**********
 * ROUTES *
 **********/

app.get('/api/profile', function(req,res) {
  db.Andrea.find(function(err, data) {
    if (err) { return console.log("error: ", err);}
    res.json(data);
  });
});

app.get('api/familymembers', function(req, res) {
  db.FamilyMember.find(function(err, familymembers) {
    if (err) { return console.log("error: ", err); }
    res.json(familymembers);
  });
});

app.get('/api/favoritebooks', function(req, res) {
  ds.FavoriteBooks.find(function(err, favoriteBooks) {
    if (err) { return console.log("error: ", err); }
    res.json(favoriteBooks);
  });
});

app.get('/api/favoritebooks', function(req, res){
  //send all books as JSON responses
  db.FavoriteBooks.find()
  .populate('favoriteBooks')
  .exec(function(err, favoriteBooks){
    if(err) {return console.log("index error" + err);}
    res.json(favoriteBooks);
  });
});

// post new profile info
app.post('/api/favoritebooks', function(req, res){
  console.log('create book', req.body);
  var newInfo = req.body;
  db.FavoriteBooks.create(newInfo);
  res.json(newInfo);
});

//UPDATE PLACE
app.put('/api/favoritebooks', function(req, res){
 console.log('update book', req.body);
 db.FavoriteBooks.find()
 .populate('favoriteBooks')
 .exec(function(err, updatedBook){
   if(err){return console.log("Error: ", err);}
   res.json(updatedBook);
 });
});

// DELETE PLACE
app.delete('/api/favoritebooks/:id', function(req, res){
 console.log('deleting ', req.params);
 var bookId = req.params.id;
 db.FavoriteBooks.findOneAndRemove({ _id : bookId }, function(err, deletedBook){
   if(err){return console.log("Error :", err);}
   res.json(deletedBook);
 });
 });

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
