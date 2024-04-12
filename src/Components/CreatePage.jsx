// import React from 'react'

// export default function CreatePage() {
//   return (
//     <div className='grid-item main'>
//     <form>
//     <h1>Name of page</h1>
//     <input type='text' />
//     <h3>Description of page</h3>
//     <input type='text' />

//     </form>
//     </div>
//   )
// }
import React from 'react';

export default function CreatePage({ addPost }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: event.target.title.value,
      description: event.target.description.value,
      // handle file here
    };
    addPost(newPost);
  };

  return (
    <div className='grid-item main'>
      <h2>Create a new page</h2>
      <form id='create_form' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title of page</label>
        <input type='text' id='title' placeholder='enter your title'/>
        <label htmlFor="description">Description of page</label>
        <textarea name="description" id="description" cols="30" rows="10" placeholder="Start Writting your blog here.."></textarea>
        <label htmlFor="file">File</label>
        <input type="file" id="file" accept=".png, .jpg, .jpeg, .xls, .xlsx, .pdf, .doc, .docx"/>
        <button type="submit" id='createbtn'>Create</button>
      </form>
    </div>
  );
}