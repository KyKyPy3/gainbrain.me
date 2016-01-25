package main

import (
	"os"
	"time"

	log "github.com/Sirupsen/logrus"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"

	"gainbrain.me/controllers"
	"gainbrain.me/models"
)

func connectToDB() *mgo.Session {
	session, err := mgo.Dial("mongodb://localhost")
	if err != nil {
		log.Error("Can't connect to mongo instance. Error: %v", err)
		os.Exit(1)
	}

	session.SetMode(mgo.Monotonic, true)

	return session
}

func setupDB() {
	session := connectToDB()

	resumeCollection := session.DB("gainbrain").C("resume")
	resumeCollection.RemoveAll(nil)

	ts := time.Now()

	resume := models.Resume{
		Id:      bson.NewObjectId(),
		Name:    "Roman",
		SurName: "Efremenko",
		Label:   "Web Developer",
		Summary: "Highly motivated IT professional with ten years of diverse experience in the field of Information technology with emphasis on Web Development, including managing dev teams and developing Web-based and stand alone applications.",
		Location: models.Location{
			Country: "Russian Federation",
			City:    "Moscow",
			Address: "Ak. Kapicy street, 22, 16",
		},
		Contacts: []models.Contact{
			models.Contact{
				Type:  "email",
				Value: "roman.efremenko@gmail.com",
			},
			models.Contact{
				Type:  "phone",
				Value: "+7 (925) 859-3266",
			},
		},
		Languages: []models.Language{
			models.Language{
				Name:    "Russian",
				Fluency: "native",
			},
			models.Language{
				Name:    "English",
				Fluency: "technical",
			},
		},
		Skills: []models.Skill{
			models.Skill{
				Name:  "Go Language",
				Level: "Neube",
			},
		},
		Interests: []models.Interest{
			models.Interest{
				Name: "Web",
				Keywords: []string{
					"React",
					"Backbone",
				},
			},
		},
		Education: []models.Education{
			models.Education{
				Institution: "Moscow Institute of Electronics and Mathematics (Technical University)",
				StartDate:   &ts,
			},
		},
	}

	err := resumeCollection.Insert(resume)
	if err != nil {
		log.Error("Can't insert test resume. Error %v", err)
		os.Exit(1)
	}
}

func main() {
	log.Info("Starting server....")
	log.Info("Prepearing DB....")
	setupDB()

	rc := controllers.NewResumeController(connectToDB())

	router := gin.Default()

	router.GET("/resume", rc.GetResume)
	router.Static("/assets", "./assets")

	router.Run(":8080")
}
