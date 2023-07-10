import { Title } from "@mantine/core"
import { css } from "@emotion/react"


export default function Home() {
  return (
    <div css={css`display: block; background: red;`}>
      <Title>Swatch Tool</Title>
    </div>
  )
}
