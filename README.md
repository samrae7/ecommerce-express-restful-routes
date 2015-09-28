# Express RESTful controller hw

## Introduction

Practice makes perfect!  Imagine you work at an ECommerce site, and your boss is looking to build an internal API - that designers will eventually build on top of - to help track orders. To do this, you'll create another API using Express and Mongoose with nested documents.

## Exercise

#### Requirements


- Use Express and Body-parser.
- Use Moongoose and create:
  - A Model User
    - Name(String)
    - Gender(String)
    - Dob(Date)
  - A Model product
    - Name(String)
    - Price(Float)
    - Description(String)
  - A Model Order
    - Price(String)
    - CreatedAt(Date)
    - Adress(Object)
      - Street(String)
      - Postcode(String)
      - Town(String)
      - Country(String)
    - Products(Array of Product references)
    - User(Embedded User)
- Each resource should have a corresponding controller. For each resource, you should be able to reach the 5 routes (index, show, create, update and delete) INSOMNIA
- Each controller should be in a separate file.


**Bonus:**

- Create another resource address and reference it inside order instead of using nested
- Add validations to the schema and return the error message when validation fails

## Additional Resources

- [Express JS documentation](http://expressjs.com/api.html)
- [Mongoosejs documentation](http://mongoosejs.com/docs/api.html)