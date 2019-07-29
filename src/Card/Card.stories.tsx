import * as React from "react"
import { storiesOf } from "@storybook/react"

import CardReadMe from "./README.md"
import Card from "./Card"
import CardContent from "./CardContent"
import Typography from "../Typography"
import Flex from "../Flex"

const stories = storiesOf("Card", module).addParameters({
  readme: {
    content: CardReadMe,
    codeTheme: "atom-dark"
  }
})

stories.add("Card", () => {
  const cardImageText = (content: string): JSX.Element => (
    <Typography margin="1rem" fontWeight="lighter" color="#fff" variant="h2">
      {content}
    </Typography>
  )

  return (
    <Flex justifyContent="space-evenly">
      <Card height="13rem">
        <CardContent borderBottom="1px solid #ccc">
          <Typography m="0" variant="h2" fontWeight="lighter">
            Basic Card
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex rerum
            consequuntur iusto animi deleniti ducimus neque cum iste esse, et
            itaque quaerat iure ullam quod doloremque provident optio quam sint!
          </Typography>
        </CardContent>
        <CardContent borderTop="1px solid #ccc">
          <Typography variant="span">Details</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent
          position="absolute"
          backgroundImage={`url("https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oitqabmddnnagdth6wyj/air-max-270-react-bauhaus-mens-shoes-DcpzJF.jpg")`}
          backgroundSize="cover"
          backgroundPosition="50% 60%"
          width="100%"
          height="13rem"
        />
        <CardContent mt="12rem">
          <Typography variant="h1"> Card Box </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            illo, voluptate autem eum cumque aut distinctio provident earum
            animi similique.
          </Typography>
        </CardContent>
        <CardContent borderTop="1px solid #ccc">
          <Typography m="0" variant="h4" textAlign="center">
            BUY NOW!
          </Typography>
        </CardContent>
      </Card>

      <Card
        backgroundImage={`url("https://media.gq.com/photos/5c65b35e73213b217a33093f/3:4/w_2250%2Ch_3000%2Cc_limit/air-max-dia-1163.jpg")`}
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <CardContent position="absolute" top="0" left="0">
          {cardImageText("Air Max")}
        </CardContent>
        <CardContent position="absolute" bottom="0" right="0">
          {cardImageText("$200")}
        </CardContent>
      </Card>
    </Flex>
  )
})
