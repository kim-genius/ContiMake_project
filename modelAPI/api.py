# from auth_token import auth_token
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline,StableDiffusionInpaintPipeline
from io import BytesIO
import base64
import PIL
import numpy as np

from typing import Optional
from pydantic import BaseModel
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

device = "cuda"
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1",
    torch_dtype=torch.float32
).to(device)

@app.get("/")
def generate(prompt: str):
    with autocast(device):
        image = pipe(prompt, guidance_scale=8.5).images[0]
    image.save("testimage.png")
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    imgstr = base64.b64encode(buffer.getvalue())
    result = imgstr.decode('ascii')

    return Response(content=result, media_type="text/plain")


pipe2 = StableDiffusionInpaintPipeline.from_pretrained(
    "runwayml/stable-diffusion-inpainting", torch_dtype=torch.float16
).to(device)

class Item(BaseModel):
    edited_prompt : str
    mask_data : str
    image_data : str

# inpainting 기능
@app.post('/inpainting')
def inpainting(item: Item):

    
    init_image = PIL.Image.open(BytesIO(base64.b64decode(item.image_data))).resize((512,512))
    
    try :
        decode_mask = base64.b64decode(item.mask_data)
        bytes_mask = BytesIO(decode_mask)
        open_mask_image = PIL.Image.open(bytes_mask).resize((512,512))
        rgb_image = PIL.Image.new("RGB", open_mask_image.size, (255,255,255))
        rgb_image.paste(open_mask_image, (0, 0), open_mask_image)
        rgb_image.save('rgb_image.png')
        print('이미지가 성공적으로 저장됨')
    except Exception as e:
        print(f"Base64 decode Error: {e}")

    mask_image = PIL.ImageOps.invert(rgb_image)
    mask_image.save('test_mask.png')
    init_arr = np.array(init_image)
    mask_arr = np.array(rgb_image)
    print("init",init_arr.shape)
    print("mask_image",mask_arr.shape)
    with autocast(device):
        inpainting_image = pipe2(prompt = item.edited_prompt, image = init_image, mask_image = mask_image).images[0]
        inpainting_image.save("test_inpainting.png")
        buffer = BytesIO() 
        inpainting_image.save(buffer, format="PNG")
        imgstr = base64.b64encode(buffer.getvalue())
        result = imgstr.decode('ascii')

    return Response(content=result, media_type="text/plain")


    

