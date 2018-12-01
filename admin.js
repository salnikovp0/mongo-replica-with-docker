admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "pavel",
    pwd: "pavelPassword2017",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("pavel", "pavelPassword2017" )

db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "replicaAdminPassword2017",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
