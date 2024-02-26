import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header'; 

const EditorComponent = () => {
    const editorRef = useRef(null);
  
    useEffect(() => {
      const editor = new EditorJS({
        placeholder:'Tupe hadithi yako!',
        holder: 'editorjs',
        tools: {
          header: Header,
          
        },
        data: {
          // Initial content if any
        }
      });

      
  
      return () => {
        editor.destroy();
      }
    }, []);
  
    return <div className="w-full" id="editorjs" ref={editorRef} />;
  };
export default EditorComponent;