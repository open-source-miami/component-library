import * as React from "react"
import styled from "styled-components"

export type NotificationKind = "normal" | "success" | "error"
interface INotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The kind of notification to display.
   */
  kind: NotificationKind
}

/**
 * Returns text color css value for the given `kind`.
 */
const getTextColor = (kind: NotificationKind): string => {
  switch (kind) {
    case "normal":
      return "#1576ca"

    case "success":
      return "green"

    case "error":
      return "#ce0303"

    default:
      return "#1576ca"
  }
}

/**
 * Returns border color css value for the given `kind`.
 */
const getBorderColor = (kind: NotificationKind): string => {
  switch (kind) {
    case "normal":
      return "#1576ca"

    case "success":
      return "#44b329"

    case "error":
      return "#ce0303"

    default:
      return "#1576ca"
  }
}

/**
 * Returns background color css value for the given `kind`.
 */
const getBackgroundColor = (kind: NotificationKind): string => {
  switch (kind) {
    case "normal":
      return "rgba(14, 77, 255, 0.09)"

    case "success":
      return "rgba(2, 189, 2, 0.09)"

    case "error":
      return "rgba(255, 0, 0, 0.09)"

    default:
      return "rgba(14, 77, 255, 0.09)"
  }
}

const Container = styled.div<INotificationProps>`
  color: ${({ kind }) => getTextColor(kind)};
  border: 1px solid ${({ kind }) => getBorderColor(kind)};
  background-color: ${({ kind }) => getBackgroundColor(kind)};
  padding: 15px;
  border-radius: 3px;
`

/**
 * Notification.
 */
const Notification: React.FC<INotificationProps> = props => (
  <Container role="alert" {...props}>
    {props.children}
  </Container>
)

export default Notification
