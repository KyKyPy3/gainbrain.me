package models

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type (
	Language struct {
		Name    string `json:"name" bson:"name"`
		Fluency string `json:"fluency" bson:"fluency"`
	}

	Skill struct {
		Name  string `json:"name" bson:"name"`
		Level string `json:"level" bson:"level"`
	}

	Work struct {
		Company      string     `json:"company" bson:"company"`
		Website      string     `json:"website" bson:"website"`
		Country      string     `json:"country" bson:"country"`
		City         string     `json:"city" bson:"city"`
		Position     string     `json:"position" bson:"position"`
		Project      string     `json:"project" bson:"project"`
		StartDate    *time.Time `json:"startDate" bson:"endDate"`
		EndDate      *time.Time `json:"endDate" bson:"enddate"`
		Summary      string     `json:"summary" bson:"summary"`
		Taks         string     `json:"tasks" bson:"tasks"`
		Achievements string     `json:"achievements" bson:"achievements"`
	}

	Interest struct {
		Name     string   `json:"name" bson:"name"`
		Keywords []string `json:"keywords" bson:"keywords"`
	}

	Contact struct {
		Type  string `json:"type" bson:"type"`
		Value string `json:"value" bson:"value"`
	}

	Location struct {
		Country string `json:"country" bson:"country"`
		City    string `json:"city" bson:"city"`
		Address string `json:"address" bson:"address"`
	}

	Education struct {
		Institution string     `json:"institution" bson:"institution"`
		Faculty     string     `json:"faculty" bson:"faculty"`
		StartDate   *time.Time `json:"startDate" bson:"startDate"`
		EndDate     *time.Time `json:"endDate,omitempty" bson:"endDate,omitempty"`
	}

	Resume struct {
		Id        bson.ObjectId `json:"id" bson:"_id"`
		Name      string        `json:"name" bson:"name"`
		SurName   string        `json:"surname" bson:"surname"`
		Label     string        `json:"label" bson:"label"`
		Summary   string        `json:"summary" bson:"summary"`
		Location  Location      `json:"location" bson:"location"`
		Contacts  []Contact     `json:"contacts" bson:"contacts"`
		Languages []Language    `json:"languages" bson:"languages"`
		Skills    []Skill       `json:"skils" bson:"skils"`
		Interests []Interest    `json:"interests" bson:"interests"`
		Education []Education   `json:"education" bson:"education"`
	}
)
