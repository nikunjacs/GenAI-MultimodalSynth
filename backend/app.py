from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from model_handler import generate_multimodal_output

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate")
async def generate(file_text: UploadFile = File(None),
                   file_image: UploadFile = File(None),
                   file_audio: UploadFile = File(None)):
    result = await generate_multimodal_output(file_text, file_image, file_audio)
    return result
