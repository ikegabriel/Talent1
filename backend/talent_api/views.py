from rest_framework.views import APIView
from rest_framework.response import Response

response = "TALENT PLUS"

class GetTalent(APIView):
    def get(self, request):
        response = "TALENT PLUS"
        res = {
            "data": response
        }

        return Response(res, status=200)