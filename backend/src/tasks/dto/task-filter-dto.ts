import { IsIn, IsNotEmpty,IsOptional } from "class-validator";
import { TaskStatus } from "../task.status.enum";

export class TasksFilterDTO {
  @IsOptional()
  @IsNotEmpty()
  public search: string;

  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  public status: TaskStatus;

}
