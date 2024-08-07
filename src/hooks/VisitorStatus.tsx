import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface VisitorStatus {
  is_first_visit: boolean;
}

interface UpdateVisitorStatusData {
  hasCompletedGettingStarted: boolean;
  hasVisitedGettingStarted: boolean;
}

export const fetchVisitorStatus = async (): Promise<VisitorStatus> => {
  const response = await fetch("/api/visitor-status");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const updateFirstVisistFinished = async (): Promise<void> => {
  const response = await fetch("/api/visitor-status/first-visit-finished", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  await response.json();
};

export const useVisitorStatus = () => {
  return useQuery<VisitorStatus, Error>({
    queryKey: ["visitorStatus"],
    queryFn: fetchVisitorStatus,
    onError: (error: any) => {
      console.error("Error fetching visitor status:", error);
      // Handle error, e.g., show error message, retry
    },
  } as any);
};

export const useUpdateVisitorStatus = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error>({
    mutationFn: updateFirstVisistFinished,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["visitorStatus"] });
    },
    onError: (error) => {
      console.error("Error updating visitor status:", error);
      // Handle error, e.g., show error message, retry
    },
  });
};
