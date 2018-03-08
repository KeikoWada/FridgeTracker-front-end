#!/bin/bash

curl "https://fridgetracker-kw.herokuapp.com/expiration_dates/${ID}" \
  --include \
  --request PATCH \
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
