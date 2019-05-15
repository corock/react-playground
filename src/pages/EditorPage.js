import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

// ajax upload
// import { ImageUploader } from 'quill-image-upload';

// 커스텀 라이브러리 등록
// Quill.register('modules/imageUpload', ImageUpload);

class EditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "" }; // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this);
    }

    // contents
    handleChange(value) {
        this.setState({ text: value });
    }

    modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" }
            ],
            ["link", "image"],
            ["clean"]
        ]
    };

    formats = [
        "header",
        "bold", "italic", "underline", "strike", "blockquote",
        "list", "bullet", "indent", "link",
        "image"
    ];

    render() {
        return (
            <div>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.handleChange}
                    theme="snow"
                />
                <h1>bubble</h1>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.handleChange}
                    theme="bubble"
                    modules={this.modules}
                    formats={this.formats}
                />
            </div>
        );
    }
}

export default EditorPage;
