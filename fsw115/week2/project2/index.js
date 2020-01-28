const people = [
    {
            "id": 1,
            "name": "Greedo",
            "height": "173",
            "mass": "74",
            "hair_color": "n/a",
            "skin_color": "green",
            "eye_color": "black",
            "birth_year": "44BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/23/",
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "species": [
                "https://swapi.co/api/species/4/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T17:03:30.334000Z",
            "edited": "2014-12-20T21:17:50.336000Z",
            "url": "https://swapi.co/api/people/15/"
        }
  
] 
const people = [
    {
            "id": 2,
            "name": "Yoda",
            "height": "66",
            "mass": "17",
            "hair_color": "white",
            "skin_color": "green",
            "eye_color": "brown",
            "birth_year": "896BBY",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/28/",
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "species": [
                "https://swapi.co/api/species/6/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-15T12:26:01.042000Z",
            "edited": "2014-12-20T21:17:50.345000Z",
            "url": "https://swapi.co/api/people/20/"
        }
    
]
const people = [
    {
            "id": 3,
            "name": "Watto",
            "height": "137",
            "mass": "unknown",
            "hair_color": "black",
            "skin_color": "blue, grey",
            "eye_color": "yellow",
            "birth_year": "unknown",
            "gender": "male",
            "homeworld": "https://swapi.co/api/planets/34/",
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/"
            ],
            "species": [
                "https://swapi.co/api/species/13/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-19T17:48:54.647000Z",
            "edited": "2014-12-20T21:17:50.395000Z",
            "url": "https://swapi.co/api/people/40/"
        }
    
]

document.getElementById("list").value = people

let first = people[1]
let second = people[2]
let third = people[3]
