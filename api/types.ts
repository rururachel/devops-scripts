interface ScriptConfig {
    id: string;
    name: string;
    description: string;
    command: string;
    args?: string[];
    env?: Record<string, string>;
}

interface ExecutionResult {
    success: boolean;
    output: string;
    error?: string;
    duration: number;
}

enum ScriptStatus {
    Pending = "Pending",
    Running = "Running",
    Completed = "Completed",
    Failed = "Failed",
}

type ScriptLog = {
    timestamp: Date;
    message: string;
    level: "info" | "warn" | "error";
};

type ScriptExecution = {
    config: ScriptConfig;
    status: ScriptStatus;
    result?: ExecutionResult;
    logs: ScriptLog[];
};

export { ScriptConfig, ExecutionResult, ScriptStatus, ScriptLog, ScriptExecution };