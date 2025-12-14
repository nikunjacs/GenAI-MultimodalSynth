from PIL import Image
import io
import librosa
import numpy as np

def preprocess_text(text):
    # Example preprocessing
    return text.strip()

def preprocess_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    # Example: resize to 256x256
    image = image.resize((256, 256))
    return image

def preprocess_audio(audio_bytes):
    y, sr = librosa.load(io.BytesIO(audio_bytes), sr=16000)
    return y
