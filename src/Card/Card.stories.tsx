import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Box, Flex } from "@rebass/grid"
import CardReadMe from "./README.md"

import Card from "./Card.component"

const stories = storiesOf("Card", module).addParameters({
  readme: {
    content: CardReadMe,
    codeTheme: "atom-dark"
  }
})

stories.add("Card", () => {
  return (
    <div>
      <Flex>
        <Box mx={4}>
          <Card raised>
            <Card.Header title="Hello World" />
            <Card.Body bordered>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, non? Sint, corrupti inventore? Perspiciatis, iure
              aliquam minima id sint ab repudiandae officia quisquam ipsa quo at
              atque consequuntur, delectus rerum veritatis reiciendis? Suscipit
              laborum officia, qui numquam dicta quae libero!
            </Card.Body>
            <Card.Footer bordered>Details</Card.Footer>
          </Card>
        </Box>

        <Box mx={4}>
          <Card image="https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png">
            <Card.Header title="JavaScript" />
            <Card.Body bordered>
              Come learn the fundamentals of javascript with real developers
            </Card.Body>
            <Card.Footer bordered>MORE</Card.Footer>
          </Card>
        </Box>
      </Flex>

      <Card raised fluid>
        <Card.Header
          title="Basic Info"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          cum."
        />
        <Card.Body>
          <Card.Image
            size="medium"
            src="https://cdn-images-1.medium.com/max/1200/1*-1_G_Yf3F5T4uJIi-jhYQw.png"
            floated="right"
            rounded
            space="left"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            magni reiciendis nemo harum similique corporis molestiae? Sed aut
            eos nulla animi exercitationem dolor assumenda officiis non
            repudiandae odit veniam possimus illum ipsam doloremque, dolores
            omnis ex sequi magnam vitae? Ducimus! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Velit aliquam ratione labore, commodi
            suscipit molestiae error exercitationem soluta sapiente iste
            dignissimos tempora praesentium, ab, saepe nemo amet ut! Molestias
            illo maxime magnam corporis? Sequi, eaque ducimus placeat pariatur
            sapiente obcaecati. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste pariatur aut illum, unde voluptatum quidem
            quae, perferendis explicabo est totam architecto porro, ipsam
            delectus et rerum dolorum culpa corrupti libero quo asperiores.
            Necessitatibus perspiciatis ducimus animi quod pariatur in voluptas
            officiis repellat facere quis, ipsam culpa, amet similique
            exercitationem nulla! Doloremque, accusantium nemo est labore vitae
            minus! Eligendi, repudiandae non.
          </p>
          <p>
            <Card.Image
              src="https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png"
              floated="left"
              space="right"
              rounded
              size="small"
            ></Card.Image>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            blanditiis accusantium quaerat veritatis, veniam aperiam obcaecati
            quos? Rerum ipsa libero ut non ducimus qui nam, dolorem esse,
            maiores distinctio quas similique laborum unde harum voluptas
            delectus quibusdam commodi illo alias excepturi porro corrupti
            laudantium necessitatibus? Fugit quis quidem sapiente provident?
            Iste pariatur aut illum, unde voluptatum quidem quae, perferendis
            explicabo est totam architecto porro, ipsam delectus et rerum
            dolorum culpa corrupti libero quo asperiores. Necessitatibus
            perspiciatis ducimus animi quod pariatur in voluptas officiis
            repellat facere quis, ipsam culpa, amet similique exercitationem
            nulla
          </p>
        </Card.Body>
        <Card.Footer bordered textAlign="center">
          <a href="#">See More</a>
        </Card.Footer>
      </Card>

      <Flex flexWrap="wrap">
        <Box mx={4}>
          <h1>Flippable</h1>
          <Card.Flipper>
            <Card
              raised
              image="https://cdn-images-1.medium.com/max/1200/1*-1_G_Yf3F5T4uJIi-jhYQw.png"
            >
              <Card.Header title="Click Me" />
              <Card.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                sint aliquid? Culpa mollitia, cupiditate error eveniet ad
                consectetur animi porro.
              </Card.Body>
              <Card.Footer>Details</Card.Footer>
            </Card>
            <Card
              raised
              image="https://i.udemycdn.com/course/750x422/11174_cbb1_116.jpg"
            >
              <Card.Header title="Click me" />
              <Card.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                sint aliquid? Culpa mollitia, cupiditate error eveniet ad
                consectetur animi porro.
              </Card.Body>
              <Card.Footer>Details</Card.Footer>
            </Card>
          </Card.Flipper>
        </Box>
        <Box mx={4}>
          <h1>Vertical</h1>
          <Card.Flipper vertical>
            <Card
              raised
              image="https://cdn-images-1.medium.com/max/1200/1*-1_G_Yf3F5T4uJIi-jhYQw.png"
            >
              <Card.Header title="Click Me" />
              <Card.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                sint aliquid? Culpa mollitia, cupiditate error eveniet ad
                consectetur animi porro.
              </Card.Body>
              <Card.Footer>Details</Card.Footer>
            </Card>
            <Card
              raised
              image="https://i.udemycdn.com/course/750x422/11174_cbb1_116.jpg"
            >
              <Card.Header title="Click Me" />
              <Card.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                sint aliquid? Culpa mollitia, cupiditate error eveniet ad
                consectetur animi porro.
              </Card.Body>
              <Card.Footer>Details</Card.Footer>
            </Card>
          </Card.Flipper>
        </Box>
        <Box mx={4}>
          <h1>Hoverable</h1>
          <Card
            raised
            hoverable
            image="https://cdn-images-1.medium.com/max/1200/1*-1_G_Yf3F5T4uJIi-jhYQw.png"
          >
            <Card.Header title="Hover me!" />
            <Card.Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
              sint aliquid? Culpa mollitia, cupiditate error eveniet ad
              consectetur animi porro.
            </Card.Body>
            <Card.Footer>Details</Card.Footer>
          </Card>
        </Box>
      </Flex>
    </div>
  )
})
