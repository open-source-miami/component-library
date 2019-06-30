// Card.component
export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Card will expand across available width
     * @default false
     */
    fluid?: boolean
    /**
     * Raises the card, applying a small box-shadow
     * @default false
     */
    raised?: boolean
    /**
     * Main image to be displayed
     *
     */
    image?: string
    /**
     * Translate Y on hover
     * @default false
     */
    hoverable?: boolean
  }
  
  // CardHeader.component
  export interface ICardHeader extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Align content
     */
    textAlign?: "left" | "right" | "center"

    /**
     * Display as title of card using typeography
     */
    title?: string

    /**
     * Display as subtitle of card using typography component
     */
    subTitle?: string
  }
  
  // CardImage.component
  export type ImageSpaceDirection =
    | "left"
    | "right"
    | "top"
    | "bottom"
    | undefined
  export type ImageSize =
    | "mini"
    | "small"
    | "medium"
    | "large"
    | "big"
    | "huge"
    | undefined
  
  export interface ICardImage extends React.HTMLAttributes<HTMLImageElement> {
    /**
     * Float image left or right
     */
    floated?: "left" | "right"
    /**
     * Rounded corners
     */
    rounded?: boolean
    /**
     * Circular image
     */
    circular?: boolean
    /**
     * Size of the image
     */
    size?: ImageSize
    /**
     * Path to image or URL
     */
    src: string
    /**
     * Add spacing to left | right | top | bottom
     */
    space?: ImageSpaceDirection
  }
  
  // CardBody.component
  export interface ICardBody extends React.HTMLAttributes<HTMLDivElement> {
    bordered?: boolean
  }
  
  // CardFlipper.component
  export interface ICardFlipper extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Determines if the card flipper will flip vertically.
     *
     * @default false
     * */
    vertical?: boolean
    /**
     * This prop is specified to have access to the length of the children array
     */
    children: React.ReactElement<ICardProps>[]
    /**
     * Determines is card is flipped
     */
    enabled?: boolean
  }
  
  // CardFooter.component
  export interface ICardFooter extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Adds border to top of footer
     */
    bordered?: boolean
    textAlign?: "center" | "left" | "right"
  }
 