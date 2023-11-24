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

# inpainting 기능
# @app.get('/inpainting')
# def inpainting(prompt, mask_data, image_data):

#     # "data:image/png;base64," 부분을 제외한 Base64 인코딩된 문자열 추출
#     mask_img_base64_string = mask_data.split(",")[1]
#     init_image = PIL.Image.open(BytesIO(base64.b64decode(image_data))).convert("RGB")


#     open_mask_image = PIL.Image.open(BytesIO(base64.b64decode(mask_img_base64_string))).convert("RGB")

#     mask_image = PIL.ImageOps.invert(open_mask_image)
#     open_mask_image.show()
#     mask_image.save('test_mask.png')

#     with autocast(device):
#         inpainting_image = pipe(prompt = prompt, image = init_image, mask_image = open_mask_image).images[0]
#         inpainting_image.save("test_inpainting.png")
#         buffer = BytesIO()
#         inpainting_image.save(buffer, format="PNG")
#         imgstr = base64.b64encode(buffer.getvalue())
#         result = imgstr.decode('ascii')

#     return Response(content=result, media_type="text/plain")

# inpainting 기능
@app.get('/inpainting')
def inpainting(prompt: str, mask_data: str, image_data: str):

    init_image = PIL.Image.open(BytesIO(base64.b64decode(image_data))).convert("RGB")
    print(init_image)

    open_mask_image = PIL.Image.open(BytesIO(base64.b64decode(mask_data))).convert("RGB")

    mask_image = PIL.ImageOps.invert(open_mask_image)
    open_mask_image.show()
    mask_image.save('test_mask.png')

    with autocast(device):
        inpainting_image = pipe2(prompt = prompt, image = init_image, mask_image = mask_image).images[0]
        inpainting_image.save("test_inpainting.png")
        buffer = BytesIO()
        inpainting_image.save(buffer, format="PNG")
        imgstr = base64.b64encode(buffer.getvalue())
        result = imgstr.decode('ascii')

    return Response(content=result, media_type="text/plain")
    
    