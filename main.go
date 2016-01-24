package main

import (
	"os"

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

	language := models.Language{
		Language: "Russian",
		Fluency:  "native",
	}

	skil := models.Skil{
		Name:  "Go lang",
		Level: "Neuwbe",
	}

	resume := models.Resume{
		Id:      bson.NewObjectId(),
		Name:    "Test name",
		SurName: "Test surname",
		Languages: []models.Language{
			language,
		},
		Skils: []models.Skil{
			skil,
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
