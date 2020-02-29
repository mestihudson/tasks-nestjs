"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_task_dto_1 = require("./dto/create-task-dto");
const task_filter_dto_1 = require("./dto/task-filter-dto");
const tasks_model_1 = require("./tasks.model");
const tasks_service_1 = require("./tasks.service");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getTasks(tasksFilterDTO) {
        return this.tasksService.getTasksWithFilters(tasksFilterDTO);
    }
    getTaskById(id) {
        return this.tasksService.getTaskById(id);
    }
    createTask(createTaskDTO) {
        return this.tasksService.createTask(createTaskDTO);
    }
    updateTaskStatus(id, status) {
        return this.tasksService.updateTaskStatus(id, status);
    }
    deleteTask(id) {
        return this.tasksService.getDeleteTask(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_filter_dto_1.TasksFilterDTO]),
    __metadata("design:returntype", Array)
], TasksController.prototype, "getTasks", null);
__decorate([
    common_1.Get("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", tasks_model_1.Task)
], TasksController.prototype, "getTaskById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDTO]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "createTask", null);
__decorate([
    common_1.Patch("/:id/status"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body("status")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", tasks_model_1.Task)
], TasksController.prototype, "updateTaskStatus", null);
__decorate([
    common_1.Delete("/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "deleteTask", null);
TasksController = __decorate([
    common_1.Controller("tasks"),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map