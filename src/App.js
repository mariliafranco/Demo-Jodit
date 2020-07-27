import React, { Fragment } from "react";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import { Component } from "react";
import Header from "./Components/Header/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  updateContent(value) {
    this.setState({ content: value });
  }

  code = () => {
    return <pre />;
  };

  render() {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <Fragment>
        <Header />
        <div className="buttons">
          <button
            type="button"
            className="button"
            onClick={() => console.log(this.state.content)}
          >
            {" "}
            ENVIAR{" "}
          </button>
        </div>
        <div class="edit-area">
          <JoditEditor
            id="editor"
            value={this.state.content}
            text={this.state.text}
            config={{
              readonly: false,
              width: "1200px",
              height: 600,
              buttons: [
                {
                  name: "paragraph",
                  iconURL:
                    "https://cdn.iconscout.com/icon/free/png-512/h-character-alphabet-letter-32852.png",
                  list: {
                    h2: "Header 1",
                    h4: "Header 2",
                  },
                },
                "|",
                "align",
                "outdent",
                "indent",
                "|",
                "bold",
                "italic",
                "underline",
                "source",
                "|",
                "image",
                "table",
                "ul",
                "ol",
                "link",
                "|"
              ],
              toolbarButtonSize: "middle",
              style: {
                font: "20px Clan Pro",
              },
              extraButtons: [
                {
                  name: "insertCode",
                  iconURL:
                    "https://cdn4.iconfinder.com/data/icons/proglyphs-business-and-office/512/Datetime-512.png",
                  exec: function (editor) {
                    editor.s.insertHTML((new Date).toDateString());
                  },
                },
              ],
            }}
            onBlur={(newContent) => this.updateContent(newContent)}
            onChange={(newContent) => {}}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
