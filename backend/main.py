from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


# This defines what data we expect from the user.
class PromptRequest(BaseModel):
    prompt: str


@app.get("/")
def home():
    return {
        "app": "Prompt2Reel AI",
        "status": "Running"
    }


@app.post("/generate")
def generate_video(request: PromptRequest):
    return {
        "success": True,
        "your_prompt": request.prompt,
        "status": "Generating Video..."
    }