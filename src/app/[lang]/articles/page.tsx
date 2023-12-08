/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';

import TypographyText from '@/component/elements/Typography';

const Articles = () => {
  // const [formData, setFormData] = useState({
  //   title: 'hello',
  //   description: 'hello',
  //   content: 'hello',
  //   author: 'hello',
  //   tags: 'Finishing',
  //   file: null,
  // });

  // const handleFileChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     file: event.target.files[0],
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formDataToSend = new FormData();
  //   formDataToSend.append('title', formData.title);
  //   formDataToSend.append('description', formData.description);
  //   formDataToSend.append('content', formData.content);
  //   formDataToSend.append('author', formData.author);
  //   // formDataToSend.append('tags', formData.tags);
  //   formDataToSend.append('file', formData.file);

  //   try {
  //     const res = await axios.post(
  //       'http://localhost:8000/posts/create',
  //       formDataToSend,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       },
  //     );

  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Content:
          <input
            type="text"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          File:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form> */}
      <TypographyText tag="p" className="mt-20 text-red-500">
        asdasdd
      </TypographyText>
    </div>
  );
};

export default Articles;
