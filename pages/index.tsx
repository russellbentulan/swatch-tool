import { Container } from "@mantine/core";

import { useAppStateContext } from "@/contexts/AppContext";

export default function Home() {
  const { state, dispatch } = useAppStateContext();

  return <Container>Stuff here</Container>;
}
