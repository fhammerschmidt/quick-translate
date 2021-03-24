# quick-translate

Translate multiple languages at once in a spreadsheet.

![quick-translate screenshot](https://user-images.githubusercontent.com/18074327/111455239-d4d93600-8715-11eb-8c87-575da0f3cdcb.png)

### Demo

[https://fhammerschmidt.github.io/quick-translate/](https://fhammerschmidt.github.io/quick-translate/)

## Documentation

This web application is specifically tailored to translate a list of language strings to multiple target languages at once.

### Formats

It supports the follwing input file formats

#### Properties

```
Message.hello=Hello
Message.world=World
Some.Message.id=Some message
```

#### Strings

```
"message_hello" = "Hello"
"message_world" = "World"
"some_message_id" = "Some message"
```

#### XML (Android resources strings)

```xml
<resources>
    <string name="message_hello">Hello</string>
    <string name="message_world">World!</string>
    <string name="some_message_id">Some message</string>
</resources>
```

#### JSON

```json
[
  {
    "id": "message.hello",
    "defaultMessage": "Hello"
  },
  {
    "id": "message.world",
    "defaultMessage": "World"
  },
  {
    "id": "some.message.id",
    "defaultMessage": "Some message",
    "description": "View some message"
  }
]
```

which is exactly what [bs-react-intl-extractor](https://github.com/cknitt/bs-react-intl-extractor) yields, for instance.

#### CSV

The app is able to detect CSVs not generated by it. The delimiter is detected automatically, but if you have a description or comments column, it should either say `comments`, `comment` or `description` (case insensitive) to correctly detect it as a description. Also, the first column needs to be the `id` column, does not matter how it is called.

If you happen to import a custom CSV, the same delimiter gets used for subsequent exports. Otherwise it defaults to `;`.

### Workflow

The app has a notion of sources and targets. Basically, the first file you drag and drop into the web app is the source file.

The app takes the `id`s or keys of all entries and puts it into the first column of the spreadsheet (read-only).
In the second column, the values or `defaultMessage`s will appear. If you use a JSON as source, you can show/hide a description column between the first and second columns. Descriptions are hints for the translator about what to keep in mind when translating the corresponding source texts.

Then you can either add a new target column with the button on the right, or drag another (partially) translated file into the app,
which will also appear as another column.

Translation itself must be done manually, but copy & paste (of multiple cells) works pretty well from and to all kinds of spreadsheet applications.
Some of them even provide built-in translation functions.

The app allows to

- export single target languages with the export buttons above every target language column
- export both the source and all target languages at once
- export the whole sheet as-is to CSV
- import the aforementioned CSV again

> **NOTE**: Currently the app state is not stored anywhere, which means a refresh deletes all your data.
> To save your data, use the export/import CSV functionality for now.
