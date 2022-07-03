import {
  Center,
  Heading,
  HStack,
  ScrollView,
  VStack,
  Text,
  Pressable,
  Button,
} from 'native-base';
import {Dimensions, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ApprovalTabs from './ApprovalTabs';

const TopTab = createMaterialTopTabNavigator();

const Apptabs = () => {
  return (
    <VStack h="9">
      <Text>test</Text>
    </VStack>
  );
};

const Approval = () => {
  return (
    <SafeAreaView>
      <Center
        p={12}
        pb="16"
        background="lightBlue.300"
        borderBottomLeftRadius="3xl">
        <Heading size="md" color="white">
          PO Approval
        </Heading>
      </Center>
      <ApprovalTabs />
      <ScrollView horizontal showsVerticalScrollIndicator={false}></ScrollView>
    </SafeAreaView>
  );
};

export default Approval;
