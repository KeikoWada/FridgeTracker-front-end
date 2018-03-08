#!/bin/bash

curl "https://fridgetracker-kw.herokuapp.com/expiration_dates/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
