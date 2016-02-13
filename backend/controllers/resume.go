package controllers

import (
	"gainbrain.me/backend/models"
	log "github.com/Sirupsen/logrus"
	"github.com/gin-gonic/gin"
	"gopkg.in/mgo.v2"
	"net/http"
)

type (
	ResumeController struct {
		session *mgo.Session
	}
)

func NewResumeController(s *mgo.Session) *ResumeController {
	return &ResumeController{s}
}

func (rc ResumeController) GetResume(c *gin.Context) {
	session := rc.session.Copy()
	defer session.Close()

	result := models.Resume{}

	resumeCollection := session.DB("gainbrain").C("resume")

	err := resumeCollection.Find(nil).One(&result)
	if err != nil {
		log.Error("Can't get resume from db. Error: %v", err)
		c.JSON(http.StatusNotFound, gin.H{"code": "NOT_FOUND", "message": "Not found"})
		return
	}

	c.JSON(http.StatusOK, result)
}
