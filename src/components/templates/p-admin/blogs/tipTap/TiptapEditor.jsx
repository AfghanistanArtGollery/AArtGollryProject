'use client'
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
      <div className="d-flex flex-wrap button-group">
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
<h3>"Ethereal Dream" - A Glimpse into the Soul of an Artist</h3>

<h4>Introduction</h4>
<p>In the world of contemporary art, few pieces manage to capture the true essence of human emotion like <em>"Ethereal Dream"</em>. Created by the visionary artist Lila Rose, this abstract painting invites viewers to lose themselves in a swirl of colors and textures. The piece transcends traditional boundaries, offering a narrative of hope, despair, and the beauty of transformation.</p>

<h4>The Creation of "Ethereal Dream"</h4>
<p><em>"Ethereal Dream"</em> was painted over a span of three months in 2023, with each brushstroke conveying the artist's innermost feelings. Using a combination of acrylics and oil paints, Lila Rose crafts a vivid dreamscape that seems to float between reality and fantasy. The artwork’s large dimensions (48 x 60 inches) give it a commanding presence, making it impossible to ignore.</p>
<p>"Art is a journey into the unknown, a way to express the unspoken thoughts that live inside us," says Lila Rose. <em>"Ethereal Dream"</em> is my way of capturing the delicate moment between sleep and awakening — where reality blurs into a dream.</p>

<h4>A Symphony of Colors</h4>
<p>The choice of colors in <em>"Ethereal Dream"</em> is purposeful and deeply emotional. A mix of deep blues, vibrant oranges, and soft purples creates a visual contrast that evokes both calmness and intensity. The use of metallic gold and silver paints highlights the sense of something precious and fleeting. As the viewer’s gaze moves across the canvas, they e.</p>
<p>The color palette in <em>"Ethereal Dream"</em> draws from the artist’s own experiences of transformation. Lila Rose often speaks of how colors can embody different emotions. The deep blues represent introspection, while the vibrant oranges symbolize hope and new beginnings. The silvers and golds are the delicate threads that hold everything together — representi.</p>

<p><em>"Ethereal Dream"</em> also touches on the theme of duality. The soft, flowing lines contrast sharply with bold, jagged strokes, showing the balance between vulnerability and strength. Lila Rose of......</p>



<h2><strong>Conclusion</strong></h2>
<p><em>"Ethereal Dream"</em> is more than just a painting; it’s a journey into the subconscious, an exploration of the self, and a celebration of transformation. Through vibrant colors, abstract forms, and a profound narrative, Lila Rose has created a piece that speaks to the heart, inviting us to embrace the beauty of change and the unknown. As we stand before <em>"Ether</p>

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
      <button onClick={handleSave}>Save Description</button>
    </div>
  );
};

export default RichTextEditor;
