import React from 'react';

export default function CardGeo() {


  return (
    <div>
      <iframe
        width="410"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.fr/maps/@0.425984,9.4568448,13z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D`}
      ></iframe>
    </div>
  );
}
