// const mongo = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

//------Create Database------
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("mydb");
    let clt = "customers";

    //------Join Collections------
    // dbo.collection("orders")
    //     .aggregate([
    //         {
    //             $lookup: {
    //                 from: "products",
    //                 localField: "product_id",
    //                 foreignField: "_id",
    //                 as: "orderdetails",
    //             },
    //         },
    //     ])
    //     .toArray(function (err, res) {
    //         if (err) throw err;
    //         console.log(JSON.stringify(res));
    //         db.close();
    //     });

    //------Limit the Result------
    // dbo.collection(clt)
    //     .find()
    //     .limit(2)
    //     .toArray(function (err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //         db.close();
    //     });

    //------Update Many------
    // let newData = { $set: { name: "chokchai1", surname: "jamnoi1" } };
    // let where = { name: "chokchai" };

    // dbo.collection(clt).updateMany(where, newData, function (err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    //------updateOne------
    // let newData = { $set: { name: "chokchai", surname: "jamnoi" } };
    // let where = { name: "chokchai3" };

    // dbo.collection(clt).updateOne(where, newData, function (err, res) {
    //     if (err) throw err;
    //     console.log("updated");
    //     db.close();
    // });

    //------Delete Many Document------
    // let q = { name: "chokchai2" };
    // dbo.collection(clt).deleteMany(q, function (err, res) {
    //     if (err) throw err;
    //     console.log(res.deletedCount + "doc deleted");
    //     db.close();
    // });

    //------Delete One Document------
    // let q = { name: "chokchai" };
    // dbo.collection(clt).deleteOne(q, function (err, res) {
    //     if (err) throw err;
    //     console.log("deleted!!");
    //     db.close();
    // });

    //------Sort the Result------
    // let sort = { name: 1 };
    // dbo.collection("customers")
    //     .find()
    //     .sort(sort)
    //     .toArray(function (err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //         db.close();
    //     });

    //------Filter the Result------
    // let query = { name: "chokchai1" };
    // dbo.collection("customers")
    //     .find(query)
    //     .toArray(function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //         db.close();
    //     });

    //------findAll------
    // dbo.collection("customers")
    //     .find({})
    //     .toArray(function (err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //         db.close();
    //     });

    //------findOne------
    // dbo.collection("customers").findOne({}, function (err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    //------insertMany------
    // const myData = [
    //     { _id: 154, name: "Chocolate Heaven" },
    //     { _id: 155, name: "Tasty Lemons" },
    //     { _id: 156, name: "Vanilla Dreams" },
    // ];

    // dbo.collection("products").insertMany(myData, function (err, res) {
    //     if (err) throw err;
    //     console.log("num is doc inserted is " + res.insertedCount);
    //     db.close();
    // });

    //------insertOne------
    // let myData = { _id: 1, product_id: 154, status: 1 };
    // dbo.collection("orders").insertOne(myData, function (err, res) {
    //     if (err) throw err;
    //     console.log("document inserted!");
    //     db.close();
    // });

    //------Create Collection------
    // dbo.createCollection("customers", function (err, res) {
    //     if (err) throw err;
    //     console.log("collection created!!");
    //     db.close();
    // });
});
