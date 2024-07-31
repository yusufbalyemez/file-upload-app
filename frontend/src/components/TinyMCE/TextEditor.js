import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = () => {
  return (
    <Editor
      apiKey='eq8tw7mevwg6o2x0svh2mrd4dkdblmpwumdmke9kd6f6jm41'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker textcolor color',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough forecolor backcolor | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        language: 'tr', // Dil ayarını Türkçe olarak belirleyin
        language_url: '/langs/tr.js' // Türkçe dil dosyasının URL'si
      }}
      initialValue="TinyMCE'ye Hoşgeldiniz!"
    />
  );
}

export default TextEditor;