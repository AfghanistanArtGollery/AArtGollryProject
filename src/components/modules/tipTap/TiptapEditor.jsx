'use client';

import React, { useState } from 'react';
import styles from './richTextEditor.module.css';
import classnames from 'classnames'; // Proper classnames import

import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import TextStyle from '@tiptap/extension-text-style';
import ListItem from '@tiptap/extension-list-item';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FaBold, FaItalic, FaStrikethrough, FaHeading, FaListUl, FaListOl, FaBrush, FaEraser, FaLink, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className={styles.menuBar}>
      <div className={styles.buttonGroup}>
       
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive('bold'),
          })}
        >
          <FaBold /> Bold
        </button>

        {/* Italic Button */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive('italic'),
          })}
        >
          <FaItalic /> Italic
        </button>

        {/* Strike Button */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive('strike'),
          })}
        >
          <FaStrikethrough /> Strike
        </button>

        {/* Link Button */}
        <button
          onClick={() => {
            const url = prompt('Enter URL');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive('link'),
          })}
        >
          <FaLink /> Link
        </button>

        {/* Text Alignment */}
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'left' }),
          })}
        >
          <FaAlignLeft /> AlignLeft
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'center' }),
          })}
        >
          <FaAlignCenter /> Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'right' }),
          })}
        >
          <FaAlignRight /> ALRight
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'right' }),
          })}
        >
          H4
        </button>
            {/* Slate Color Button */}
            <button
          onClick={() => editor.chain().focus().setColor('#4A4E69').run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'right' }),
          })}        >
          <FaBrush /> Slate Color
        </button>

        {/* Clear Marks and Nodes */}
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'right' }),
          })}
        >
          <FaBrush /> Clear Marks
        </button>
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className={classnames(styles.button, {
            [styles.active]: editor.isActive({ textAlign: 'right' }),
          })}
        >
          <FaEraser /> Clear Nodes
        </button>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  Link.configure(),
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
];

const RichTextEditor = ({ onSave }) => {
  const [editorContent, setEditorContent] = useState('');
  const [saveMessage, setSaveMessage] = useState('');


  const initialContent = `
  <div class={artwork-container">
    <h2 class="artwork-title">This is a Sample Description</h2>
    <p class="artwork-intro">
      This is a <em>modern</em> artwork titled <strong>"Serenity"</strong> by the renowned artist Mr. Mohmmad Nasir. It explores themes of calmness and introspection, featuring abstract shapes and a soothing color palette.
    </p>
    <ul class="artwork-details">
      <li><strong>Medium:</strong> Oil on Canvas</li>
      <li><strong>Dimensions:</strong> 36 x 48 cm</li>
      <li><strong>Year of Creation:</strong> 2023</li>
      <li><strong>Price:</strong> $3,500</li>
    </ul>
    <p class="artwork-description">
      The artwork captures the feeling of tranquility, with its soft hues and flowing forms. The artist’s use of space and light invites the viewer to reflect on their own inner peace.
    </p>
    <p class="artwork-series">
      This piece is part of a larger series called "Moments of Calm," which explores various interpretations of serenity through different mediums and techniques.
    </p>
  </div>
  `;


  const editor = useEditor({
    extensions,
    content: initialContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });
  
  const handleSave = () => {
    console.log('Saved Content:', editorContent);
    setSaveMessage('Content saved successfully!');
    if (onSave) onSave(editorContent);
    setTimeout(() => setSaveMessage(''), 3000); // Clear save message after 3 seconds
  };

  return (
    <div className={styles.editorContainer}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className={styles.editorContent} />
      <button onClick={handleSave} className={styles.saveButton}>
        Save
      </button>
      {saveMessage && <p className={styles.saveMessage}>{saveMessage}</p>}
    </div>
  );
};

export default RichTextEditor;
