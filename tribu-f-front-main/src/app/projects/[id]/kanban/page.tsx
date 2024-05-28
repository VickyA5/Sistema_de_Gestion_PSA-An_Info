import KanbanBoard from "@/components/KanbanBoard";
import { GetTasks } from "@/api/proyectos";

export default async function KanbanPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const tasks = await GetTasks(id);
  return (
    <>
      <KanbanBoard project_id={id} tasks={tasks} />
    </>
  );
}
