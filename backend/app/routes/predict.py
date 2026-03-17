from fastapi import APIRouter
from app.schemas.request_schema import MessageRequest
from app.services.model_service import predict_message

router = APIRouter()

@router.post("/predict",tags=["Models"])
def predict(data: MessageRequest):
    result = predict_message(data.message)
    return result