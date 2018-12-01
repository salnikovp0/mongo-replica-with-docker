admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "konimbesin",
    pwd: "konimbesinpass",
    roles: [ { role: "dbOwner", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("konimbesin", "konimbesinpass" )

db.getSiblingDB("admin").createUser(
  {
    user : "replicaAdmin",
    pwd : "replicaAdminPass",
    roles: [ { role : "clusterAdmin", db : "admin" } ]
  }
)
