import React from 'react';
import {Center, HStack, VStack, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ListItem = ({iconName, title, kategori, subtitle, field, value}) => {
  return (
    <HStack
      py="3"
      space="3"
      justifyContent="space-between"
      alignItems="center"
      borderBottomColor="coolGray.400"
      borderBottomWidth={1}>
      <Center p="3" background="lightBlue.200" borderRadius="full">
        <Ionicons name={iconName} size={35} />
      </Center>
      <VStack flex={1}>
        <Text color="coolGray.700" fontSize="md" fontWeight="bold">
          {title}
        </Text>
        {kategori && (
          <Text fontWeight="hairline" fontSize="xs">
            {kategori}
          </Text>
        )}
        <Text fontWeight="light" fontSize="xs">
          {subtitle}
        </Text>
      </VStack>
      <VStack>
        <Text fontWeight="light" fontSize="xs">
          {field}
        </Text>
        <Text color="coolGray.700" fontSize="md" fontWeight="bold">
          {value}
        </Text>
      </VStack>
    </HStack>
  );
};

export default ListItem;
