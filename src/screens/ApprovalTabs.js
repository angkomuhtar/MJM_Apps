import {
  HStack,
  VStack,
  Text,
  Box,
  Button,
  Pressable,
  ScrollView,
} from 'native-base';
import {TouchableOpacity, Animated, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'twrnc';
import ListItem from '../components/ListItem';

const items = [
  {
    id: '1',
    title: 'Approval',
    aicon: 'clipboard-outline',
    icon: 'clipboard',
  },
  {
    id: '2',
    title: 'Allow',
    aicon: 'checkmark-done-circle-outline',
    icon: 'checkmark-done-circle',
  },
  {
    id: '3',
    title: 'Denied',
    aicon: 'remove-circle-outline',
    icon: 'remove-circle',
  },
];

const ApprovalTabs = () => {
  const [index, setIndex] = useState(1);
  return (
    <VStack px={4} mt="-35px">
      <VStack p={1} borderRadius="md">
        <HStack space={1} backgroundColor="coolGray.300">
          {items.map(({id, title, icon, aicon}, key) => (
            <TouchableOpacity
              onPress={() => {
                setIndex(id);
              }}
              key={key}
              style={tailwind.style('flex-row', 'flex-1')}>
              <Animated.View
                style={tailwind.style(
                  id == index ? 'border-b-2 bg-gray-200' : '',
                  'flex-row',
                  'rounded-md',
                  'flex-1',
                  'p-4',
                  'border-blue-300',
                  'justify-center',
                  'items-center',
                )}>
                <Ionicons
                  name={id == index ? icon : aicon}
                  style={tailwind.style(id == index && 'text-blue-500')}
                  size={20}
                />
                <Text
                  style={tailwind.style(
                    'capitalize',
                    'text-sm',
                    'ml-2',
                    id == index ? 'text-blue-500 font-semibold' : 'font-light',
                  )}>
                  {title}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </HStack>
        <ScrollView>
          <ListItem
            title="PO Galon"
            field="May 20"
            subtitle="ambo Nai"
            iconName="receipt"
            value="22 jt"
          />
          <ListItem
            title="PO Galon"
            field="May 20"
            subtitle="ambo Nai"
            iconName="receipt"
            value="22 jt"
          />
          <ListItem
            title="PO Galon"
            field="May 20"
            subtitle="ambo Nai"
            iconName="receipt"
            value="22 jt"
          />
          <ListItem
            title="PO Galon"
            field="May 20"
            subtitle="ambo Nai"
            iconName="receipt"
            value="22 jt"
          />
          <ListItem
            title="PO Galon"
            field="May 20"
            subtitle="ambo Nai"
            iconName="receipt"
            value="22 jt"
          />
        </ScrollView>
      </VStack>
    </VStack>
  );
};

export default ApprovalTabs;
