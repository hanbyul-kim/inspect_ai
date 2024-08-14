/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Version = number;
export type Status = "started" | "success" | "cancelled" | "error";
export type Task = string;
export type TaskVersion = number;
export type TaskFile = string | null;
export type TaskId = string;
export type RunId = string;
export type Created = string;
export type Name = string | null;
export type Location = string | null;
export type Samples = number | null;
export type Shuffled = boolean | null;
export type Sandbox = [unknown, unknown] | null;
export type Model = string;
export type ModelBaseUrl = string | null;
export type Limit = number | [unknown, unknown] | null;
export type Epochs = number | null;
export type EpochsReducer = string[] | null;
export type MaxMessages = number | null;
export type MaxSamples = number | null;
export type MaxTasks = number | null;
export type MaxSubprocesses = number | null;
export type SandboxCleanup = boolean | null;
export type LogSamples = boolean | null;
export type LogImages = boolean | null;
export type LogBuffer = number | null;
export type Type = "git";
export type Origin = string;
export type Commit = string;
export type Metadata = {} | null;
export type Name1 = string;
export type Solver = string;
export type Steps = EvalPlanStep[];
export type MaxRetries = number | null;
export type Timeout = number | null;
export type MaxConnections = number | null;
export type SystemMessage = string | null;
export type MaxTokens = number | null;
export type TopP = number | null;
export type Temperature = number | null;
export type StopSeqs = string[] | null;
export type BestOf = number | null;
export type FrequencyPenalty = number | null;
export type PresencePenalty = number | null;
export type LogitBias = {
  [k: string]: number;
} | null;
export type Seed = number | null;
export type Suffix = string | null;
export type TopK = number | null;
export type NumChoices = number | null;
export type Logprobs = boolean | null;
export type TopLogprobs = number | null;
export type ParallelToolCalls = boolean | null;
export type Name2 = string;
export type Scorer = string;
export type Reducer = string | null;
export type Name3 = string;
export type Value = number;
export type Metadata1 = {} | null;
export type Metadata2 = {} | null;
export type Scores = EvalScore[];
export type Metadata3 = {} | null;
export type StartedAt = string;
export type CompletedAt = string;
export type InputTokens = number;
export type OutputTokens = number;
export type TotalTokens = number;
export type Message = string;
export type Traceback = string;
export type TracebackAnsi = string;
export type Samples1 = EvalSample[] | null;
export type Id = number | string;
export type Epoch = number;
export type Input =
  | string
  | (
      | ChatMessageSystem
      | ChatMessageUser
      | ChatMessageAssistant
      | ChatMessageTool
    )[];
export type Content = string | (ContentText | ContentImage)[];
export type Type1 = "text";
export type Text = string;
export type Type2 = "image";
export type Image = string;
export type Detail = "auto" | "low" | "high";
export type Source = ("input" | "generate" | "cache") | null;
export type Role = "system";
export type Content1 = string | (ContentText | ContentImage)[];
export type Source1 = ("input" | "generate" | "cache") | null;
export type Role1 = "user";
export type Content2 = string | (ContentText | ContentImage)[];
export type Source2 = ("input" | "generate" | "cache") | null;
export type Role2 = "assistant";
export type ToolCalls = ToolCall[] | null;
export type Id1 = string;
export type Function = string;
export type Type3 = "function";
export type ParseError = string | null;
export type Content3 = string | (ContentText | ContentImage)[];
export type Source3 = ("input" | "generate" | "cache") | null;
export type Role3 = "tool";
export type ToolCallId = string | null;
export type Type4 =
  | "parsing"
  | "timeout"
  | "unicode_decode"
  | "permission"
  | "file_not_found"
  | "unknown";
export type Message1 = string;
export type Choices = string[] | null;
export type Target = string | string[];
export type Messages = (
  | ChatMessageSystem
  | ChatMessageUser
  | ChatMessageAssistant
  | ChatMessageTool
)[];
export type Model1 = string;
export type StopReason =
  | "stop"
  | "length"
  | "tool_calls"
  | "content_filter"
  | "unknown";
export type Token = string;
export type Logprob1 = number;
export type Bytes = number[] | null;
export type TopLogprobs1 = TopLogprob[] | null;
export type Token1 = string;
export type Logprob2 = number;
export type Bytes1 = number[] | null;
export type Content4 = Logprob[];
export type Choices1 = ChatCompletionChoice[];
export type Error = string | null;
export type Scores1 = {
  [k: string]: Score;
} | null;
export type Value1 =
  | string
  | number
  | boolean
  | (string | number | boolean)[]
  | {
      [k: string]: string | number | boolean | null;
    };
