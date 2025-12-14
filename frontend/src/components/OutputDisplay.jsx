import React from "react";

export default function OutputDisplay({ output }) {
  return (
    <div>
      {output.text && <div><h3>Generated Text:</h3><p>{output.text}</p></div>}
      {output.image && <div><h3>Generated Image:</h3>
        <img src={`data:image/jpeg;base64,${output.image}`} alt="Generated" />
      </div>}
      {output.audio && <div><h3>Generated Audio:</h3>
        <audio controls src={`data:audio/wav;base64,${output.audio}`} />
      </div>}
    </div>
  );
}
