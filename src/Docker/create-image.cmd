docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat/app ../..
