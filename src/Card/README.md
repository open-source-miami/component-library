<h1>Card</h1>
This component displays content in the format of a card

<!-- STORY -->

<h2>Basic Usage</h2>

```jsx
<div>
      <Card
        boxShadow="2px 4px 10px rgba(0, 0, 0, 0.3)"
        m="1rem"
        width="18rem"
        border="1px solid #ccc"
      >
        <Card.Image src="http://lorempixel.com/400/200" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>Subtitle</Card.Subtitle>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, soluta voluptates, modi tempora quo quaerat
            molestiae quia nisi nihil fuga a repellat ad labore est ipsa animi
            impedit iste possimus!
          </Card.Text>
          <Button m="0 0.5rem 0 0">Do Something</Button>
          <Button>Do Something Else</Button>
        </Card.Body>
      </Card>

      <Card m="1rem" width="18rem" border="1px solid #ccc">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, soluta voluptates, modi tempora quo quaerat
            molestiae quia nisi nihil fuga a repellat ad labore est ipsa animi
            impedit iste possimus!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button m="0 0.5rem 0 0">Do Something</Button>
          <Button>Do Something Else</Button>
        </Card.Footer>
      </Card>

      <Card
        m="1rem"
        width="18rem"
        background="url(http://lorempixel.com/400/400)"
        backgroundPosition="center"
        backgroundSize="cover"
        color="#fff"
      >
        <Card.Overlay background="rgba(0, 0, 0, 0.5)">
          <Card.Body>
            <Card.Title fontSize="2rem">Card Image</Card.Title>
            <Card.Subtitle color="#fff">With Overlay</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              perspiciatis voluptates autem neque laudantium placeat cupiditate
              magnam! Molestiae, vel? Nemo fugit pariatur veniam! Alias
              architecto, asperiores assumenda at omnis sed.
            </Card.Text>
          </Card.Body>
          <Card.Footer>Lorem ipsum dolor sit amet.</Card.Footer>
        </Card.Overlay>
      </Card>
    </div>
```
