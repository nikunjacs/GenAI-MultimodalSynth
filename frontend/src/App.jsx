import React from "react";
import UploadForm from "./components/UploadForm";
import OutputDisplay from "./components/OutputDisplay";

export default function App() {
  const [output, setOutput] = React.useState(null);

  return (
    <div className="container">
      <h1>GenAI Multimodal Synth</h1>
      <UploadForm setOutput={setOutput} />
      {output && <OutputDisplay output={output} />}
    </div>
  );
}
