import asyncio
from typing import (
    Any,
)

from inspect_ai._util.error import exception_message
from inspect_ai.tool import Tool, ToolCall, ToolError
from inspect_ai.tool._tool_def import ToolDef, tool_defs

from ._chat_message import ChatMessageAssistant, ChatMessageTool


async def call_tools(
    message: ChatMessageAssistant, tools: list[Tool]
) -> list[ChatMessageTool]:
    """Perform tool calls in assistant message.

    Args:
       message: Assistant message
       tools: Available tools

    Returns:
       List of tool calls
    """
    if message.tool_calls:
        tdefs = tool_defs(tools)

        async def call_tool_task(call: ToolCall) -> ChatMessageTool:
            tool_error: str | None = None
            try:
                result = await call_tool(tdefs, call)
            except ToolError as ex:
                result = ""
                tool_error = ex.message

            return ChatMessageTool(
                content=result if isinstance(result, list) else str(result),
                tool_error=tool_error,
                tool_call_id=call.id,
            )

        tasks = [call_tool_task(call) for call in message.tool_calls]
        return await asyncio.gather(*tasks)

    else:
        return []


async def call_tool(tools: list[ToolDef], call: ToolCall) -> Any:
    # if there was an error parsing the ToolCall, raise that
    if call.parse_error:
        raise ToolError(call.parse_error)

    # find the tool
    tool_def = next((tool for tool in tools if tool.name == call.function), None)
    if tool_def is None:
        raise ToolError(f"Tool {call.function} not found")

    # call the tool
    try:
        return await tool_def.tool(**call.arguments)
    except TypeError as ex:
        raise ToolError(exception_message(ex))