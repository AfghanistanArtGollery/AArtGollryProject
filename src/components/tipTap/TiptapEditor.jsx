import React, { useState } from 'react';
import './richTextEditor.module.css';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FaBold, FaItalic, FaStrikethrough, FaHeading, FaListUl, FaListOl, FaBrush, FaEraser } from 'react-icons/fa';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group mb-5">
      <div  className="d-flex flex-wrap button-group">
        {/* Bold Button */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FaBold /> Bold
        </button>

        {/* Italic Button */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FaItalic /> Italic
        </button>

        {/* Strike Button */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <FaStrikethrough /> Strike
        </button>

        {/* Clear Marks Button */}
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          <FaBrush /> Clear marks
        </button>

        {/* Clear Nodes Button */}
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          <FaEraser /> Clear nodes
        </button>

        {/* Heading Level 4 Button */}
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
           H4
        </button>

        {/* Bullet List Button */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaListUl /> Bullet list
        </button>

        {/* Ordered List Button */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FaListOl /> Ordered list
        </button>

        {/* Slate Color Button */}
        <button
          onClick={() => editor.chain().focus().setColor('#4A4E69').run()}
          className={editor.isActive('textStyle', { color: '#4A4E69' }) ? 'is-active' : ''}
        >
          <FaBrush /> Slate Color
        </button>
      </div>







     
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

const initialContent = `

<h2>
  Artwork Title: "Serenity"
</h2>
<p>
  This is a <em>modern</em> artwork titled <strong>"Serenity"</strong> by the renowned artist Mr Mohmmad Nasir. It explores themes of calmness and introspection, featuring abstract shapes and a soothing color palette.
</p>
<ul>
  <li>
    <strong>Medium:</strong> Oil on Canvas
  </li>
  <li>
    <strong>Dimensions:</strong> 36 x 48 inches
  </li>
  <li>
    <strong>Year of Creation:</strong> 2023
  </li>
  <li>
    <strong>Price:</strong> $3,500
  </li>
</ul>
<p>
  The artwork captures the feeling of tranquility, with its soft hues and flowing forms. The artist’s use of space and light invites the viewer to reflect on their own inner peace.
</p>

<p>
  This piece is part of a larger series called "Moments of Calm," which explores various interpretations of serenity through different mediums and techniques.
</p>


`;

const RichTextEditor = ({ onSave }) => {
  const [editorContent, setEditorContent] = useState(initialContent);

  const editor = useEditor({
    extensions,
    content: initialContent,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML(); // Capture the content as HTML
      console.log('Updated Content:', html);
      setEditorContent(html); // Save the content to state
    },
  });

  const handleSave = () => {
    console.log('Saving Content:', editorContent);
    onSave(editorContent); // Pass the content to the parent or API
  };

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={handleSave}>Save Content</button>
    </div>
  );
};

export default RichTextEditor;
