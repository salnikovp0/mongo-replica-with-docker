admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "pavel", [ "root" , { role: "root", db: "admin" } ] )
