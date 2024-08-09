import CreateLadderRequest from "@/types/CreateLadderRequest";
import CreateLadderResponse from "@/types/CreateLadderResponse";
import { useMutation } from "@tanstack/react-query";

async function createLadder(
  data: CreateLadderRequest
): Promise<CreateLadderResponse> {
  const response = await fetch("/api/ladders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const res = await response.json();
    throw new Error(res.error);
  }

  return response.json();
}

export const useCreateLadder = () =>
  useMutation<CreateLadderResponse, Error, CreateLadderRequest>({
    mutationFn: (data) => createLadder(data),
  });
