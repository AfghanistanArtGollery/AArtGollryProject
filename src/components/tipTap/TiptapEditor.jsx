// TiptapEditor.js
"use client";

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./richTextEditor.module.css";

import {
  BiBold,
  BiItalic,
  BiUnderline,
  BiLink,
  BiUnlink,
} from "react-icons/bi";
import { AiOutlineOrderedList, AiOutlineUnorderedList } from "react-icons/ai";
import { FiType } from "react-icons/fi";



const TiptapEditor = ({ onSave }) => {
    const [content, setContent] = useState("");
  
    const editor = useEditor({
      extensions: [
        StarterKit,
        Bold,
        Italic,
        Underline,
        Heading.configure({ levels: [1, 2, 3] }),
        Link.configure({ openOnClick: false }),
        BulletList,
        OrderedList,
      ],
      content: "",
      onUpdate: ({ editor }) => {
        setContent(editor.getHTML()); // Update content on editor change
      },
    });
  
    const handleSave = () => {
      console.log("Editor Content:", content);
      if (onSave) onSave(content); // Pass content to parent
    };
  
    if (!editor) return null;
  
    return (
      <div className="editor-container">
        <div className="toolbar d-flex flex-row mb-3">
          <button
            className={`icon-btn ${editor.isActive("bold") ? "active" : ""}`}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Bold"
          >
            <BiBold />
          </button>
          <button
            className={`icon-btn ${editor.isActive("italic") ? "active" : ""}`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italic"
          >
            <BiItalic />
          </button>
          <button
            className={`icon-btn ${editor.isActive("underline") ? "active" : ""}`}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            title="Underline"
          >
            <BiUnderline />
          </button>
          <button
            className={`icon-btn ${
              editor.isActive("heading", { level: 1 }) ? "active" : ""
            }`}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            title="Heading 1"
          >
            <FiType />
          </button>
          <button
            className={`icon-btn ${editor.isActive("bulletList") ? "active" : ""}`}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Bullet List"
          >
            <AiOutlineUnorderedList />
          </button>
          <button
            className={`icon-btn ${editor.isActive("orderedList") ? "active" : ""}`}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Ordered List"
          >
            <AiOutlineOrderedList />
          </button>
          <button
            className={`icon-btn ${editor.isActive("link") ? "active" : ""}`}
            onClick={() => {
              const url = prompt("Enter a URL:");
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            title="Link"
          >
            <BiLink />
          </button>
          <button
            className="icon-btn"
            onClick={() => editor.chain().focus().unsetLink().run()}
            title="Unlink"
          >
            <BiUnlink />
          </button>
        </div>
  
        <EditorContent editor={editor} />
  
        <div className="save-button">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    );
  };
  
  export default TiptapEditor;
  