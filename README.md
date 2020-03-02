# editable-input-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

editable-label-react is a easy and small component Label that you can edit just by clicking.

# how to use:

```
function Demo() {
  const [text, setText] = useState("Click here to edit.");

  return (
    <div>
      <h1>editable-input-react Demo</h1>
      <EditableLabel
        labelClassName="myLabelClass"
        inputClassName="myInputClass"
        inputWidth="200px"
        inputHeight="25px"
        inputMaxLength="50"
        labelFontWeight="bold"
        inputFontWeight="bold"
        value={text}
        onChange={e => setText(e.target.value)}
        onFocus={t => console.log("focus", t)}
        onFocusOut={t => console.log("focus out", t)}
      />
    </div>
  )
}
```

see a example [here](https://codesandbox.io/s/react-editable-label-kuovo)


# component api

| Events        | Description           | return  |
| ------------- |:-------------:| -----:|
| onChange     | a normal event of a input | event object |
| onFocus      | trigged when user clicks       |   a string input value |
| onFocusOut | trigged when user get out focus from component or press enter key      |    a string input value |

| Props        | Description           |
| ------------- |:-------------:|
| labelClassName     | className for label |
| labelFontSize      | size of label font |
| labelFontWeight | weight of label font |
| labelPlaceHolder | placeholder of label |
| inputClassName | className for input |
| inputMaxLength| max length of input|
| inputPlaceHolder | placeholder of input |
| inputTabIndex | tabIndex of input |
| inputWidth | width of input |
| inputHeight | height of input |
| inputFontSize | font size of input |
| inputFontWeight | font weigth of input |
| inputBorderWidth | border width of input |

other props is loading in the next verions...

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
