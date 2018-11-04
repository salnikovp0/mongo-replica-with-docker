admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "konimbesin", [ "root" , { role: "root", db: "admin" } ] )