export type Answer = string | null;
export type Explanation = string | null;
export type Metadata4 = {} | null;
export type Timestamp = string;
export type Event = "sample_init";
export type Input1 =
  | string
  | (
      | ChatMessageSystem
      | ChatMessageUser
      | ChatMessageAssistant
      | ChatMessageTool
    )[];
export type Choices2 = string[] | null;
export type Target1 = string | string[];
export type Id2 = number | string | null;
export type Metadata6 = {} | null;
export type Files = {
  [k: string]: string;
} | null;
export type Setup = string | null;
export type JsonValue = unknown;
export type Timestamp1 = string;
export type Event1 = "state";
export type Op = "remove" | "add" | "replace" | "move" | "test" | "copy";
export type Path = string;
export type From = string | null;
export type Changes = JsonChange[];
export type Timestamp2 = string;
export type Event2 = "store";
export type Changes1 = JsonChange[];
export type Timestamp3 = string;
export type Event3 = "model";
export type Model2 = string;
export type Input2 = (
  | ChatMessageSystem
  | ChatMessageUser
  | ChatMessageAssistant
  | ChatMessageTool
)[];
export type Name4 = string;
export type Description = string;
export type Type5 = "object";
export type Type6 =
  | "string"
  | "integer"
  | "number"
  | "boolean"
  | "array"
  | "object"
  | "null";
export type Description1 = string | null;
export type Properties1 = {
  [k: string]: ToolParam;
} | null;
export type Anyof = ToolParam[] | null;
export type Required = string[] | null;
export type Required1 = string[];
export type Tools = ToolInfo[];
export type ToolChoice = ("auto" | "any" | "none") | ToolFunction;
export type Name5 = string;
export type Timestamp4 = string;
export type Event4 = "tool";
export type Type7 = "function";
export type Id3 = string;
export type Function1 = string;
export type Result = string | number | boolean | (ContentText | ContentImage)[];
export type Timestamp5 = string;
export type Event5 = "score";
export type Timestamp6 = string;
export type Event6 = "logger";
export type Name6 = string | null;
export type Level =
  | "debug"
  | "http"
  | "sandbox"
  | "info"
  | "warning"
  | "error"
  | "critical";
export type Message2 = string;
export type Created1 = number;
export type Filename = string;
export type Module = string;
export type Lineno = number;
export type Timestamp7 = string;
export type Event7 = "info";
export type Timestamp8 = string;
export type Event8 = "step";
export type Action = "begin" | "end";
export type Type8 = string | null;
export type Name7 = string;
export type Timestamp9 = string;
export type Event9 = "subtask";
export type Name8 = string;
export type Events = (
  | SampleInitEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ScoreEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];

export interface EvalLog {
  version?: Version;
  status?: Status;
  eval: EvalSpec;
  plan?: EvalPlan;
  results?: EvalResults | null;
  stats?: EvalStats;
  error?: EvalError | null;
  samples?: Samples1;
}
export interface EvalSpec {
  task: Task;
  task_version: TaskVersion;
  task_file: TaskFile;
  task_id: TaskId;
  run_id: RunId;
  created: Created;
  dataset: EvalDataset;
  sandbox: Sandbox;
  model: Model;
  model_base_url: ModelBaseUrl;
  task_attribs: TaskAttribs;
  task_args: TaskArgs;
  model_args: ModelArgs;
  config: EvalConfig;
  revision: EvalRevision | null;
  packages: Packages;
  metadata: Metadata;
}
export interface EvalDataset {
  name: Name;
  location: Location;
  samples: Samples;
  shuffled: Shuffled;
}
export interface TaskAttribs {}
export interface TaskArgs {}
export interface ModelArgs {}
export interface EvalConfig {
  limit: Limit;
  epochs: Epochs;
  epochs_reducer: EpochsReducer;
  max_messages: MaxMessages;
  max_samples: MaxSamples;
  max_tasks: MaxTasks;
  max_subprocesses: MaxSubprocesses;
  sandbox_cleanup: SandboxCleanup;
  log_samples: LogSamples;
  log_images: LogImages;
  log_buffer: LogBuffer;
}
export interface EvalRevision {
  type: Type;
  origin: Origin;
  commit: Commit;
}
export interface Packages {
  [k: string]: string;
}
export interface EvalPlan {
  name: Name1;
  steps: Steps;
  finish: EvalPlanStep | null;
  config: GenerateConfig;
}
export interface EvalPlanStep {
  solver: Solver;
  params: Params;
}
export interface Params {}
/**
 * Base class for model generation configs.
 */
