-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customers" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "PhoneNo" TEXT NOT NULL,
    "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" DATETIME NOT NULL
);
INSERT INTO "new_Customers" ("Address", "CreatedOn", "FirstName", "Id", "LastName", "PhoneNo", "UpdatedOn") SELECT "Address", "CreatedOn", "FirstName", "Id", "LastName", "PhoneNo", "UpdatedOn" FROM "Customers";
DROP TABLE "Customers";
ALTER TABLE "new_Customers" RENAME TO "Customers";
CREATE UNIQUE INDEX "Customers_PhoneNo_key" ON "Customers"("PhoneNo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
