#/usr/bin/env bash

openapi-generator generate -i https://syberiaos.com:2022/swagger/doc.json -g typescript-fetch -o ./
