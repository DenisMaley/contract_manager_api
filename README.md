# Contract manager REST API #

## Goal ##

+ Create a REST service that serves/consumes data for a List page, 
  a Details page and an Edit page of the contract manager.

## Requirements

* [Node.js][nodejs]

### Running

Install dependencies

```shell script
$ npm install
```

Launch the server

```shell script
$ npm start
```

Then after it's up you can view the [Swagger docs][swagger] where you can try out the endpoints.

Or use curl directly:

List:
```shell script
$ curl --location --request GET 'http://localhost:3000/contracts'
```
List with sorting:
```shell script
$ curl --location --request GET 'http://localhost:3000/contracts?sortBy=currency_code&orderBy=asc'
```
Details:
```shell script
$ curl --location --request GET 'http://localhost:3000/contracts/2'
```
Update details:
```shell script
$ curl --location --request PUT 'http://localhost:3000/contracts/2' \
--header 'Content-Type: application/json' \
--data-raw '{
    "currency_code": "TEST"
}'
```

### Tests

```shell script
$ npm test
```

### To Do

* Add Filtering and pagination
* Add CI/CD
* Add Unit and more integration tests
* Use MongoDB i.o. Mock

[nodejs]: https://nodejs.org/en/download/
[swagger]: http://localhost:3000/api-docs/