type t = {
  lastModified: int,
  lastModifiedDate: Js.Date.t,
  name: string,
  size: int,
  \"type": string,
}

module FileType = {
  type t = Json | Csv | Xml | Strings | Properties

  let fromMimetype = mimeType =>
    switch mimeType {
    | "application/json" => Some(Json)
    | "text/csv" => Some(Csv)
    | "text/xml" => Some(Xml)
    | _ => None
    }

  let fromExtension = extension =>
    switch extension {
    | ".json" => Some(Json)
    | ".csv" => Some(Csv)
    | ".xml" => Some(Xml)
    | ".strings" => Some(Strings)
    | ".properties" => Some(Properties)
    | _ => None
    }

  let toExtension = (fileType: t) =>
    switch fileType {
    | Json => ".json"
    | Csv => ".csv"
    | Xml => ".xml"
    | Strings => ".strings"
    | Properties => ".properties"
    }
}

module FileResult = {
  type t

  external toString: t => string = "%identity"
}

module Reader = {
  type reader
  type encoding = [#"UTF-8" | #"ISO-8859-1"]
  type target = {result: FileResult.t}
  type event = {target: target}

  @new external make: unit => reader = "FileReader"
  @send external readAsText: (reader, t, encoding) => unit = "readAsText"
  @set external setOnload: (reader, event => unit) => unit = "onload"
}

let fromMouseEvent: ReactEvent.Mouse.t => array<t> = e => {
  (e->ReactEvent.Mouse.nativeEvent)["dataTransfer"]["files"]
}

let getExtension = fileName =>
  fileName->Js.String2.split(".")->Array.copy->Js.Array.pop->Belt.Option.map(ext => "." ++ ext)

let getFileType = (file: t) => {
  let type_ = file.\"type"

  type_->Js.String.length > 0
    ? type_->FileType.fromMimetype
    : file.name->getExtension->Belt.Option.flatMap(FileType.fromExtension)
}

let isJson = (file: t) => file.\"type" === "application/json"

let read = (file: t, ~encoding=#"UTF-8", cb) => {
  let fileReader = Reader.make()
  fileReader->Reader.readAsText(file, encoding)
  fileReader->Reader.setOnload(e => cb(e.target.result))
}

let resultToJson = (result: FileResult.t) =>
  result->FileResult.toString->Js.Json.parseExn->Js.Json.decodeArray
