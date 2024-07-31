import { useQuery, useMutation, useQueryClient, UseQueryResult,  } from "@tanstack/react-query";

// Fetch function for fetching visitor status
const fetchVisitorStatus = async (): Promise<any> => {
  const response = await fetch("/api/visitor-status");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Custom hook for fetching visitor status
export const useVisitorStatus = (): UseQueryResult<any, Error> => {
    return useQuery<any, Error>({
      queryKey: ['visitorStatus'],
      queryFn: fetchVisitorStatus,
      onSuccess: (data: any) => {
        localStorage.setItem('is_first_visit', JSON.stringify(data.is_first_visit));
      },
    } as any);
  };

// Update function for updating visitor status
const updateVisitorStatus = async (): Promise<any> => {
  const response = await fetch("/api/visitorstatus", {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Custom hook for updating visitor status
export const useUpdateVisitorStatus = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, void>({
    mutationFn: updateVisitorStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["visitorStatus"] });
      localStorage.setItem('is_first_visit', JSON.stringify(false));
    },
  });
};
