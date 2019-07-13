import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Flex, Box } from "@rebass/grid"
import { NotificationKind } from "./Notification.component"
import Notification from "."
import { capitalize } from "../utils"

storiesOf("Notification", module).add("Default", () => (
  <Flex width={1 / 2} flexDirection="column">
    {["normal", "success", "error"].map((kind: NotificationKind) => (
      <Box key={kind} my={2}>
        <Notification kind={kind}>
          <h3>{capitalize(kind)} notification</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            quia distinctio ab consequuntur nisi dolores harum mollitia quam
            consectetur atque, obcaecati repellat enim, voluptas quibusdam. Esse
            itaque debitis expedita adipisci.
          </p>
        </Notification>
      </Box>
    ))}
  </Flex>
))
