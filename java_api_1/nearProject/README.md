#REST API Wrapper For NEAR RPC Endpoints
This project provides a REST gateway to the NEAR blockchain RPC endpoint.
By following the Adapter Design pattern, this projects provides a restful interface to the RPC endpoint used by the blockchain. This particular project runs on the testnet environment.
#GitHub Repository
https://github.com/CommandLineHQ/leonardra_test
***

#Prerequisites
* JDK 16
* Java 11
* Maven
* PostMan


##Installation

* From your terminal, ```git clone https://github.com/CommandLineHQ/leonardra_test```
* Go to the project directory```cd nearProject```.
###To build
```shell
mvn clean install
```

### To Run
```shell
java -jar ./target/nearProject.jar
```


#Rest API Usage
***

##View Account
> #### P0ST http://localhost:8080/api/v1/near/view-account

#####Example Request
 ```json
{
  "jsonrpc": "2.0",
  "id": "dontcare",
  "method": "query",
  "params": {
    "request_type": "view_account",
    "finality": "final",
    "account_id": "leonardra.testnet"
  }
}
```

##Example Response
####200 OK on successful request

```json
{
  "jsonrpc": "2.0",
  "result": {
    "amount": "194996281413873091100000000",
    "block_hash": "BgN5of5MTPNcYuKZqbs16h2PMQyoRXFbmLA4xh7S6Hgo",
    "block_height": 90024063,
    "code_hash": "11111111111111111111111111111111",
    "locked": "0",
    "storage_paid_at": 0,
    "storage_usage": 428
  },
  "id": "dontcare"
}
```

##View Account Changes
> #### P0ST http://localhost:8080/api/v1/near/view-account-changes

#####Example Request
 ```json
{
  "jsonrpc": "2.0",
  "id": "dontcare",
  "method": "EXPERIMENTAL_changes",
  "params": {
    "changes_type": "account_changes",
    "account_ids": ["leonardra.testnet"],
    "block_id": 90024063
  }
}
```

##Example Response
####200 OK on successful request

```json
{
  "jsonrpc": "2.0",
  "result": {
    "block_hash": "BgN5of5MTPNcYuKZqbs16h2PMQyoRXFbmLA4xh7S6Hgo",
    "changes": []
  },
  "id": "dontcare"
}
```
