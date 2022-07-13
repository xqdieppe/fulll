# Server
- Create a new mysql database named fleet
- Configure the file configuration/mysql.yaml

```
host: 127.0.0.1
port: 3306
user: root
password: password
database: fleet
```

- Generate your TLS Keys and add it to configuration/tls/
- Configure the file configuration/server.yaml

```
https:
  key: tls/key.pem
  cert: tls/cert.pem
  port: 4000 
http:
  port: 3000
```

- Install npm modules (npm install)
- Run the script server/initialize to generate mysql tables
- Run the server: node server/server

# Client

- Configure the file configuration/client.yaml

```
protocol: https
host: 127.0.0.1
port: 4000
```

- Run the example.sh to try if everything is working correctly.
