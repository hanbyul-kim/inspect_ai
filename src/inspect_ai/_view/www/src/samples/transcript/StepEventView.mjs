// @ts-check
import { html } from "htm/preact";
import { ApplicationIcons } from "../../appearance/Icons.mjs";
import { FontSize } from "../../appearance/Fonts.mjs";
import { renderNode } from "./TranscriptView.mjs";

/**
 * Renders the StateEventView component.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {import("../../types/log").StepEvent} props.event - The event object to display.
 * @param {import("../../types/log").Events} props.children - The child events to display.
 * @param {string} props.baseId - The baseId of this item
 * @returns {import("preact").JSX.Element} The component.
 */
export const StepEventView = ({ event, baseId, children }) => {
  const icon = () => {
    if (event.type === "solver") {
      switch (event.name) {
        case "chain_of_thought":
          return ApplicationIcons.solvers.chain_of_thought;
        case "generate":
          return ApplicationIcons.solvers.generate;
        case "self_critique":
          return ApplicationIcons.solvers.self_critique;
        case "system_message":
          return ApplicationIcons.solvers.system_message;
        case "use_tools":
          return ApplicationIcons.solvers.use_tools;
        default:
          return ApplicationIcons.solvers.default;
      }
    } else if (event.type === "scorer") {
      return ApplicationIcons.scorer;
    } else {
      return ApplicationIcons.step;
    }
  };

  return html`<div
    style=${{
      display: "grid",
      gridTemplateColumns: "max-content 1fr",
      columnGap: "0.3em",
      rowGap: "0.3em",
      marginBottom: "2em",
      fontSize: FontSize.larger,
    }}
  >
    <i class=${icon()} style=${{ marginRight: "0.2em" }} />
    <div
      style=${{
        display: "inline-block",
        justifySelf: "left",
      }}
    >
      ${event.name}
    </div>
    <div style=${{ display: "grid", justifyContent: "center" }}>
      <div
        style=${{
          background: "var(--bs-light-border-subtle",
          height: "100%",
          width: "2px",
        }}
      ></div>
    </div>
    <div style=${{ fontSize: FontSize.small }}>
      ${children.map((child) => {
        return renderNode(child, `${baseId}-1`);
      })}
    </div>
  </div>`;
};