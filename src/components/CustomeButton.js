import {
    Button
} from '@chakra-ui/react';


const CustomButtonRedHover = (props) => {
    return (
        <Button
            colorScheme="teal"
            _hover={{ bg: 'red.500' }}
            {...props}
        >
            {props.children}
        </Button>
    );
};


const CustomButtonOutline = (props) => {
    return (
        <Button
            colorScheme="cyan"
            variant="outline"
            {...props}
        >
            {props.children}
        </Button>
    );
};

export { CustomButtonRedHover, CustomButtonOutline }