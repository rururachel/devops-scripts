/**
 * DevOps Scripts - Type Definitions
 */

export type ScriptCategory = 'deployment' | 'monitoring' | 'logging' | 'security' | 'misc';

export interface ScriptMetadata {
  id: string;
  name: string;
  description: string;
  category: ScriptCategory;
  author: string;
  createdAt: Date;
  lastModified: Date;
  dependencies: string[];
  tags: string[];
}

export interface ExecutionOptions {
  environment: 'production' | 'staging' | 'development';
  dryRun: boolean;
  verbose: boolean;
  timeout: number;
}

export type ScriptResult = {
  success: boolean;
  output: string;
  error?: string;
  duration: number;
  timestamp: Date;
};

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'critical';

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: Record<string, unknown>;
}

export type ScriptRegistry = Record<string, ScriptMetadata>;

export type EnvironmentVariables = Record<string, string | number | boolean>;