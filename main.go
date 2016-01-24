package main

import (
	"os"

	log "github.com/Sirupsen/logrus"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2"

	controllers "gainbrain.me/controllers"
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

func main() {
	log.Info("Starting server....")

	rc := controllers.NewResumeController(connectToDB())

	route := gin.Default()

	route.GET("/resume", rc.GetResume)

	route.Run(":8080")
}