export interface GenerateConfig {
  max_retries: MaxRetries;
  timeout: Timeout;
  max_connections: MaxConnections;
  system_message: SystemMessage;
  max_tokens: MaxTokens;
  top_p: TopP;
  temperature: Temperature;
  stop_seqs: StopSeqs;
  best_of: BestOf;
  frequency_penalty: FrequencyPenalty;
  presence_penalty: PresencePenalty;
  logit_bias: LogitBias;
  seed: Seed;
  suffix: Suffix;
  top_k: TopK;
  num_choices: NumChoices;
  logprobs: Logprobs;
  top_logprobs: TopLogprobs;
  parallel_tool_calls: ParallelToolCalls;
}
export interface EvalResults {
  scores: Scores;
  metadata: Metadata3;
}
export interface EvalScore {
  name: Name2;
  scorer: Scorer;
  reducer: Reducer;
  params: Params1;
  metrics: Metrics;
  metadata: Metadata2;
}
export interface Params1 {}
export interface Metrics {
  [k: string]: EvalMetric;
}
export interface EvalMetric {
  name: Name3;
  value: Value;
  options: Options;
  metadata: Metadata1;
}
export interface Options {}
export interface EvalStats {
  started_at: StartedAt;
  completed_at: CompletedAt;
  model_usage: ModelUsage;
}
export interface ModelUsage {
  [k: string]: ModelUsage1;
}
export interface ModelUsage1 {
  input_tokens: InputTokens;
  output_tokens: OutputTokens;
  total_tokens: TotalTokens;
}
export interface EvalError {
  message: Message;
  traceback: Traceback;
  traceback_ansi: TracebackAnsi;
}
export interface EvalSample {
  id: Id;
  epoch: Epoch;
  input: Input;
  choices: Choices;
  target: Target;
  messages: Messages;
  output: ModelOutput;
  scores: Scores1;
  metadata: Metadata5;
  store: Store;
  transcript: EvalEvents;
}
export interface ChatMessageSystem {
  content: Content;
  source: Source;
  role: Role;
}
export interface ContentText {
  type: Type1;
  text: Text;
}
export interface ContentImage {
  type: Type2;
  image: Image;
  detail: Detail;
}
export interface ChatMessageUser {
  content: Content1;
  source: Source1;
  role: Role1;
}
export interface ChatMessageAssistant {
  content: Content2;
  source: Source2;
  role: Role2;
  tool_calls: ToolCalls;
}
export interface ToolCall {
  id: Id1;
  function: Function;
  arguments: Arguments;
  type: Type3;
  parse_error: ParseError;
}
export interface Arguments {}
export interface ChatMessageTool {
  content: Content3;
  source: Source3;
  role: Role3;
  tool_call_id: ToolCallId;
  error: ToolCallError | null;
}
export interface ToolCallError {
  type: Type4;
  message: Message1;
}
export interface ModelOutput {
  model: Model1;
  choices: Choices1;
  usage: ModelUsage1 | null;
  error: Error;
}
export interface ChatCompletionChoice {
  message: ChatMessageAssistant;
  stop_reason: StopReason;
  logprobs: Logprobs1 | null;
}
/**
 * Log probability information for a completion choice.
 */
export interface Logprobs1 {
  content: Content4;
}
/**
 * Log probability for a token.
 */
export interface Logprob {
  token: Token;
  logprob: Logprob1;
  bytes: Bytes;
  top_logprobs: TopLogprobs1;
}
/**
 * List of the most likely tokens and their log probability, at this token position.
 */
export interface TopLogprob {
  token: Token1;
  logprob: Logprob2;
  bytes: Bytes1;
}
/**
 * Score generated by a scorer.
 *
 * Args:
 *    value (Value): Score value.
 *    answer (str | None): Answer extracted from model output (optional).
 *    explanation (str | None): Explanation of score (optional).
 *    metadata (dict[str,Any]): Additional metadata related to the score.
 */
export interface Score {
  value: Value1;
  answer: Answer;
  explanation: Explanation;
  metadata: Metadata4;
}
export interface Metadata5 {}
export interface Store {}
export interface EvalEvents {
  events: Events;
  content: Content5;
}
/**
 * Beginning of processing a Sample.
 */
