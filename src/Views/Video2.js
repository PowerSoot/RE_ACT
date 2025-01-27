import React from "react";

export function Video2() {
  return (
    <>
      {" "}
      <div
        style={{
          padding: "0 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/51467582?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "560px",
            height: "315px",
          }}
        >
          title="Creamfields Chile 2012"
        </iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
