#!/bin/bash

curl "https://fridgetracker-kw.herokuapp.com/expiration_dates/" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
