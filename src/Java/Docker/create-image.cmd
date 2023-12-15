docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t postamat-java/app ../../..
