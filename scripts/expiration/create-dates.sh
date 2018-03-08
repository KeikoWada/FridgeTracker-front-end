#!/bin/bash

API="${API_ORIGIN:-https://fridgetracker-kw.herokuapp.com/}"
URL_PATH="/expiration_dates"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "expiration_date": {
      "date": "'"${DATE}"'",
      "item_name": "'"${ITEM_NAME}"'",
      "category": "'"${CATEGORY}"'"
    }
  }'

echo
