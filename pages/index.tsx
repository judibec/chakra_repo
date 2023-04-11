import { Flex, Heading, Input, Button, Box, ButtonGroup } from "@chakra-ui/react"

const IndexPage = () => {
  return (
    <Flex height="100vh" alignItems="stretch" justifyContent="center">
      <Box display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column' 
          width='100%'
          py={12}
          bgImage="url('https://www.turismodeltadelebro.com/wp-content/uploads/2020/03/silhouette-of-vintage-bike-at-the-sunset-scaled.jpg')"
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          mb={2}>
        <Heading color={"white"}>DOMINA EL TERRENO</Heading>
        <ButtonGroup gap='4'>
          <Button colorScheme='teal' variant='outline'>VER DETALLES</Button>
          <Button colorScheme='teal' variant='outline'>VER VIDEO</Button>
        </ButtonGroup>
      </Box>
    </Flex>
    
  )
}
export default IndexPage
