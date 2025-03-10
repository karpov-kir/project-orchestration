#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" <<-EOSQL
  CREATE DATABASE "word-to-pdf-staging";
  GRANT ALL PRIVILEGES ON DATABASE "word-to-pdf-staging" TO "$POSTGRES_USER";
EOSQL
