<!-- docker -->

# docker run --name namesql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql:latest --max_connections=1000

# docker ps

# docker exec -it namesql bash

# mysql -uroot -ppassword

<!-- show db -->

# show databases;

<!-- create user -->

# CREATE USER 'haipt'@'%' IDENTIFIED BY 'haiptpass';

<!-- create db -->

# CREATE DATABASE DBTEST;

<!-- rules -->

# GRANT ALL PRIVILEGES ON DBTEST.\* TO 'haipt'@'%';

# FLUSH PRIVILEGES;
