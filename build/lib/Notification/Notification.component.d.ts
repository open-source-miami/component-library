import * as React from "react";
export declare type NotificationKind = "normal" | "success" | "error";
interface INotificationProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The kind of notification to display.
     */
    kind: NotificationKind;
}
/**
 * Notification.
 */
declare const Notification: React.FC<INotificationProps>;
export default Notification;
