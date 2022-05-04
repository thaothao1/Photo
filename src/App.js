import {useState  } from "react"
import {
  ChakraProvider,
  Heading,
  Center,
  VStack,
  Text,
  HStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

function App(){
  const [selectedFile , setSelectedFile] = useState(null);
  const fileChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0])
  }
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append(
      "file",
      selectedFile,
      selectedFile.name
    );

    const requestOptions = {
      method : 'POST',
      body: formData
    };

    fetch("http://127.0.0.1:8000/img/upload/" , requestOptions)
    .then(response => console.log(response.json()))
  }

  return(
    <ChakraProvider>
      <Center bg="black" color="white" padding={8}>
        <VStack spacing={7}>
          <Heading>Your Gallery</Heading>
          <Text>Take a look at all your photos!</Text>
          <HStack>
            <input type="file" onChange={fileChangeHandler} onClick={null}  accept=' .jpeg, .png , .jpg ' ></input>
            <Button size="lg" colorScheme="red" isDisable={null} onClick={handleSubmit}>
              Submit
            </Button>
          </HStack>
          <Heading> Your Photos </Heading>
          <SimpleGrid columns={3} spacing={8}></SimpleGrid>
        </VStack>
      </Center>
    </ChakraProvider>

  );
}
export default App;