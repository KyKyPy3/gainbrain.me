package models

import "gopkg.in/mgo.v2/bson"

type (
	Language struct {
		Language string `json:"language" bson:"language"`
		Fluency  string `json:"fluency" bson:"fluency"`
	}

	Skil struct {
		Name  string `json:"name" bson:"name"`
		Level string `json:"level" bson:"level"`
	}

	Resume struct {
		Id        bson.ObjectId `json:"id" bson:"_id"`
		Name      string        `json:"name" bson:"name"`
		SurName   string        `json:"surname" bson:"surname"`
		Languages []Language    `json:"languages" bson:"languages"`
		Skils     []Skil        `json:"skils" bson:"skils"`
	}
)
