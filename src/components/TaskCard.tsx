import { Button } from "./ui/button";

type TaskCardProps = {
  initialData: {
    _id: string;
    task: string;
    description: string;
    status: string;
  };
  onDeleteSubmit: () => void;
  onUpdateSubmit: () => void;
};

export default function TaskCard({
  initialData,
  onDeleteSubmit,
  onUpdateSubmit,
}: TaskCardProps) {
  return (
    <div className="border p-4 rounded shadow bg-white/40">
      <h2 className="text-lg font-bold">Task: {initialData.task}</h2>
      <p className="text-sm text-gray-600">Description: {initialData.description}</p>
      <p className="text-xs mt-1">Status: {initialData.status}</p>
      <div className="mt-3 flex gap-2">
        <Button
          onClick={onUpdateSubmit}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Edit
        </Button>
        <Button
          onClick={onDeleteSubmit}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
