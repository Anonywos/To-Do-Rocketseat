import Badge from "../components/badge";
import Text from "../components/Text";
import useTasks from "../hooks/use-tasks";


export default function TasksSummary () {
    const { tasksCount, concluededTasksCount, isLoadingTasks } = useTasks();

    return <>
        <div className="flex items-center gap-2">
            <Text  variant="body-sm-bold" className="text-gray-300!">Tarefas criadas</Text>
            <Badge variant="secondary" loading={isLoadingTasks}>{tasksCount}</Badge>
        </div>
        <div className="flex items-center gap-2">
            <Text  variant="body-sm-bold" className="text-gray-300!">Concluídas</Text>
            <Badge variant="primary" loading={isLoadingTasks}>{concluededTasksCount} de {tasksCount}</Badge>
        </div>
    </>
}