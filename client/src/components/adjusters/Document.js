import React from 'react';
const Document = ({document}) =>
    <div className="single-document" key={document.id}>
      <p>This is a document uploaded by an adjuster related to a claim they are working on.</p>
    </div>
export default Document;
