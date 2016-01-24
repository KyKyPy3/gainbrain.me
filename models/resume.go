package resume

import (
	"gopkg.in/mgo.v2/bson"
)

type (
	Resume struct {
		Id      bson.ObjectId `json:"id" bson:"_id"`
		Name    string        `json:"name" bson:"name"`
		SurName string        `json:"surname" bson:"surname"`
	}
)
