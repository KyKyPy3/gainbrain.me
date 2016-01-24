package main

import (
	"net/http"

	"gopkg.in/mgo.v2"

	"gopkg.in/mgo.v2/bson"

	log "github.com/Sirupsen/logrus"
	"github.com/gin-gonic/gin"
)

type (
	// Resume structure
	Resume struct {
		Id   bson.ObjectId `json:"id" bson:"_id"`
		Name string        `json:"name" bson:"name"`
	}
)

func main() {
	log.Info("Starting server....")

	session, err := mgo.Dial("mongodb://localhost")
	if err != nil {
		panic(err)
	}
	defer session.Close()

	session.SetMode(mgo.Monotonic, true)

	route := gin.Default()

	route.GET("/test", func(c *gin.Context) {
		result := Resume{}

		collection := session.DB("gainbrain").C("resume")
		err := collection.Find(nil).One(&result)
		if err != nil {
			panic(err)
		}

		c.JSON(http.StatusOK, result)
	})

	route.Run(":8080")
}
