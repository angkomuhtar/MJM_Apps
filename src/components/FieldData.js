import React from 'react';
import {VStack, Text} from 'native-base';

const FieldData = ({field, value}) => {
  return (
    <VStack px="3" py="1.5" w="1/2">
      <Text fontWeight="light" fontSize="xs">
        {field}
      </Text>
      <Text color="coolGray.700" fontSize="md" fontWeight="bold">
        {value}
      </Text>
    </VStack>
  );
};

export default FieldData;
