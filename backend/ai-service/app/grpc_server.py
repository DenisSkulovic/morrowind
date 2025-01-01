from concurrent import futures
import grpc
import character_pb2_grpc

class CharacterDialogueServicer(character_pb2_grpc.CharacterDialogueServicer):
    async def SimulateDialogue(self, request, context):
        # Integrate with AIHandler here
        ...

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    character_pb2_grpc.add_CharacterDialogueServicer_to_server(CharacterDialogueServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()
