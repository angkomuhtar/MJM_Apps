import {View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-chart-kit';
import {
  Avatar,
  Box,
  Heading,
  HStack,
  ScrollView,
  VStack,
  Text,
} from 'native-base';

const Home = () => {
  return (
    <Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack
          borderBottomLeftRadius="3xl"
          background="lightBlue.300"
          px={4}
          py={10}>
          <HStack mb={10} alignItems="center" justifyContent="space-between">
            <Avatar
              bg="indigo.500"
              size="md"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              RS
            </Avatar>
            <VStack ml={4} flex={1}>
              <Text fontWeight="light" fontSize="xs" fontFamily="Raleway">
                Welcome back,
              </Text>
              <Text
                style={[
                  tw`text-2xl font-bold text-gray-600`,
                  {fontFamily: 'Raleway'},
                ]}>
                Jhon Doe
              </Text>
            </VStack>
            <TouchableOpacity style={tw`bg-gray-600 rounded-full p-2`}>
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#2bbbee"
              />
            </TouchableOpacity>
          </HStack>
        </VStack>
        <VStack mx={4} mt="-60px" style={tw`bg-gray-600 rounded-2xl p-5`}>
          <HStack alignItems="center" mb={1}>
            <MaterialIcons
              name="trending-up"
              size={18}
              style={tw`text-green-500`}
            />
            <Text style={tw`font-semibold text-green-500 ml-2`}>
              2,07 Today
            </Text>
          </HStack>
          <View style={tw`flex flex-row items-end`}>
            <Text style={tw`text-white text-3xl font-bold mr-3`}>Rp.</Text>
            <Text style={tw`text-white text-3xl font-bold`}>1.000</Text>
          </View>
          <Text style={tw`text-white text-xs mt-2 font-semibold`}>
            Rp. 2.000 This Month
          </Text>
        </VStack>
        <VStack p={4} mt={5} borderTopRadius="3xl">
          <Heading size="lg">Sales</Heading>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 30} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: '#fff',
              backgroundGradientToOpacity: 0,
              strokeWidth: 2,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(43, 186, 238, 1)`,
              labelColor: (opacity = 1) => `rgba(43, 186, 238, 1)`,
              style: {
                borderRadius: 16,
                padding: 10,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '0',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={tw`mt-10 rounded-lg`}
          />
        </VStack>
        <VStack p={4}>
          <Heading size="lg">Last Transaction</Heading>
          <HStack
            py={4}
            style={tw`justify-between items-center pr-2 border-b border-gray-200`}>
            <View style={tw`rounded-full bg-blue-500/20 p-4`}>
              <MaterialIcons name="thumbs-up-down" size={24} />
            </View>
            <View style={tw`flex-1 mx-4`}>
              <Text style={tw`font-bold text-xl`}>Sales</Text>
              <Text style={tw`font-semibold leading-4 text-gray-400/70`}>
                since last week
              </Text>
            </View>
            <Text style={tw`font-extrabold text-xl`}>2.520K</Text>
          </HStack>
          <HStack
            py={4}
            style={tw`justify-between items-center pr-2 border-b border-gray-200`}>
            <View style={tw`rounded-full bg-blue-500/20 p-4`}>
              <MaterialIcons name="thumbs-up-down" size={24} />
            </View>
            <View style={tw`flex-1 mx-4`}>
              <Text style={tw`font-bold text-xl`}>Sales</Text>
              <Text style={tw`font-semibold leading-4 text-gray-400/70`}>
                since last week
              </Text>
            </View>
            <Text style={tw`font-extrabold text-xl`}>2.520K</Text>
          </HStack>
          <HStack
            py={4}
            style={tw`justify-between items-center pr-2 border-b border-gray-200`}>
            <View style={tw`rounded-full bg-blue-500/20 p-4`}>
              <MaterialIcons name="thumbs-up-down" size={24} />
            </View>
            <View style={tw`flex-1 mx-4`}>
              <Text style={tw`font-bold text-xl`}>Sales</Text>
              <Text style={tw`font-semibold leading-4 text-gray-400/70`}>
                since last week
              </Text>
            </View>
            <Text style={tw`font-extrabold text-xl`}>2.520K</Text>
          </HStack>
          <HStack py={4} style={tw`justify-between items-center pr-2`}>
            <View style={tw`rounded-full bg-blue-500/20 p-4`}>
              <MaterialIcons name="thumbs-up-down" size={24} />
            </View>
            <View style={tw`flex-1 mx-4`}>
              <Text style={tw`font-bold text-xl`}>Sales</Text>
              <Text style={tw`font-semibold leading-4 text-gray-400/70`}>
                since last week
              </Text>
            </View>
            <Text style={tw`font-extrabold text-xl`}>2.520K</Text>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Home;
