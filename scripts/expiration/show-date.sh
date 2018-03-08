#!/bin/bash

curl "https://fridgetracker-kw.herokuapp.com/expiration_dates/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
