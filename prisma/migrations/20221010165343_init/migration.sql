-- CreateTable
CREATE TABLE "Customers" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "PhoneNo" INTEGER NOT NULL,
    "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Orders" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "CustomerId" TEXT NOT NULL,
    "TotalAmount" INTEGER NOT NULL,
    "Status" TEXT NOT NULL,
    "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" DATETIME NOT NULL,
    CONSTRAINT "Orders_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customers" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recipes" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "OrderId" TEXT NOT NULL,
    "Name" TEXT,
    "Topings" TEXT NOT NULL,
    "Price" REAL NOT NULL,
    "IsSignature" BOOLEAN NOT NULL,
    "CreatedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedOn" DATETIME NOT NULL,
    CONSTRAINT "Recipes_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_PhoneNo_key" ON "Customers"("PhoneNo");
