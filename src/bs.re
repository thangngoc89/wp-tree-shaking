let result =
  "2018-02-25T07:18:40.942Z"
  |> Js.Date.fromString
  |> DateFns.format("DD/MM/YYY");