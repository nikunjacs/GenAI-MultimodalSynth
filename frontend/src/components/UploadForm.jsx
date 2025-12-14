import React, { useState } from "react";
import axios from "axios";

export default function UploadForm({ setOutput }) {
  const [textFile, setTextFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (textFile) formData.append("file_text", textFile);
    if (imageFile) formData.append("file_image", imageFile);
    if (audioFile) formData.append("file_audio", audioFile);

    const response = await axios.post("http://localhost:8000/generate", formData);
    setOutput(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".txt" onChange={(e) => setTextFile(e.target.files[0])} />
      <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
      <input type="file" accept="audio/*" onChange={(e) => setAudioFile(e.target.files[0])} />
      <button type="submit">Generate</button>
    </form>
  );
}