export interface SampleInitEvent {
  timestamp: Timestamp;
  event: Event;
  sample: Sample;
  state: JsonValue;
}
/**
 * Sample to be used in an evaluation task.
 *
 * Args:
 *     input (str | list[ChatMessage]): The input to be submitted to the model.
 *     choices (list[str] | None): Optional. List of available answer choices
 *        (used only for multiple-choice evals).
 *     target (str | list[str]): Optional. Ideal target output. May be a literal value
 *         or narrative text to be used by a model grader.
 *     id (int | str | None): Optional. Unique identifier for sample.
 *     metadata (dict[str,Any] | None): Optional. Arbitrary metadata associated with the sample.
 *     files (dict[str, str] | None): Optional. Files that go along with the sample (copied to
 *       SandboxEnvironment). Files can be paths, inline text, or inline binary (base64 encoded data URL).
 *     setup: (str | None): Optional. Setup script to run for sample (run
 *       within default SandboxEnvironment).
 */
export interface Sample {
  input: Input1;
  choices: Choices2;
  target: Target1;
  id: Id2;
  metadata: Metadata6;
  files: Files;
  setup: Setup;
}
/**
 * Change to the current `TaskState`
 */
export interface StateEvent {
  timestamp: Timestamp1;
  event: Event1;
  changes: Changes;
}
/**
 * Describes a change to data using JSON Patch format.
 */
export interface JsonChange {
  op: Op;
  path: Path;
  from: From;
  value: unknown;
}
/**
 * Change to data within the current `Store`.
 */
export interface StoreEvent {
  timestamp: Timestamp2;
  event: Event2;
  changes: Changes1;
}
/**
 * Call to a language model.
 */
export interface ModelEvent {
  timestamp: Timestamp3;
  event: Event3;
  model: Model2;
  input: Input2;
  tools: Tools;
  tool_choice: ToolChoice;
  config: GenerateConfig;
  output: ModelOutput;
}
/**
 * Specification of a tool (JSON Schema compatible)
 *
 * If you are implementing a ModelAPI, most LLM libraries can
 * be passed this object (dumped to a dict) directly as a function
 * specification. For example, in the OpenAI provider:
 *
 * ```python
 * ChatCompletionToolParam(
 *     type="function",
 *     function=tool.model_dump(exclude_none=True),
 * )
 * ```
 *
 * In some cases the field names don't match up exactly. In that case
 * call `model_dump()` on the `parameters` field. For example, in the
 * Anthropic provider:
 *
 * ```python
 * ToolParam(
 *     name=tool.name,
 *     description=tool.description,
 *     input_schema=tool.parameters.model_dump(exclude_none=True),
 * )
 * ```
 */
export interface ToolInfo {
  name: Name4;
  description: Description;
  parameters: ToolParams;
}
/**
 * Description of tool parameters object in JSON Schema format.
 */
export interface ToolParams {
  type: Type5;
  properties: Properties;
  required: Required1;
}
export interface Properties {
  [k: string]: ToolParam;
}
/**
 * Description of tool parameter in JSON Schema format.
 */
export interface ToolParam {
  type: Type6;
  description: Description1;
  default: Default;
  items: ToolParam | null;
  properties: Properties1;
  additionalProperties: ToolParam | null;
  anyOf: Anyof;
  required: Required;
}
export interface Default {
  [k: string]: unknown;
}
export interface ToolFunction {
  name: Name5;
}
/**
 * Call to a tool.
 */
export interface ToolEvent {
  timestamp: Timestamp4;
  event: Event4;
  type: Type7;
  id: Id3;
  function: Function1;
  arguments: Arguments1;
  result: Result;
}
export interface Arguments1 {
  [k: string]: JsonValue;
}
/**
 * Event with sample score.
 */
export interface ScoreEvent {
  timestamp: Timestamp5;
  event: Event5;
  score: Score;
}
/**
 * Log message recorded with Python logger.
 */
export interface LoggerEvent {
  timestamp: Timestamp6;
  event: Event6;
  message: LoggingMessage;
}
export interface LoggingMessage {
  name: Name6;
  level: Level;
  message: Message2;
  created: Created1;
  filename: Filename;
  module: Module;
  lineno: Lineno;
  args: unknown;
}
/**
 * Event with custom info/data.
 */
export interface InfoEvent {
  timestamp: Timestamp7;
  event: Event7;
  data: JsonValue;
}
/**
 * Step within current sample or subtask.
 */
export interface StepEvent {
  timestamp: Timestamp8;
  event: Event8;
  action: Action;
  type: Type8;
  name: Name7;
}
/**
 * Subtask spawned.
 */
export interface SubtaskEvent {
  timestamp: Timestamp9;
  event: Event9;
  name: Name8;
  input: Input3;
  result: Result1;
  events: EvalEvents;
}
export interface Input3 {}
export interface Result1 {
  [k: string]: unknown;
}
export interface Content5 {
  [k: string]: string;
}
